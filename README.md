# Pokedex App

![Pokedex Preview](https://media.giphy.com/media/YoiLIcT9yJrpTRBxHP/giphy.gif)

The Pokedex is a React application that displays basic information about Pokemon from the [PokeApi](https://pokeapi.co/) with search powered by [Fuse.js](https://fusejs.io/).

# Installation

Clone the Repo:

```bash
`git clone git@github.com:kel7774/pokedex-app.git`
```

Start app with:

```bash
`npm start`
```

# Testing Solutions

More Jest testing to come for unit testing.

To regressively test the app, enter in any Pokemon, and the search will complete a fuzzy search which will yield 15 results. The search results scroll. Each result is clickable and will render the result in the card below filled with the Pokemon's information. The arrows below the image will navigate to either the previous or next Pokemon in the sequence based on the Pokemon's ID that has been pulled from the PokeAPI.

# Acknowledgements

Code reviews, suggestions, & spare time generously given by:

[William G.K. Zhang](https://gitlab.com/infinitesecond)

[Corey Brown](https://github.com/coreybrown89)
