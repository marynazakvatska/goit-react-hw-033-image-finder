import { Component } from 'react';
import { ImageGallerys } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { toast } from 'react-toastify';
import Loader from 'components/Loader';
import fetchImages from 'components/fetchImages';
import Button from 'components/Button';
import PropTypes from 'prop-types';

export default class ImageGallery extends Component {
  state = {
    data: null,
    error: null,
    status: 'idle',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevPhoto = prevProps.photoName;
    const nextPhoto = this.props.photoName;
   
    if (prevPhoto !== nextPhoto || prevState.page !== this.state.page) {
      this.setState({ status: 'pending' });

    
      fetchImages(nextPhoto, this.state.page)
        .then(data => {
          if (data) {
            if (data.hits.length) {
              data.hits = [...(prevState.data?.hits || []), ...data.hits];
              this.setState({ data: data, status: 'resolved' });
            }
          }
        })
        .catch(error => this.setState({ error, status: 'rejected' }))
        .finally(() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        });

    }
  }

  addPage = () => {
    this.setState(state => ({
      ...state,
      page: state.page + 1,
    }));
  };

  render() {
    const { status, error, data } = this.state;

    if (status === 'idle') {
      return <div>Enter the name of the picture</div>;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }
    if (status === 'resolved') {
      return (
        <ImageGallerys>
          <ImageGalleryItem
            photos={data}
            setModalPicture={this.props.setModalPicture}
          />
          <Button onClick={this.addPage} />
        
        </ImageGallerys>
      );
    
    }
  }
}

ImageGallery.propTypes = {
     componentDidUpdate: PropTypes.func,
     addPage: PropTypes.func,
   
};