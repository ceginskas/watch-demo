import React, { Component } from 'react';
import * as Api from '../../api';
import './styles.scss';

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageData: null
    };
  }

  componentDidMount() {
    this.getImage();
  }

  getImage() {
    Api.assets(this.props.id)
      .then(data => this.setState({ imageData: data }))
      .then(this.props.contentLoaded());
  }

  render() {
    const { imageData } = this.state;
    console.log(imageData);
    console.log(this.props);
    return (
      <div className="image">
        {imageData && <img alt="the watch" src={imageData.data.uri} />}
      </div>
    );
  }
}

export default Image;
