# Field & Timber

Static company-profile demonstration for a fictional residential remodeling firm in Charleston, South Carolina.

## Tech stack

- The pages are static HTML and CSS, plus one small JavaScript file for the menu.
- The first screen is a photograph, not the 3D house. The house sits in a block below that screen, and the kitchen opens beside it. Both are viewed with a separate bundle: React, React Three Fiber, and drei, built with Vite into `assets/viewer/viewer.js`. The rest of the site is not a React app.
- No database, and no server-side form handler. The contact form only shows a message in the browser.
- Type is loaded from Google Fonts (Fraunces and Outfit), with system serif and sans fallbacks.
- The first-screen photograph is `assets/shore-hero.jpg`, an aerial of beachfront apartments by Matt Fitz Gibaud on Pexels (https://www.pexels.com/photo/aerial-view-of-beachfront-apartments-at-sunset-36788380/). The page credits that name. It is not a Vinode image and not this firm’s work. Older page photographs, where they remain, are local JPEGs saved from Unsplash (Unsplash License), also stand-ins.
- `assets/models/house.glb` is the Quaternius house from https://poly.pizza/m/HeHDd2rTpX (CC0). The Harleston page uses that same Quaternius floor (`assets/models/kitchen.glb`, mesh `Floor_Kitchen1`, from https://poly.pizza/m/iDftIvQZWE, CC0) plus three Kenney Furniture Kit pieces, also CC0: `assets/models/kenney-cabinet.glb`, `kenney-fridge.glb`, and `kenney-stove.glb` from https://kenney.nl/assets/furniture-kit. The page calls this a visual demo, low poly, not a photograph of the fictional Harleston kitchen. Rebuild the viewer from `viewer/` with `npm install` and `npm run build`.

Open `index.html` in a browser, or serve the folder with any static file server so root-relative links resolve. Example:

```
python3 -m http.server 8080
```

Then visit `http://127.0.0.1:8080/`.

## This is a demo

Field & Timber, the Bogard Street studio, the phone number, the testimonials, the case studies, and every dollar figure are fictional. Prices are labeled as sample demo figures and are not bids. The contact form only shows a message in the browser. It does not send email.

## Page structure

The section order follows a typical WordPress / Elementor company-profile layout:

1. Top bar
2. Header with navigation and a quote-request button
3. Hero
4. Short introduction
5. Services
6. Featured projects
7. Areas served
8. Quote-request band
9. Footer

There is no shop, cart, checkout, or product grid.

### Pages

- `/` Home
- `/about/` About the shop
- `/services/` Kitchens, historic restoration, whole-home work, and baths
- `/service-area/` Charleston neighborhoods (local copy)
- `/contact/` Walk-through request (static demo form)
- `/work/harleston-kitchen/` Kitchen case study
- `/work/south-of-broad/` Historic restoration case study
- `/work/wagener-whole-home/` Whole-home case study

## Photographs

Downloaded from `images.unsplash.com` after each URL returned HTTP 200:

- `house-dusk.jpg` — photo-1570129477492-45c003edd2be
- `house-front.jpg` — photo-1564013799919-ab600027ffc6
- `brick.jpg` — photo-1464146072230-91cabc968266
- `kitchen-island.jpg` — photo-1600489000022-c2086d79f9d4
- `kitchen-wood.jpg` — photo-1556912173-46c336c7fd55
- `dining.jpg` — photo-1600585152220-90363fe7e115
- `bath.jpg` — photo-1552321554-5fefe8c9ef14
- `sink.jpg` — photo-1584622650111-993a426fbf0a
- `hallway.jpg` — photo-1560185007-c5ca9d2c014d
- `floor.jpg` — photo-1581858726788-75bc0f6a952d

## Not published

The public demo is https://field.iquee.tech. Dollar figures stay labeled as demo figures. The form does not send.
