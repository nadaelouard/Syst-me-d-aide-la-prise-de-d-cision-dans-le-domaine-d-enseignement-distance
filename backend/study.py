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
df3 = pd.read_excel("C:\\Users\\hp\\Desktop\\PFA\\nada.xlsx")

# Afficher les premières lignes du DataFrame
#print(df3)
# Charger les données depuis le fichier Excel
#df3 = pd.read_excel("C:\\Users\\hp\\Desktop\\PFA\\nada.xlsx")

# Remplacer les valeurs dans la colonne "Gender"
df3['Gender'] = df3['Gender'].replace({'Boy': 1, 'Girl': 0})
df3['Education Level'] = df3['Education Level'].replace({'University': 1, 'School': 0, 'College':0})
df3['Institution Type'] = df3['Institution Type'].replace({'Government': 1, 'Non Government': 0})
df3['IT Student'] = df3['IT Student'].replace({'Yes': 1, 'No': 0})
df3['Location'] = df3['Location'].replace({'Yes': 1, 'No': 0})
df3['Load-shedding'] = df3['Load-shedding'].replace({'Low': 1, 'High': 0})
df3['Financial Condition'] = df3['Financial Condition'].replace({'Mid': 1, 'Poor': 0,'Rich':1})
df3['Internet Type'] = df3['Internet Type'].replace({'Wifi': 1, 'Mobile Data': 0})
df3['Network Type'] = df3['Network Type'].replace({'4G': 1, '3G': 0,'2G' : 0})
df3['Self Lms'] = df3['Self Lms'].replace({'Yes': 1, 'No': 0})
df3['Device'] = df3['Device'].replace({'Mobile': 1, 'Computer': 0 ,'Tab' : 1})
df3['Adaptivity Level'] = df3['Adaptivity Level'].replace({'Moderate': 1, 'Low': 0, 'High' : 0})

# Afficher le DataFrame modifié
print(df3)