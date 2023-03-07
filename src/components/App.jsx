import { ToastContainer } from 'react-toastify';
import { Component } from 'react';
import { Appt } from './App.styled';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

import Loader from './Loader';
import Modal from './Modal';
import Button from './Button';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    showModal: false,
    photo: '',
    modalPicture: '',
   
  };

 
resetState = () => {
    this.setState({
    /*   showModal: false, */
    photo: '',
   /*  modalPicture: '', */
    
    });
  };

  handleFormSubmit = photoName => {
    this.resetState()
    this.setState({ photo: photoName });
  };


  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  setModalPicture = img => {
    this.setState({ modalPicture: img });
    this.toggleModal();
  };

  render() {
    return (
      <Appt>
        <Searchbar qwe={this.handleFormSubmit} />
        <ImageGallery
          photoName={this.state.photo}
          setModalPicture={this.setModalPicture}
        />
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.state.modalPicture} alt="" />
          </Modal>
        )}
        
        <ToastContainer />
      </Appt>
    );
  }
}
