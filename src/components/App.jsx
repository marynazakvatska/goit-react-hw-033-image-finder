import { ToastContainer } from 'react-toastify';
import { Component } from 'react';
import { Appt } from './App.styled';
import Searchbar from './Searchbar'
import ImageGallery from './ImageGallery';

import Loader from './Loader';
import Modal from './Modal';
import Button from './Button';
 import "react-toastify/dist/ReactToastify.css";


 export class App extends Component {
  state = {
    showModal: false,
    photo: '',
    /* photo: null,
    loading: false, */
  };

   
/*    componentDidMount() {
     this.setState({ loading: true })
     
     fetch('https://pixabay.com/api/?q=cat&page=1&key=21675881-9f2314d809854342b3af65054&image_type=photo&orientation=horizontal&per_page=12')
       .then(res => res.json())
        .then(photo => this.setState({ photo }))
      .finally(() => this.setState({loading: false}))
   } */
   
   handleFormSubmit = photoName => {
     console.log(photoName)
this.setState({photo: photoName})
   }


  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
    }))
  }
  
  render() {
     return (
    <Appt>
         <button onClick={this.toggleModal} width='150px' type='button'>open modal</button>
         <Searchbar qwe={this.handleFormSubmit} />
         <ImageGallery photoName={this.state.photo} />
       
       {/*  <Button/> */}
          {/*  {!this.state.showModal && <Loader />}  */}
        {/*    {this.state.loading && <Loader />}  */}
         {this.state.showModal && (<Modal onClose={this.toggleModal} >
           
           
           {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Ratione asperiores, veniam distinctio exercitationem et quod
             similique quasi debitis ipsa praesentium. Quae iure culpa error
             eum sequi recusandae odio aperiam expedita?</p> */}
         </Modal>)}  

         <ToastContainer />
    </Appt>
  );
  }
 
};

