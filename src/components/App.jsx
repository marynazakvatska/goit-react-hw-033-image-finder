import { ToastContainer } from 'react-toastify';
import { Component } from 'react';
import { Appt } from './App.styled';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import fetchImages from 'components/fetchImages';
import Loader from './Loader';
import Modal from './Modal';
import Button from './Button';
import 'react-toastify/dist/ReactToastify.css';
export class App extends Component {
  state = {
    data: [],
    error: null,
    status: 'idle',
    page: 1,
    showModal: false,
    photo: '',
    modalPicture: '',
  };
  componentDidUpdate(prevProps, prevState) {
    const prevPhoto = prevState.photo;
    const nextPhoto = this.state.photo;
    // console.log(prevPhoto, nextPhoto, 'photoComparing');
    if (prevPhoto !== nextPhoto || prevState.page !== this.state.page) {
      this.setState({
        status: 'pending',
      });
      fetchImages(nextPhoto, this.state.page)
        .then(data => {
          if (data) {
            if (data.hits.length > 0) {
              const newImages = data.hits;
              // data.hits = [...(prevState.data?.hits || []), ...data.hits];
              this.setState(prevState => ({
                data: [...prevState.data, ...newImages],
              }));
            }
          }
          this.setState({
            status: 'resolved',
          });
        })
        .catch(error =>
          this.setState({ error: error.message, status: 'rejected' })
        )
    }
  }
  addPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }, 500);
  };
  handleFormSubmit = photoName => {
    if (photoName === this.state.photo && this.state.page === 1) {
      return;
    }
    this.setState({ data: [], page: 1, photo: photoName });
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
        <Searchbar qwe={this.handleFormSubmit} searchValeu={this.state.photo} />
        <ImageGallery
          addPage={this.addPage}
          error={this.state.error}
          status={this.state.status}
          images={this.state.data}
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