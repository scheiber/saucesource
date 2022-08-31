# SauceSource

<img width="700" alt="Sauce Source" src="https://user-images.githubusercontent.com/794551/186691778-5b3bb14b-3091-4465-934f-df2ff3cb38fb.png">

## Add some fuel to your fire.

Need to spice up your life? SauceSource is a React-based web app that allows a user to learn about and curate different types of hot sauces. Users can navigate see a selection of different sauces, complete with images of their bottles, as well as information about their rating on Scoville Scale, what foods they go best with, and if the sauce is organic or kosher.

## Notable Features

- Clean and easily navigable user experience is designed to be fully responsive. Looks and works great on both desktop and mobile platforms.
- Add, edit, see information about, and delete sauces.
- Asks to confirm deletion of any sauce, just to check that you're really sure.
- Formats and displays Scoville ratings correctly using [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat).
- Uses [react-helmet-async](https://www.npmjs.com/package/react-helmet-async) to dynamically change page titles based on current route.
- Links to buy sauces from external websites from each sauce page.
- Customized [favicon](https://saucesource.netlify.app/favicon.ico).
- Customized font.
- Customized [error page](https://saucesource.netlify.app/error).
- "[About](https://allocate.netlify.app/about)" page with details of project and credits.

## Links

- [Frontend Deployment](https://saucesource.netlify.app/)
- [Backend Deployment](https://saucesource-backend.herokuapp.com/)
- [Trello Board](https://trello.com/b/75UsM2Ye/saucesource)
- [ERD](https://miro.com/app/board/uXjVPdYXzrM=/?share_link_id=26192569397)
- [Wireframes](https://wireframe.cc/DEJeRW)
- [Project Prompt](https://github.com/joinpursuit/8-3-full-stack-portfolio)

## Local Setup

### Front-end Setup

```bash
# clone the repository to your local machine.
git clone git@github.com:Scheiber/saucesource.git

# navigate to the front-end directory
cd saucesource/front-end

# install the required node modules
npm i

# start the server
npm start
```

### Back-end Setup

```bash
# clone the repository to your local machine.
git clone git@github.com:Scheiber/saucesource.git

# navigate to the back-end directory
cd saucesource/back-end

# install the required node modules
npm i

# initialize and seed the database
npm run db:init
npm run db:seed

# start the server
nodemon server.js
```

## Acknowledgments

Much gratitude goes towards the testers and reviewers of this project, particularly [Jossy Pascasio](https://github.com/named-josie) for design consulting, and [Pratima Roy](https://github.com/PratimaRoy) for user experience review.
