# utils.py
import pandas as pd

def load_counts(csv_path="../outputs/counts.csv"):
    """Load crowd counts from CSV."""
    return pd.read_csv(csv_path)

def estimate_wait_time(count, rate=10, avg_time=1.5):
    """
    Estimate wait time in minutes.
    count = number of people detected
    rate = number of people processed per minute
    avg_time = avg minutes per person
    """
    if count == 0:
        return 0
    return round((count / rate) * avg_time, 2)

def density_level(count, low=20, high=50):
    """
    Map counts into density levels.
    Returns: ('Low 🟢' / 'Moderate 🟠' / 'High 🔴')
    """
    if count < low:
        return "Low 🟢"
    elif count < high:
        return "Moderate 🟠"
    else:
        return "High 🔴"
