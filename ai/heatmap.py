# heatmap.py
import matplotlib.pyplot as plt
import numpy as np
from utils import density_level

def generate_heatmap(zone_counts, output_path="../outputs/heatmap.png"):
    """
    Generate heatmap-like visualization from zone crowd counts.
    zone_counts = dict { "ZoneName": count }
    """
    zones = list(zone_counts.keys())
    counts = list(zone_counts.values())

    colors = []
    for c in counts:
        level = density_level(c)
        if "Low" in level:
            colors.append("green")
        elif "Moderate" in level:
            colors.append("orange")
        else:
            colors.append("red")

    fig, ax = plt.subplots(figsize=(6, 6))
    ax.bar(zones, counts, color=colors)
    ax.set_title("Temple Crowd Heatmap (Demo)")
    ax.set_ylabel("People Count")
    plt.savefig(output_path)
    plt.close()
    print(f"✅ Heatmap saved at {output_path}")

if __name__ == "__main__":
    # Example usage
    demo_counts = {
        "Singhdwar": 80,
        "Jagamohan": 45,
        "Natamandap": 20,
        "Bhogamandap": 60
    }
    generate_heatmap(demo_counts)
