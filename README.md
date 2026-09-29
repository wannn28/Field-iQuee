# Field & Timber

Static company-profile demonstration for a fictional residential remodeling firm in Charleston, South Carolina.

## Tech stack

- Static HTML, CSS, and one small JavaScript file.
- No framework, no build step, no database, and no server-side form handler.
- Type is loaded from Google Fonts (Fraunces and Outfit), with system serif and sans fallbacks.
- Photographs are local JPEGs saved from Unsplash (Unsplash License). They are stand-ins of houses, kitchens, and materials. They are not pictures of this firm’s work. No photograph is presented as a staff portrait.

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
7. Testimonials
8. Areas served
9. Quote-request band
10. Footer

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

This copy lives only as files in this folder. It is not on a public host.
