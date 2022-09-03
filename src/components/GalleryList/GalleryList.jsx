import "./GalleryList.css";
import GalleryItem from "../GalleryItem/GalleryItem";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function GalleryList({ galleryArray, galleryLike }) {
    return (
        <Grid
            // item
            // xs={12}
            // sm={6}
            // md={3}
            // p={3}
            container
            spacing={2}
            display="flex"
            justifyContent="space-evenly"
            alignItems="space-evenly"
            // columns={{ lg: 5 }}
        >
            {galleryArray.map((item) => {
                return (
                    <Card
                        lg={2}
                        sx={{ maxWidth: "400px", height: "200px" }}
                        key={item.id}>
                        <GalleryItem
                            galleryImage={item.path}
                            galleryDescription={item.description}
                        />
                        {/* <img src={item.path} /> */}
                        <CardContent className="cardBottom">
                            <CardActions sx={{ justifyContent: "center" }}>
                                <Button onClick={() => galleryLike(item)}>
                                    Like
                                </Button>
                            </CardActions>
                            <Typography> Likes: {item.likes} </Typography>
                        </CardContent>
                    </Card>
                );
            })}
        </Grid>
    );
}

export default GalleryList;
