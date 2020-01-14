import React, { Component } from "react";
import unsplash from "../../services/unsplash";

import Form from "./form";
import Image from "./image";

class Gallery extends Component {
  state = {
    status: "initial",
    term: "",
    images: []
  };

  componentDidMount() {
    this.fetchImage("Mountains");
  }

  fetchImage = async term => {
    try {
      this.setState({
        status: "searching",
        term: term,
        images: []
      });

      const images = await unsplash(term);

      this.setState({
        status: "done",
        images
      });
    } catch (error) {
      this.setState({
        status: "error"
      });
    }
  };

  render() {
    const { status, images, term } = this.state;
    return (
      <div>
        <Form fetchImage={this.fetchImage} />
        {status === "searching" && <h3>Searching form {term}</h3>}
        {status === "done" && images.length === 0 && (
          <h3>Sorry sucker, no results </h3>
        )}
        {status === "error" && <h3>Oops... error!</h3>}
        {images.length > 0 &&
          images.map(image => <Image image={image} key={image.id} />)}
      </div>
    );
  }
}

Gallery.propTypes = {};

export default Gallery;
