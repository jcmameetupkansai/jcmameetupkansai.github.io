#!/bin/bash
# photos/01, photos/02 ... の中の画像を走査して data/photos.js を作り直す。
# 使い方:  bash tools/build-photos.sh   （site フォルダ内で実行）
cd "$(dirname "$0")/.." || exit 1
out="data/photos.js"
{
  echo "/* tools/build-photos.sh が自動生成します。手で編集しないでください。 */"
  echo "window.JCMA_PHOTOS = {"
  first=1
  for dir in photos/*/; do
    [ -d "$dir" ] || continue
    no=$(basename "$dir")
    files=$(ls "$dir" | grep -iE '\.(jpe?g|png|webp|gif)$' | sort)
    [ -z "$files" ] && continue
    [ $first -eq 0 ] && echo ","
    first=0
    printf '  "%s": [' "$no"
    printf '%s' "$(echo "$files" | sed 's/.*/"&"/' | paste -sd, -)"
    printf ']'
  done
  echo ""
  echo "};"
} > "$out"
echo "更新しました: $out"
