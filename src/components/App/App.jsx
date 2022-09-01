import { useEffect, useState } from "react";
import "./App.css";
import GalleryList from "../GalleryList/GalleryList";
import Header from "../Header/Header";
import Container from "@mui/material/Container";
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
        <Container
            maxWidth="lg"
            className="App">
            <Header />
            <GalleryList
                galleryArray={galleryArray}
                galleryLike={galleryLike}
            />
        </Container>
    );
}

export default App;
