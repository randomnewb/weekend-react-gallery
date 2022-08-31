import "./GalleryItem.css";

function GalleryItem({ galleryImage }) {
    return (
        <p>
            <img src={galleryImage} />
        </p>
    );
}

export default GalleryItem;
