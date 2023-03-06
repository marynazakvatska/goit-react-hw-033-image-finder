import { ImageGalleryItemm, ImageGalleryItemImage } from "./ImageGalleryItem.styled"

const ImageGalleryItem = ({ photos }) => {
  console.log(photos)
  console.log(photos.hits)
  return (
    photos.hits.map(({id, webformatURL, tag}) => {
      return (
        <ImageGalleryItemm  key={id}>
    
        <ImageGalleryItemImage src={webformatURL} alt={tag} />
    </ImageGalleryItemm >
      )
    })
     
  )
  } 


export default ImageGalleryItem


