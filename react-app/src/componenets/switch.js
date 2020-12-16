import logo from '../logo.svg';

import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import movies from "API-app/models/movie.model"

const imagesPath = {
  minus: "https://images.vexels.com/media/users/3/131484/isolated/preview/a432fa4062ed3d68771db7c1d65ee885-minus-inside-circle-icon-by-vexels.png",
  plus: "https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/plus-big-512.png",
  multi: "https://cdn.onlinewebfonts.com/svg/img_25657.png"
}

class Switch extends Component {
  state = {
    imageUrl: logo,
    isActive: true,
    movies: []
  }

  getMovies = () => {
    return movies.getMovies().then(data => {
      return this.setState({movies: data})
    });
  }

  incrementCount = (buttonId) => {
    switch (buttonId) {
      case 1:
        return this.setState({imageUrl: imagesPath.minus});
      case 2:
        return this.setState({imageUrl: imagesPath.plus});
      case 3:
        return this.setState({imageUrl: imagesPath.multi});
    }
  }



  render() {
    let classes = "m-2 blackButton; background-color: red"

    return <div>
      <Button onClick={() => this.incrementCount(1)} className={classes} variant="primary">Primary</Button>{' '}
      <Button onClick={() => this.incrementCount(2)} className={classes} variant="secondary">Secondary</Button>{' '}
      <Button onClick={() => this.incrementCount(3)} className={classes} variant="success">Success</Button>{' '}

      { this.getMovies}
      <img src={this.state.imageUrl} className="App-logo" alt="logo"/>

    </div>
  }
}


export default Switch
