# Toddler learning game (EN / RU / Cantonese) — v9

A single-page, offline-friendly game for a 3–4 year old, made for iPad Safari.

- `index.html`: the whole game (HTML, CSS and JS in one file).
- `sounds/`: short real animal recordings (mp3, CC0 / public domain, plus one CC BY 3.0 clip). Sources and licences are in `sounds/CREDITS.md`.
- `.nojekyll`: tells GitHub Pages to serve the files as-is.

Open `index.html` over http(s) (e.g. GitHub Pages). Opened as a local `file://`, the animal recordings can't load and the game uses built-in synth sounds instead.

## New in v9: Play Island (English only)
Choosing English now opens **Play Island**: a cartoon island in moving water with 12 bobbing pedestals. Tap a pedestal: the game says its name and opens it. On a small phone you can drag the island to see all pedestals. Stars won show on each pedestal. All the art is original (drawn in code); nothing is copied from other apps.

Pedestals: Magic Hat, Picture Puzzle, Shopping, Dress Up, Fish Bowl, Animal Tree, Treasure Chest, Paint Easel, plus **Car World**, **Numbers**, **Songs** and **More games** (the full classic English menu). Russian and Cantonese are unchanged and never show the island.

Every island game is spoken (no reading needed), uses big drag-and-drop or tap targets, has 5 steps per round, then 1–3 stars, a sticker and a level-up (levels 1–6), the same as Car World. A wrong move is never punished: the piece slides back and the word is said again.

- **Magic Hat** (shapes): drag shapes into the matching holes on a magic hat; a bunny pops out at the end. Levels 1–2: free play with circle, square, triangle, star, heart. Level 3+: "Find the star!". Level 4+: colour and shape ("the red heart"), more shapes (oval, diamond, rectangle).
- **Picture Puzzle** (things in a scene): a sea, farm or street picture has 5 grey shadows; drag the missing picture onto its shadow ("Boat!"). Level 4+: "Where is the cow?" with more choices.
- **Shopping** (food + counting): drag food from the shelves into the trolley. Levels 1–2: "Put the banana in the trolley!". Level 3+: "Two apples, please!" with a counter on the trolley. Level 5+: two kinds of food.
- **Dress Up** (clothes + colours): dress the boy step by step (socks before shoes, T-shirt before jacket). Level 3+: "Put on the red hat!" with colour choices; glasses from level 5.
- **Fish Bowl** (numbers 1–10): "Put 4 fish in the bowl!" A number-block friend grows with each fish and counts aloud. Level 3+: also "How many fish?" with big number buttons; a wrong answer counts the fish together.
- **Treasure Chest** (letters): "Find the letter M!" Drag the golden key (or tap) to the chest with that letter; it opens with treasure and a word ("M, monkey!"). Lowercase letters from level 5.
- **Animal Tree** (animals + real sounds): animals hide in leaves, a hole and bushes. Level 1: tap to discover them (real animal sounds). Then "Where is the monkey?" and "Who says moo?".
- **Paint Easel** (colours + things): pick the paint pot for "Paint the sun yellow!" (tap the pot, or drag it onto the picture). Later levels have 2–3 pictures and more colours.

The parent progress screen (📊) now shows the island games too (level, rounds, stars, best stars), time on Play Island, and words by topic (shapes, letters and things are new topics).

## v8: Car World (English only)
Car World is a pedestal on Play Island (and also at the top of "More games"). Everything is spoken, so no reading is needed. Rounds are 5 items. A round gives 1–3 stars and one sticker. The next level unlocks after a round with 2 or more stars. Levels go up to 6.

- **Word Road**: hear a word, then drive (tap or drag) the car down the road to the matching picture.
- **Car Race**: each car carries a picture. Tap the car with the spoken word and it zooms ahead. After 5 words the cars race to the finish line ("The blue car wins!").
- **Car Wash**: scrub the mud off a car to find a hidden picture ("It's a cat! And the car is red!"). From level 2 there is a question after the car is clean.
- **Number Parking**: "Park in number 3!" (finding numbers, up to 20 at level 5) and "Park 4 cars! Let's count!" (counting up to 10).
- **Paint Shop**: "Paint the car blue!" Pick the right paint pot.
- **Sticker Book**: 20 vehicle stickers and 20 animal stickers to collect.

Word levels (Word Road, Car Race, Car Wash): 1 = 2 pictures of familiar words; 2 = 3 pictures, adds toys and food; 3–4 = 3–4 pictures, all Starters topics (colours, numbers 1–10, animals, transport, toys, food, body, family, clothes), often from the same topic; 5–6 = short phrases such as "a blue car" or "three apples".

Parents: hold the 🏠 button for 2 seconds to get back to the language picker. There, ⚙️ opens settings (name and age), and 📊 shows Car World progress: words heard and right first time by topic, levels, stars, stickers, time played, words to practise, and a reset button. Progress is saved on the device (localStorage).
