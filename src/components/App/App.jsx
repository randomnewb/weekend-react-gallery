import { useEffect, useState } from "react";
import "./App.css";
import GalleryList from "../GalleryList/GalleryList";
import Axios from "axios";

function App() {
    let [galleryArray, setGalleryArray] = useState([]);

    useEffect(() => {
        fetchGallery();
    }, []);

    const fetchGallery = () => {
        Axios({
            method: "GET",
            url: "/gallery",
        })
            .then((response) => {
                setGalleryArray(response.data);
            })
            .catch((error) => {
                console.log(error);
                alert("Something went wrong");
            });
    };

    const galleryLike = (item) => {
        Axios({
            method: "PUT",
            url: `/gallery/like/${item.id}`,
        })
            .then((response) => {
                fetchGallery();
            })
            .catch((error) => {
                console.log(error);
                alert("Something went wrong");
            });
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Gallery of My Life</h1>
            </header>
            <GalleryList
                galleryArray={galleryArray}
                galleryLike={galleryLike}
            />
        </div>
    );
}

export default App;
