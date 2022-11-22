# SauceSource

<img width="700" alt="Sauce Source" src="https://user-images.githubusercontent.com/794551/186691778-5b3bb14b-3091-4465-934f-df2ff3cb38fb.png">

## Add some fuel to your fire.

Looking to spice up your life? SauceSource is a web app that allows you to learn about and curate different kinds of hot sauces. The app functions as a reference guide as well as a discovery tool. Users can navigate the site to see a selection of different sauces, complete with images of their bottles, their rating on the Scoville Scale, the origins of the sauce, what foods they pair best with, and if the sauce is organic or kosher.

## Notable Features

- Clean and easily-navigable user experience is designed to be fully responsive.
- Looks and works great on both desktop and mobile platforms.
- Ability to add, edit, see information about, and delete sauces.
- Asks to confirm deletion of any sauce, to prevent unintentional user action and data loss.
- "Sticky" navigation bar is always present on screen as user scrolls the page.
- Assigns each sauce a "flame score" from 1 to 5 that is calculated based on the sauce's Scoville Heat Unit (SHU) rating.
- Formats and displays Scoville ratings correctly using [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat).
- Uses [react-helmet-async](https://www.npmjs.com/package/react-helmet-async) to dynamically change page titles based on current route.
- Uses [react-icons](https://www.npmjs.com/package/react-icons) for custom button icons.
- Uses [react-promise-tracker](https://www.npmjs.com/package/react-promise-tracker) and [react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner) to display a loading indicator during fetch calls.
- Uses [react-scroll-up-button](https://www.npmjs.com/package/react-scroll-up-button) to display a button that scrolls to the top of the list of sauces when clicked.
- Links to buy sauces from external websites on each sauce page.
- Customized [favicon](https://saucesource.netlify.app/favicon.ico).
- Customized [font](https://www.fontsquirrel.com/fonts/chunkfive).
- Customized [error page](https://saucesource.netlify.app/error).
- "[About](https://saucesource.netlify.app/about)" page with details of project and credits.

## Links

- [Frontend Deployment](https://saucesource.netlify.app/)
- [Backend Deployment](https://saucesource.fly.dev/)
- [Trello Board](https://trello.com/b/75UsM2Ye/saucesource)
- [ERD](https://miro.com/app/board/uXjVPdYXzrM=/)
- [Wireframes](https://wireframe.cc/DEJeRW)
- [Project Prompt](https://github.com/joinpursuit/8-3-full-stack-portfolio)

## Local Setup

First, clone this repository to your local machine.

```bash
git clone git@github.com:Scheiber/saucesource.git
```

It is recommended to use two separate terminal instanaces so that the front-end and back-end can run concurrently.

### Front-end Setup

Prerequisites are Git and Node.js.

First, navigate to the front-end directory.

```bash
cd saucesource/front-end
```

Next, create a .env file to allow the front-end to access the back-end locally.

```bash
echo "REACT_APP_API_URL=http://localhost:3333" >> .env
```

Next, install the required node modules.

```bash
npm i
```

Finally, start the server.

```bash
npm start
```

### Back-end Setup

Prerequisites are Git, Node.js, and Postgres.

First, navigate to the back-end directory.

```bash
cd saucesource/back-end
```

Next, create a .env file to access the database locally.

```bash
echo "PORT=3333\nPG_HOST=localhost\nPG_PORT=5432\nPG_DATABASE=saucesource" >> .env
```

Next, install the required node modules.

```bash
npm i && npm i -g nodemon
```

Next, initialize and seed the database.

```bash
npm run db:init && npm run db:seed
```

Finally, start the server.

```bash
nodemon server.js
```

## Acknowledgments

Much gratitude goes towards the testers and reviewers of this project, particularly [Jossy Pascasio](https://github.com/named-josie) for design consulting, and [Pratima Roy](https://github.com/PratimaRoy) for user experience review.

## Screenshots

![Home Page](https://user-images.githubusercontent.com/794551/188517766-9c14b580-56c1-47d0-a838-46770aebd7ac.png)
![All Sauces (Index) Page](https://user-images.githubusercontent.com/794551/188517779-fd6018d6-2910-441c-9386-2c8d4f845056.png)
![Add Sauce (Create) Page](https://user-images.githubusercontent.com/794551/188517793-b2610de0-4002-46b6-931d-df9ac0199839.png)
![Sauce Info (Read) Page](https://user-images.githubusercontent.com/794551/188517845-f630ecb0-6d62-45f5-8818-dd999994545f.png)
![Edit Sauce (Update) Page](https://user-images.githubusercontent.com/794551/188517858-151979a4-86b4-4d7e-9b7d-12e17fb3a9ad.png)
![About Page](https://user-images.githubusercontent.com/794551/188517866-a7e72ea9-11d9-4a7b-998c-6f12e7be3a62.png)
