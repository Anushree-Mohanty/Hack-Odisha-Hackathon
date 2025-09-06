import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import json
import os

# Paths
CSV_PATH = "../outputs/counts.csv"
HEATMAP_IMG = "../outputs/heatmap.png"
JSON_PATH = "../outputs/crowd_data.json"

# Ensure outputs folder exists
os.makedirs("../outputs", exist_ok=True)

# Load counts data
df = pd.read_csv(CSV_PATH)

if df.empty:
    print("❌ No data found in counts.csv. Run detect_crowd.py first!")
    exit()

# For hackathon demo: simulate temple zones using frame_id % logic
zones = ["Main Gate", "Entrance Gate", "Prasad Counter", "Queue Area"]
df["zone"] = df["frame"].apply(lambda x: zones[x % len(zones)])

# Group average crowd count per zone over time
zone_data = df.groupby("zone")["count"].mean()

# Convert into heatmap-style dataframe (frames vs zones)
pivot_df = df.pivot_table(index="frame", columns="zone", values="count", fill_value=0)

# --- Save JSON for website ---
json_data = pivot_df.tail(20).to_dict(orient="list")  # last 20 frames as "live" data
with open(JSON_PATH, "w") as f:
    json.dump(json_data, f, indent=4)

print(f"✅ Crowd data exported to {JSON_PATH}")

# --- Plot Heatmap ---
plt.figure(figsize=(8, 5))
sns.heatmap(pivot_df.T, cmap="RdYlGn_r", cbar=True)

plt.title("Crowd Density Heatmap (Zones vs Time)")
plt.xlabel("Frame")
plt.ylabel("Temple Zone")

plt.tight_layout()
plt.savefig(HEATMAP_IMG)
plt.close()

print(f"✅ Heatmap saved as {HEATMAP_IMG}")
