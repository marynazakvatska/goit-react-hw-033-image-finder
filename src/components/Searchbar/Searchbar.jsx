import { Component } from 'react';
import { toast } from 'react-toastify';
import { ReactComponent as SearchIcon } from '../icons/search.svg';
import { Searchbarr, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Searchbar.styled"
import PropTypes from 'prop-types';



export default class Searchbar extends Component {
  state = {
  photoName: "",
}

  
  handleNameChange = e => {
    this.setState({photoName: e.currentTarget.value.toLowerCase()})
  }
  
  
  handleSubmit = e => {
    e.preventDefault();

    if (this.state.photoName.trim() === '') {
    return toast('Write the text pls')
      
    }

this.props.qwe(this.state.photoName)
    this.setState({photoName: ""})
}

  render() {

    return  (<Searchbarr>
  <SearchForm onSubmit={this.handleSubmit}>

    <SearchFormButton type="submit">
  <SearchIcon width={40} height={40}/>
      <SearchFormButtonLabel></SearchFormButtonLabel>
    </SearchFormButton>

    <SearchFormInput
          type="text"
          value={this.state.photo}
          onChange= {this.handleNameChange}
      autocomplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </SearchForm>
</Searchbarr>)
  }

}


 Searchbar.propTypes = {
     onSubmit: PropTypes.string,
     handleSubmit: PropTypes.func,
     handleNameChange: PropTypes.func,
     
};