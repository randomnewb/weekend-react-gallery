import { useState } from "react";
import "./GalleryItem.css";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function GalleryItem({ galleryDescription, galleryImage }) {
    const [toggle, setToggle] = useState(false);

    // console.log("desc:", galleryDescription, "image:", galleryImage);

    return (
        <CardContent
            // className="contentTop"
            sx={{ height: "35%" }}>
            {toggle ? (
                <Typography onClick={() => setToggle(!toggle)}>
                    {galleryDescription}
                </Typography>
            ) : (
                <Typography>
                    <img
                        src={galleryImage}
                        style={{ width: "100px", height: "100px" }}
                        onClick={() => setToggle(!toggle)}
                    />
                </Typography>
            )}
        </CardContent>
    );
}

export default GalleryItem;
