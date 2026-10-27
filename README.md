# Toddler learning game (EN / RU / Cantonese) — v8

A single-page, offline-friendly game for a 3–4 year old, made for iPad Safari.

- `index.html`: the whole game (HTML, CSS and JS in one file).
- `sounds/`: short real animal recordings (mp3, CC0 / public domain, plus one CC BY 3.0 clip). Sources and licences are in `sounds/CREDITS.md`.
- `.nojekyll`: tells GitHub Pages to serve the files as-is.

Open `index.html` over http(s) (e.g. GitHub Pages). Opened as a local `file://`, the animal recordings can't load and the game uses built-in synth sounds instead.

## New in v8: Car World (English only)
A big **Car World** button at the top of the English menu. Everything is spoken, so no reading is needed. Rounds are 5 items. A round gives 1–3 stars and one sticker. The next level unlocks after a round with 2 or more stars. Levels go up to 6.

- **Word Road**: hear a word, then drive (tap or drag) the car down the road to the matching picture.
- **Car Race**: each car carries a picture. Tap the car with the spoken word and it zooms ahead. After 5 words the cars race to the finish line ("The blue car wins!").
- **Car Wash**: scrub the mud off a car to find a hidden picture ("It's a cat! And the car is red!"). From level 2 there is a question after the car is clean.
- **Number Parking**: "Park in number 3!" (finding numbers, up to 20 at level 5) and "Park 4 cars! Let's count!" (counting up to 10).
- **Paint Shop**: "Paint the car blue!" Pick the right paint pot.
- **Sticker Book**: 20 vehicle stickers and 20 animal stickers to collect.

Word levels (Word Road, Car Race, Car Wash): 1 = 2 pictures of familiar words; 2 = 3 pictures, adds toys and food; 3–4 = 3–4 pictures, all Starters topics (colours, numbers 1–10, animals, transport, toys, food, body, family, clothes), often from the same topic; 5–6 = short phrases such as "a blue car" or "three apples".

Parents: hold the 🏠 button for 2 seconds to get back to the language picker. There, ⚙️ opens settings (name and age), and 📊 shows Car World progress: words heard and right first time by topic, levels, stars, stickers, time played, words to practise, and a reset button. Progress is saved on the device (localStorage).
