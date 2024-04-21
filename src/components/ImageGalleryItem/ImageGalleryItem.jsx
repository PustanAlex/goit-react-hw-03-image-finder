import React, { Component } from 'react';

 class ImageGalleryItem extends Component {


  render() {
    const { image } = this.props;

    return (
          <li className="ImageGalleryItem">
            <img className='ImageGalleryItem-image'src={image.webformatURL} alt={image.tags} />
          </li>
        )
  }
}

export default ImageGalleryItem;
