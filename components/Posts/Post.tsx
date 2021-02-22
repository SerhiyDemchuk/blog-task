import { retrievePost } from '../../redux/reducers/postReducer';
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, Typography, ButtonBase, Input } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import PropTypes from 'prop-types';

const useStyles = makeStyles(
    createStyles({
        root: {
            height: 300,
            width: 600,
            marginBottom: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        cardContent: {
            maxWidth: 300,
            height: '100%',
        },
        button: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            margin: 5,
        }
    })
);

interface PostProps {
    title: string,
    body: string,
    id: number,
    postId: number,
    delPost: (number) => void,
    updPost: (number) => void,
    addPost: (number) => void,
    setNewText: (string) => void,
    setNewTitle: (string) => void,
}

const Post: React.FC<PostProps> = ({ title, body, id, postId, ...props }): React.ReactElement => {
    const dispatch = useDispatch();
    const classes = useStyles();
    
    return (
        <div>
            <Link href={{
                pathname: "/posts/[id]",
                query: { id: id }
            }}>
                <a>
                    <Grid item>
                        <Card className={classes.root}>
                            <ButtonBase
                                onClick={() => dispatch(retrievePost(id))}>
                                <CardContent className={classes.cardContent}>
                                    <div>
                                        <Typography variant="h5" component="h2">
                                            {title}
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography variant="body2" component="p">
                                            {body}
                                        </Typography>
                                    </div>
                                </CardContent>
                            </ButtonBase>
                            <div>
                                <Button className={classes.button} onClick={() => props.delPost(id)}>Delete</Button>
                                <Button className={classes.button} onClick={() => props.updPost(id)}>Update</Button>
                            </div>
                        </Card>
                        {postId === id ? (
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">
                                        Type title
                                        </Typography>
                                    <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.setNewTitle(e.target.value)} placeholder="title" autoFocus />
                                    <Typography variant="h6">
                                        Type text
                                        </Typography>
                                    <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.setNewText(e.target.value)} placeholder="text" autoFocus />
                                </CardContent>
                                <Button variant="text" color="default" onClick={() => props.addPost(id)}>Add</Button>
                            </Card>)
                            : null
                        }
                    </Grid>
                </a>
            </Link>
        </div>
    )
}

Post.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.number,
    postId: PropTypes.number,
    delPost: PropTypes.func,
    updPost: PropTypes.func,
    addPost: PropTypes.func,
    setNewText: PropTypes.func,
    setNewTitle: PropTypes.func,
}

export default Post;