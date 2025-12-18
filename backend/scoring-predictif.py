import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler

def calculate_performance_score(df):
    df['CA_Moyen_Mois'] = df.groupby('VendeurID')['CA'].transform('mean')
    df['Marge_Net'] = (df['CA'] - df['COGS']) / df['CA']
    df['Score'] = df['Marge_Net'] * 0.5 + (df['CA_Moyen_Mois'] / df['CA_Moyen_Mois'].max()) * 0.5
    return df

def simulate_budget_impact(df, budget_increase=0.15):
    roi = np.random.uniform(3.0, 7.0, 10000)
    return {'roi_median': np.median(roi), 'budget': df['CA'].sum() * budget_increase}

if __name__ == "__main__":
    print("Scoring module loaded")
