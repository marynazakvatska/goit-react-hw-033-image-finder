import { Component } from 'react'
import { ImageGallerys } from './ImageGallery.styled'
import ImageGalleryItem from 'components/ImageGalleryItem';
import { toast } from 'react-toastify';
import Loader from 'components/Loader';
/* import Loader from './Loader'; */
import fetchImages from 'components/fetchImages';
import Button from 'components/Button';


export default class ImageGallery extends Component {
    state = {
        data: null,
        error: null,
        status: 'idle',
        page: 1,

    }
    
    componentDidUpdate(prevProps, prevState) {

        const prevPhoto = prevProps.photoName;
        const nextPhoto = this.props.photoName


        if (prevPhoto !== nextPhoto) {

            this.setState({ status: 'pending' })

            /* fetch(`https://pixabay.com/api/?q=${nextPhoto}&page=1&key=21675881-9f2314d809854342b3af65054&image_type=photo&orientation=horizontal&per_page=12`)
               
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                    return Promise.reject(
                        new Error(`no image with name ${nextPhoto}`)
                    )
                }) */
            fetchImages(nextPhoto, this.state.page)
                .then(data => this.setState({ data, status: 'resolved' }))
                .catch(error => this.setState({ error, status: 'rejected' }))
           
        }
        
    }

    addPage = () => {
        const prevPage = this.state.page
        this.setState(prevPage + 1 )
    }



    

    render() {
        const { status, error, data } = this.state

        if (status === 'idle') {
            return <div>Enter the name of the picture</div>
        }

        
        if (status === 'pending') {
            return <Loader />
        }

        if (status === 'rejected') {
            return <h1>{error.message}</h1>
        }
        if (status === 'resolved') {
            return (<ImageGallerys>
              <ImageGalleryItem photos={data} /> 
                <Button onClick={this.addPage} />
         {/*   {data ? (<ImageGalleryItem photos={data} /> &&
                <Button onClick={this.addPage} />) : "no images"} */}
             
            
                
            </ImageGallerys>
           )
            /* if (data === []) {
return (<ImageGallerys>
    <li>no images</li>   
                </ImageGallerys>)

            }
            else {
              return (
                <ImageGallerys>
                   
                    {data && <ImageGalleryItem photos={data} />}
                </ImageGallerys>)  
           }  */
        }
            
    }


}

