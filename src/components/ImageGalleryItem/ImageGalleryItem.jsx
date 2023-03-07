import {
  ImageGalleryItemm,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ photos, setModalPicture }) => {
  console.log(photos);
  
  return photos.map(({ id, webformatURL, tag }) => {
    return (
      <ImageGalleryItemm key={id} onClick={() => setModalPicture(webformatURL)}>
        <ImageGalleryItemImage src={webformatURL} alt={tag} />
      </ImageGalleryItemm>
    );
  });
};

export default ImageGalleryItem;
