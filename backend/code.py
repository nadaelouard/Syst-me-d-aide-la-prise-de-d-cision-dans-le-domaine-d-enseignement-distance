import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from imblearn.pipeline import Pipeline as ImbPipeline
from imblearn.over_sampling import SMOTE
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report, roc_auc_score

# Charger les données depuis le fichier Excel
df3 = pd.read_excel("C:\\Users\\hp\\Desktop\\PFA\\data.xlsx")

# Afficher les premières lignes du DataFrame pour vérification
print(df3.head())

# Remplacer les valeurs dans les colonnes
df3['sexe'] = df3['sexe'].replace({'Boy': 1, 'Girl': 0})
df3['Niveau éducation'] = df3['Niveau éducation'].replace({'University': 1, 'School': 2, 'College': 3})
df3['Type établissement'] = df3['Type établissement'].replace({'Government': 1, 'Non Government': 0})
df3['étudiant en informatique'] = df3['étudiant en informatique'].replace({'Yes': 1, 'No': 0})
df3['Location'] = df3['Location'].replace({'Yes': 1, 'No': 0})
df3['Délestage'] = df3['Délestage'].replace({'Low': 1, 'High': 0})
df3['Condition financière '] = df3['Condition financière '].replace({'Mid': 1, 'Poor': 0, 'Rich': 1})
df3['Type Internet'] = df3['Type Internet'].replace({'Wifi': 1, 'Mobile Data': 0})
df3['Type de réseau'] = df3['Type de réseau'].replace({'4G': 1, '3G': 0, '2G': 0})
df3['Self Lms'] = df3['Self Lms'].replace({'Yes': 1, 'No': 0})
df3['Appareil'] = df3['Appareil'].replace({'Mobile': 1, 'Computer': 0, 'Tab': 1})
df3['Niveau adaptabilité'] = df3['Niveau adaptabilité'].replace({'Moderate': 1, 'Low': 0, 'High': 0})

# Afficher le DataFrame modifié
print(df3.columns)

# Diviser les données en caractéristiques (X) et cible (y)
X = df3.drop(columns=['Niveau adaptabilité'])  # Caractéristiques
y = df3['Niveau adaptabilité']  # Cible

# Diviser les données en ensembles d'entraînement et de test
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Créer des listes de colonnes numériques et catégorielles
numeric_features = X.select_dtypes(include=['int', 'float']).columns
categorical_features = X.select_dtypes(include=['object']).columns

# Définir les transformateurs pour les variables numériques et catégorielles
numeric_transformer = StandardScaler()
categorical_transformer = OneHotEncoder(handle_unknown='ignore')

# Appliquer les transformations aux colonnes
preprocessor = ColumnTransformer(
    transformers=[
        ('num', numeric_transformer, numeric_features),
        ('cat', categorical_transformer, categorical_features)
    ])

# Créer un pipeline avec SMOTE et RandomForestClassifier
pipeline_rf = ImbPipeline(steps=[
    ('preprocessor', preprocessor),.


    ('smote', SMOTE(random_state=42)),
    ('classifier', RandomForestClassifier(random_state=42))
])

# Entraîner le modèle et prédire les valeurs
pipeline_rf.fit(X_train, y_train)
y_pred = pipeline_rf.predict(X_test)
y_pred_proba = pipeline_rf.predict_proba(X_test)[:, 1]

# Afficher les résultats
print("Train Accuracy Score:", accuracy_score(y_train, pipeline_rf.predict(X_train)))
print("Test Accuracy Score:", accuracy_score(y_test, y_pred))
print("Rapport de classification:\n", classification_report(y_test, y_pred))
print("AUC:", roc_auc_score(y_test, y_pred_proba))
