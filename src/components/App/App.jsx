import { useEffect, useState } from "react";
import "./App.css";
import GalleryList from "../GalleryList/GalleryList";
import Header from "../Header/Header";
import GalleryForm from "../GalleryForm/GalleryForm";
import Container from "@mui/material/Container";
import Axios from "axios";

function App() {
    let [galleryArray, setGalleryArray] = useState([]);

    useEffect(() => {
        fetchGallery();
    }, []);

    // GET
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

    // PUT
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

    // POST
    const submitGallery = (newGallery) => {
        console.log(newGallery);
        Axios({
            method: "POST",
            url: "/gallery",
            data: newGallery,
        })
            .then((response) => {
                console.log(response);
                fetchGallery();
            })
            .catch((error) => {
                console.log(error);
                alert("Something went wrong");
            });
    };

    return (
        <Container
            maxWidth="xl"
            className="App">
            <Header />
            <GalleryList
                galleryArray={galleryArray}
                galleryLike={galleryLike}
            />
            <GalleryForm submitGallery={submitGallery} />
        </Container>
    );
}

export default App;
