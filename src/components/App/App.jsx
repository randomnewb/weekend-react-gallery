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
                console.log(response);
                setGalleryArray(response.data);
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
            <GalleryList galleryArray={galleryArray} />
        </div>
    );
}

export default App;
