import "./GalleryList.css";
import GalleryItem from "../GalleryItem/GalleryItem";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

function GalleryList({ galleryArray, galleryLike, galleryDelete }) {
    return (
        <Container>
            <Grid
                container
                spacing={2}
                // display="flex"
                // justifyContent="space-evenly"
                // alignItems="space-evenly"
                // columns={{ lg: 5 }}
            >
                {galleryArray.map((item) => {
                    return (
                        <Card
                            xs={12}
                            md={6}
                            lg={4}
                            xl={2}
                            // sx={{ maxWidth: "400px", height: "200px" }}
                            key={item.id}>
                            <GalleryItem
                                galleryImage={item.path}
                                galleryDescription={item.description}
                            />
                            {/* <img src={item.path} /> */}
                            <CardContent className="cardBottom">
                                <CardActions sx={{ justifyContent: "center" }}>
                                    <Button
                                        color="error"
                                        onClick={() => galleryDelete(item)}>
                                        <DeleteForeverIcon />
                                        Delete
                                    </Button>
                                    <Button onClick={() => galleryLike(item)}>
                                        <ThumbUpAltIcon />
                                        Like
                                    </Button>
                                </CardActions>
                                <Typography> Likes: {item.likes} </Typography>
                            </CardContent>
                        </Card>
                    );
                })}
            </Grid>
        </Container>
    );
}

export default GalleryList;
