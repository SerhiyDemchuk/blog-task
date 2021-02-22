import { CardContent, Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

interface CommentsProps {
    id: number,
    body: string
}

const Comments: React.FC<CommentsProps> = ({ id, body }) => {
    return (
        <div>
            <CardContent>
                <Typography variant="h6" component="h2">
                    {id}
                </Typography>
                <Typography variant="body2" component="p">
                    {body}
                </Typography>
            </CardContent>
        </div >
    )
}

Comments.propTypes = {
    id: PropTypes.number,
    body: PropTypes.string   
}

export default Comments;