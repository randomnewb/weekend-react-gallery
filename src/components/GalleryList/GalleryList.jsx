import "./GalleryList.css";

function GalleryList({ galleryArray }) {
    return (
        <div>
            {galleryArray.map((item) => {
                return (
                    <ul key={item.id}>
                        <li> ID: {item.id}</li>
                        <li>
                            <img src={item.path} />
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
