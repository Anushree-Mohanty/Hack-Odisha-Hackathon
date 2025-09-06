# apps.py
from utils import load_counts, estimate_wait_time, density_level
from heatmap import generate_heatmap

def main():
    print("📊 Loading crowd data...")
    df = load_counts()

    # Take last frame data for demo
    last_frame = df.iloc[-1]
    count = int(last_frame["count"])

    print(f"👥 People detected: {count}")
    wait_time = estimate_wait_time(count)
    density = density_level(count)

    print(f"⏳ Estimated Wait Time: {wait_time} mins")
    print(f"🌡️ Density Level: {density}")

    # Generate demo heatmap with dummy zones
    zone_counts = {
        "Singhdwar": count,
        "Jagamohan": count // 2,
        "Natamandap": count // 3,
        "Bhogamandap": count // 1.5
    }
    generate_heatmap(zone_counts)

if __name__ == "__main__":
    main()
