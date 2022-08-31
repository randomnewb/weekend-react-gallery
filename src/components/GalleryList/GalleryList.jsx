import "./GalleryList.css";
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryArray }) {
    return (
        <div>
            {galleryArray.map((item) => {
                return (
                    <ul key={item.id}>
                        <li> ID: {item.id}</li>
                        <li>
                            <GalleryItem galleryImage={item.path} />
                            {/* <img src={item.path} /> */}
                        </li>
                        <li> Description: {item.description}</li>
                        <li> Likes: {item.likes}</li>
                    </ul>
                );
            })}
        </div>
    );
}

export default GalleryList;
