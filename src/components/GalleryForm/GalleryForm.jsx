import { useState } from "react";
import "./GalleryForm.css";

import { Box, TextField, Typography, Button } from "@mui/material";

function GalleryForm({ submitGallery }) {
    const [galleryPath, setGalleryPath] = useState("");
    const [galleryDescription, setGalleryDescription] = useState("");

    const handleGallery = (e) => {
        e.preventDefault();

        const newGallery = {
            path: galleryPath,
            description: galleryDescription,
        };
        submitGallery(newGallery);
    };

    return (
        <Box
            component="form"
            onSubmit={handleGallery}>
            <br />
            <Typography> Add Another Image</Typography>
            <br />
            <TextField
                fullWidth
                required
                value={galleryPath}
                onChange={(e) => setGalleryPath(e.target.value)}
                helperText="Add the path to image, i.e. 'images/FILENAME.extension'"></TextField>
            <br />
            <TextField
                fullWidth
                required
                value={galleryDescription}
                onChange={(e) => setGalleryDescription(e.target.value)}
                helperText="Description of image"></TextField>
            <br />
            <Button type="submit"> Add Image</Button>
        </Box>
    );
}

export default GalleryForm;
