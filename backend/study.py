# This Python 3 environment comes with many helpful analytics libraries installed
# It is defined by the kaggle/python Docker image: https://github.com/kaggle/docker-python
# For example, here's several helpful packages to load

import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)


# Input data files are available in the read-only "../input/" directory
# For example, running this (by clicking run or pressing Shift+Enter) will list all files under the input directory

import os
for dirname, _, filenames in os.walk('/kaggle/input'):
    for filename in filenames:
        print(os.path.join(dirname, filename))

# You can write up to 20GB to the current directory (/kaggle/working/) that gets preserved as output when you create a version using "Save & Run All" 
# You can also write temporary files to /kaggle/temp/, but they won't be saved outside of the current session
# Charger les données depuis le fichier Excel
df3 = pd.read_excel("C:\\Users\\hp\\Desktop\\PFA\\data.xlsx")

# Afficher les premières lignes du DataFrame
#print(df3)
# Charger les données depuis le fichier Excel
#df3 = pd.read_excel("C:\\Users\\hp\\Desktop\\PFA\\nada.xlsx")

# Remplacer les valeurs dans la colonne "Gender"
df3['sexe'] = df3['sexe'].replace({'Boy': 1, 'Girl': 0})
df3['Niveau éducation'] = df3['Niveau éducation'].replace({'University': 1, 'School': 0, 'College':0})
df3['Type établissement'] = df3['Type établissement'].replace({'Government': 1, 'Non Government': 0})
df3['étudiant en informatique' ] = df3['étudiant en informatique '].replace({'Yes': 1, 'No': 0})
df3['Location'] = df3['Location'].replace({'Yes': 1, 'No': 0})
df3['Délestage'] = df3['Délestage'].replace({'Low': 1, 'High': 0})
df3['Condition financière '] = df3['Condition financière '].replace({'Mid': 1, 'Poor': 0,'Rich':1})
df3[' Type Internet '] = df3[' Type Internet '].replace({'Wifi': 1, 'Mobile Data': 0})
df3[' Type de réseau'] = df3[' Type de réseau'].replace({'4G': 1, '3G': 0,'2G' : 0})
df3['Self Lms'] = df3['Self Lms'].replace({'Yes': 1, 'No': 0})
df3['Appareil'] = df3['Appareil'].replace({'Mobile': 1, 'Computer': 0 ,'Tab' : 1})
df3['Niveau adaptabilité'] = df3['Niveau adaptabilité'].replace({'Moderate': 1, 'Low': 0, 'High' : 0})

# Afficher le DataFrame modifié
print(df3)