import { CardContent, Typography } from '@material-ui/core';
import React from 'react'

const Comments = ({ id, body }) => {
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

export default Comments;