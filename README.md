# Movie React Web App

The project uses the [TheMovieDB API](https://developers.themoviedb.org) to get all the info

## Installation & Configuration

- Clone repository
```
$ git clone https://github.com/pbagastama/movie-gallery.git
$ cd movie-gallery
$ yarn start
```

- Rename `.env.example` to `.env` and insert your TMDB_API_KEY

```
API_KEY=your_api_key_here
```

> To get an API key, you can signup to [TMDB](https://www.themoviedb.org)


Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.


## Features

* List popular movies
* Search movies by title
* Auto-suggest movie title for search function
* SCSS: All styles are written in SCSS following BEM standards
* React Router is used to create a basic navigation

## Technical Notes

* Followed [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
* Responsive design using [Foundation Sites](http://foundation.zurb.com/sites/docs/)
* State management using [React-Redux](https://github.com/reactjs/react-redux)
* Environment set-up using [Create-React-App](https://github.com/facebookincubator/create-react-app)

