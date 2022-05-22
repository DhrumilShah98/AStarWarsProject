import React from "react";
import { Paper, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import star_wars_poster from "../../assets/star_wars.jpg";

const Films = ({ films }) => {
    return (
        <Paper elevation={6} sx={{ padding: 2 }}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: "bold" }}>Films</Typography>
            <Grid container spacing={2} marginTop={0}>
                {films.map((film) => {
                    return (
                        <Grid item xs={6} sm={4} md={4} lg={4}>
                            <Card elevation={0}>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    src={star_wars_poster}
                                    alt="Star Wars Banner" />
                                <CardContent sx={{padding: 0.5}}>
                                    <Typography variant="subtitle1" component="div" mt={1} sx={{fontWeight: "bold"}}>{film.title}</Typography>
                                    <Typography variant="caption" component="div" mt={0.3}>{film.director}</Typography>
                                    <Typography variant="caption" component="div" mt={0.3}>{film.producer}</Typography>
                                    <Typography variant="caption" component="div" mt={0.3}>{film.release_date}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Paper>
    );
};

export default Films;