import React from "react";
import { Paper, Typography, Grid, List, ListItem, ListItemText, Box, Divider } from "@mui/material";

const Species = ({ species }) => {
    return (
        (species.length === 0) ? null :
            <Paper elevation={6} sx={{ padding: 2 }}>
                <Typography variant="h5" component="h2" sx={{ fontWeight: "bold" }}>Species</Typography>
                {species.map((s, index) => {
                    return (
                        <Box key={index}>
                            <List dense={true} disablePadding>
                                <ListItem disablePadding>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6} sm={6} md={6} lg={6}>
                                            <ListItemText
                                                primary={<Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>Name</Typography>}
                                                secondary={<Typography variant="body2">{s.name}</Typography>} />
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={6} lg={6}>
                                            <ListItemText
                                                primary={<Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>Classification</Typography>}
                                                secondary={<Typography variant="body2">{s.classification}</Typography>} />
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <ListItem disablePadding>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6} sm={6} md={6} lg={6}>
                                            <ListItemText
                                                primary={<Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>Average Lifespan</Typography>}
                                                secondary={<Typography variant="body2">{s.average_lifespan}</Typography>} />
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={6} lg={6}>
                                            <ListItemText
                                                primary={<Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>Langauage</Typography>}
                                                secondary={<Typography variant="body2">{s.language}</Typography>} />
                                        </Grid>
                                    </Grid>
                                </ListItem>
                            </List>
                            {(index !== (species.length - 1)) ? <Divider /> : null}
                        </Box>
                    );
                })}
            </Paper>
    );
};

export default Species;