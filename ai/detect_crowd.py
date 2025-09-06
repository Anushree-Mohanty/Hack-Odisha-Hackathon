from ultralytics import YOLO
import cv2
import pandas as pd
import os

# Paths
VIDEO_PATH = " sample_crowd.mp4"
OUTPUT_CSV = "../outputs/counts.csv"
SNAPSHOT_DIR = "../outputs/frames"

# Ensure outputs folder exists
os.makedirs("../outputs", exist_ok=True)
os.makedirs(SNAPSHOT_DIR, exist_ok=True)

# Load YOLOv8 nano (small & fast)
model = YOLO("yolov8n.pt")  # pre-trained COCO model

# Open video
cap = cv2.VideoCapture(VIDEO_PATH)

if not cap.isOpened():
    print(f"❌ Error: Could not open video at {VIDEO_PATH}")
    exit()

# DataFrame to save results
df = pd.DataFrame(columns=["frame", "count"])

frame_id = 0

print("▶ Starting crowd detection... Press 'q' to quit")

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break

    frame_id += 1

    # Run detection (only 'person' class → COCO class id 0)
    results = model(frame, classes=[0], verbose=False)

    # Count number of people
    count = len(results[0].boxes)

    # Append to DataFrame
    df.loc[len(df)] = [frame_id, count]

    # Draw detections
    annotated = results[0].plot()
    cv2.putText(annotated, f"People: {count}", (20, 40),
                cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)

    # Save snapshot every 30 frames
    if frame_id % 30 == 0:
        cv2.imwrite(f"{SNAPSHOT_DIR}/frame_{frame_id}.jpg", annotated)

    # Show live preview
    cv2.imshow("Crowd Detection", annotated)

    # Print debug info
    print(f"Frame {frame_id} → People detected: {count}")

    # Quit on 'q'
    if cv2.waitKey(1) & 0xFF == ord("q"):
        break

cap.release()
cv2.destroyAllWindows()

# Save results to CSV
df.to_csv(OUTPUT_CSV, index=False)
print(f"✅ Detection finished. Results saved to {OUTPUT_CSV}")
print(f"📸 Snapshots saved in {SNAPSHOT_DIR}")
