import React from "react";
import PropTypes from "prop-types";

function Image({ image }) {
  const description =
    image.categories.length > 0 ? image.categories[0].title : image.user.name;
  return (
    <div>
      <h2>{description}</h2>
      <a href={image.links.html}>View</a>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

Image.propTypes = {
  image: PropTypes.shape({
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string
      })
    ),
    use: PropTypes.shape({
      name: PropTypes.string
    }),
    links: PropTypes.shape({ html: PropTypes.string }),
    urls: PropTypes.shape({
      small: PropTypes.string
    }),
    likes: PropTypes.number
  }).isRequired
};

export default Image;
