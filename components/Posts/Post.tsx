import { PostType } from '../../redux/reducers/postReducer';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import { ButtonBase } from '@material-ui/core';
import Grid, { GridSpacing } from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    pos: {
        marginBottom: 12,
    },
    cardAction: {
        display: 'block',
        textAlign: 'initial'
    }
});

const Post = ({ postsData }) => {
    console.log(postsData);
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        {[0, 1, 2].map((value) => (
                            <Grid key={value} item>
                                <Paper className={classes.paper} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                {
                    postsData.map((post: PostType) => (
                        <Card key={post.id} className={classes.root}>
                            <ButtonBase
                                className={classes.cardAction}
                                onClick={() => console.log('ehllo')}>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        {post.title}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {post.body}
                                    </Typography>
                                </CardContent>
                            </ButtonBase>
                        </Card>
                    ))
                }
        </div>
    )
}

export default Post;