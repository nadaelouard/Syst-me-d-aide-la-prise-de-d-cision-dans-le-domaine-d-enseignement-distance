import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from imblearn.pipeline import Pipeline as ImbPipeline
from imblearn.over_sampling import SMOTE
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report, roc_auc_score
import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)
import os
import seaborn as sns  # Import seaborn library
for dirname, _, filenames in os.walk('/kaggle/input'):
    for filename in filenames:
        print(os.path.join(dirname, filename))

# Charger les données depuis le fichier Excel

df3 = pd.read_excel("C:\\Users\\hp\\Desktop\\PFA\\data.xlsx")

#datascience (Netoyage des donnees, valeurs manques; , les statistiques, data preprocessing, traitement des donnees)
#visualisation des donnees
#
# ## Nettoyage des Données

# Vérifier les valeurs manquantes
print("Nombre de valeurs manquantes par colonne:")
df3.isnull().sum().sort_values(ascending=False).head(20).reset_index(name='Nb valeurs manquantes')


# Afficher le nombre de valeurs manquantes restantes
print("Nombre de valeurs manquantes restantes par colonne:")
df3.isnull().sum().sort_values(ascending=False).head(20).reset_index(name='Nb valeurs manquantes')




# ## Visualisation des Données

# Distribution des variables numériques
for col in df3.select_dtypes(include=['int', 'float']).columns:
    plt.figure(figsize=(8, 6))
    sns.distplot(df3[col])
    plt.title("Distribution de la variable " + col)
    plt.show()

# Distribution des variables catégorielles
for col in df3.select_dtypes(include=['object']).columns:
    plt.figure(figsize=(8, 6))
    sns.countplot(x=col, data=df3)
    plt.title("Distribution de la variable " + col)
    plt.show()


# Remplacer les valeurs dans les colonnes
df3['sexe'] = df3['sexe'].replace({'Boy': 1, 'Girl': 0})
df3['Niveau éducation'] = df3['Niveau éducation'].replace({'University': 2, 'School': 0, 'College':1})
df3['Type établissement'] = df3['Type établissement'].replace({'Government': 1, 'Non Government': 0})
df3['étudiant en informatique' ] = df3['étudiant en informatique '].replace({'Yes': 1, 'No': 0})
df3['Location'] = df3['Location'].replace({'Yes': 1, 'No': 0})
df3['Délestage'] = df3['Délestage'].replace({'Low': 1, 'High': 0})
df3['Condition financière '] = df3['Condition financière '].replace({'Mid': 1, 'Poor': 0,'Rich':2})
df3[' Type Internet '] = df3[' Type Internet '].replace({'Wifi': 1, 'Mobile Data': 0})
df3[' Type de réseau'] = df3[' Type de réseau'].replace({'4G': 2, '3G': 1,'2G' : 0})
df3['Self Lms'] = df3['Self Lms'].replace({'Yes': 1, 'No': 0})
df3['Appareil'] = df3['Appareil'].replace({'Mobile': 1, 'Computer': 0 ,'Tab' : 2})
df3['Niveau adaptabilité'] = df3['Niveau adaptabilité'].replace({'Moderate': 1, 'Low': 0, 'High' : 0})

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
    ('preprocessor', preprocessor),


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


# Convertir la colonne 'Self Lms' en chaînes de caractères
df3['Self Lms'] = df3['Self Lms'].astype(str)

plt.figure(figsize=(8, 6))
sns.countplot(x='Niveau adaptabilité', hue='Self Lms', data=df3, palette='Set2')
plt.title('Distribution de la variable cible par rapport à Self Lms')
plt.xlabel('Niveau adaptabilité')
plt.ylabel("Nombre d'individus")
plt.legend(title='Self Lms', loc='upper right', labels=['No', 'Yes'])
plt.show()