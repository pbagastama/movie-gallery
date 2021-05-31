import React, { Component } from 'react';
import AppCss from './App.scss';
import Movies from './Movies';
import Movie from './Movie';
import Search from './Search';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



const Child = ({ match }) => (
  <Movie id={match.params.id} />
)

const Popular = () => (
  <div className="container">
    <div className="app">
      <div className="app__header">
        <h1>Popular Movies</h1>
      </div>
    </div>
    <Movies />
  </div>
)

const TopRated = () => (
  <div className="container">
    <div className="app">
      <div className="app__header">
        <h1>Top Rated Movies</h1>
      </div>
    </div>
    <Movies type="top_rated" />
  </div>
)

const NowPlaying = () => (
  <div className="container">
    <div className="app">
      <div className="app__header">
        <h1>Now playing</h1>
      </div>
    </div>
    <Movies type="now_playing" />
  </div>
)

class App extends Component {

  tryParseJSON (jsonString){
    try {
        var o = JSON.parse(jsonString);
        if (o && typeof o === "object") {
            return o;
        }
    }
    catch (e) { }

    return false;
  };

  render() {
      return (
        <Router>
          <div className="router-container">
            <nav className="top-bar">
              <Search />
            </nav>
            <aside className="aside">
              <ul className="aside__nav">
                <li><Link className="aside__nav__item aside__nav__item--popular" to="/">Popular</Link></li>
                <li><Link className="aside__nav__item aside__nav__item--top-rated" to="/top-rated">Top rated</Link></li>
                <li><Link className="aside__nav__item aside__nav__item--now-playing" to="/now-playing">Now playing</Link></li>
              </ul>
            </aside>
            <Route exact path="/" component={Popular}/>
            <Route path="/top-rated" component={TopRated}/>
            <Route path="/now-playing" component={NowPlaying}/>
            <Route path="/movies/:id" component={Child}/>
          </div>
        </Router>
      );
  }
}

export default App;
