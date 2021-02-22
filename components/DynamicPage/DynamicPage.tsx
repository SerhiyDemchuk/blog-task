import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Card, CardContent, Input, Typography, Button } from '@material-ui/core';
import React from 'react'
import Comments from './Comments';
import PropTypes from 'prop-types';

const useStyles = makeStyles(
    createStyles({
        root: {
            height: 300,
            width: 600,
            marginBottom: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'column'
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
        },
        below: {
            display: 'flex',
            justifyContent: 'space-between'
        },
    })
);

type CommentsType = {
    id: number,
    postId: string,
    body: string
}
interface DynamicPageProps {
    title: string,
    body: string,
    comments: Array<CommentsType>,
    setComment: (string) => void,
    addComment: () => void,
}

const DynamicPage: React.FC<DynamicPageProps> = ({ title, body, comments, ...props }) => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <div>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {body}
                        </Typography>
                    </CardContent>
                </div>
                <div className={classes.below}>
                    <div>
                        <Typography variant="h4" color="initial">
                            Comments:
                </Typography>
                        {comments
                            ? comments.map(comment => (
                                <div key={comment.id}>
                                    <Comments id={comment.id} body={comment.body} />
                                </div>
                            ))
                            : null
                        }
                    </div>
                    <div>
                        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.setComment(e.target.value)} placeholder="Write your comment" autoFocus />
                        <Button className={classes.button} onClick={() => props.addComment()} variant="text" color="default">Add</Button>
                    </div>
                </div>
            </Card>
        </div >
    )
}

DynamicPage.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    comments: PropTypes.array,
    setComment: PropTypes.func,
    addComment: PropTypes.func
}

export default DynamicPage;