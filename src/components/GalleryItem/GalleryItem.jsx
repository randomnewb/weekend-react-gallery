import { useState } from "react";
import "./GalleryItem.css";

function GalleryItem({ galleryDescription, galleryImage }) {
    const [toggle, setToggle] = useState(false);

    // console.log("desc:", galleryDescription, "image:", galleryImage);

    return (
        <li>
            {toggle ? (
                <span onClick={() => setToggle(!toggle)}>
                    {galleryDescription}
                </span>
            ) : (
                <span>
                    <img
                        src={galleryImage}
                        style={{ width: "100px", height: "100px" }}
                        onClick={() => setToggle(!toggle)}
                    />
                </span>
            )}
        </li>
    );
}

export default GalleryItem;
