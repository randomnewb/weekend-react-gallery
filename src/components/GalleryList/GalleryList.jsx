import "./GalleryList.css";
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryArray, galleryLike }) {
    return (
        <div>
            {galleryArray.map((item) => {
                return (
                    <ul key={item.id}>
                        <li> ID: {item.id}</li>
                        <GalleryItem
                            galleryImage={item.path}
                            galleryDescription={item.description}
                        />
                        {/* <img src={item.path} /> */}
                        <button onClick={() => galleryLike(item)}>Like</button>
                        <li> Likes: {item.likes}</li>
                    </ul>
                );
            })}
        </div>
    );
}

export default GalleryList;
