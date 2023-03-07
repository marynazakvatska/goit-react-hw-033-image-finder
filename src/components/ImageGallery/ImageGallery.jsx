import { Component } from 'react';
import { ImageGallerys } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { toast } from 'react-toastify';
import Loader from 'components/Loader';
import Button from 'components/Button';
import PropTypes from 'prop-types';



export default class ImageGallery extends Component {
 
  render() {
  
    if (this.props.status === 'idle') {
      return <div>Enter the name of the picture</div>;
    }
    if (this.props.status === 'rejected') {
      return <h1>{this.props.error}</h1>;
    }
    if (this.props.images.length === 0) {
      return <div>Nothing found</div>;
    }

    return (
      <>
        <ImageGallerys>
          <ImageGalleryItem
            photos={this.props.images}
            setModalPicture={this.props.setModalPicture}
          />
        </ImageGallerys>
        <Button onClick={this.props.addPage} />
        {this.props.status === 'pending' && <Loader />}
      </>
    );
  }
}
ImageGallery.propTypes = {
  componentDidUpdate: PropTypes.func,
  addPage: PropTypes.func,
};