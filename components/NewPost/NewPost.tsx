import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, Input, Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles(
    createStyles({
        root: {
            width: 700,
            height: 600,
            display: 'flex',
            flexDirection: 'column',
        },
        card: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
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
        },
    })
);

interface NewPostProps {
    addPost: () => void,
    setText: (string) => void,
    setTitle: (string) => void,
}

const NewPost: React.FC<NewPostProps> = ({ addPost, setTitle, setText }) => {
    const classes = useStyles();
    
    return (
        <div>
            <Card className={classes.root}>
                <CardContent className={classes.card}>
                    <div>
                        <Typography variant="h2">
                            Create new post
                                </Typography>
                    </div>
                    <div>
                        <Typography variant="h6">
                            Type title
                                </Typography>
                        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} placeholder="title" />
                        <Typography variant="h6">
                            Type text
                                </Typography>
                        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} placeholder="text" />
                    </div>
                </CardContent>
                <Button className={classes.button} variant="text" color="default" onClick={() => addPost()}>Add</Button>
            </Card>
        </div>
    )
}

NewPost.propTypes = {
    addPost: PropTypes.func,
    setText: PropTypes.func,
    setTitle: PropTypes.func,
}


export default NewPost;