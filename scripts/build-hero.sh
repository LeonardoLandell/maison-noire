#!/bin/bash

INPUT="assets/hero.mp4"
OUTPUT="public/videos"

mkdir -p "$OUTPUT"

echo "🎬 Gerando Desktop..."
ffmpeg -y -i "$INPUT" \
-vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080" \
-c:v libvpx-vp9 \
-crf 32 \
-b:v 0 \
-an \
"$OUTPUT/hero-desktop.webm"

echo "🎬 Gerando Tablet..."
ffmpeg -y -i "$INPUT" \
-vf "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720" \
-c:v libvpx-vp9 \
-crf 34 \
-b:v 0 \
-an \
"$OUTPUT/hero-tablet.webm"

echo "🎬 Gerando Mobile..."
ffmpeg -y -i "$INPUT" \
-vf "scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280" \
-c:v libvpx-vp9 \
-crf 36 \
-b:v 0 \
-an \
"$OUTPUT/hero-mobile.webm"

echo "🖼️ Gerando Poster..."
ffmpeg -y -ss 00:00:02 -i "$INPUT" \
-frames:v 1 \
-update 1 \
"$OUTPUT/hero-poster.jpg"

echo "✅ Finalizado!"