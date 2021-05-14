import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts"
import memories from "./images/memories.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles";

const App = () => {
    const [currentId, setCurrentId] = useState(null)

    const cl = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])


    return (
        <Container maxwidth="lg">
            <AppBar className={cl.appBar} position="static" color="inherit"  >
                <Typography className={cl.heading} variant="h2" align="center" >Memories</Typography>
                <img className={cl.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in >
                <Container>
                    <Grid container display="flex" justify="space-between" alignItems="stretch" spacing={3} >
                        <Grid item xs={12} sm={7} >
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>

                    </Grid>
                </Container>

            </Grow>

        </Container>
    )
}

export default App;
