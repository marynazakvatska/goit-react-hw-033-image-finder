import { Component } from 'react';
import { createPortal } from 'react-dom';
import {Modall, Overlay} from './Modal.styled'


const modalRoot = document.querySelector('#modal-root')

export default class Modal extends Component {
    componentDidMount() {
      console.log('componendDidMount')
      window.addEventListener('keydown', this.handleKeyDown)
    }
    
  componentWillUnmount() {
    console.log("unmount")
    window.removeEventListener('keydown', this.handleKeyDown)
  }
  

  handleKeyDown = e => {
   if (e.code === 'Escape') {
          this.props.onClose();
        }
}

  
  handleBackdropClick = e => {
    console.log('clik in backdrop')
    if (e.target === e.currentTarget) {
      this.props.onClose()
    }
  }
  
    render() {
         return  createPortal(
        <Overlay onClick={this.handleBackdropClick}>
             <Modall >
               {this.props.children}
    {/* <img src="images/sample.gif" alt="" /> */}
  </Modall>
</Overlay>, modalRoot
    )
    }
   
}

