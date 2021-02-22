import { useState } from 'react'
import { commentsAPI } from '../../api/api';
import React from 'react'
import DynamicPage from './DynamicPage';
import PropTypes from 'prop-types';

const DynamicPageContainer = ({ response }) => {
    
    const { id: postId, title, body, comments } = response;
    const [comment, setComment] = useState<string | number>();

    const addComment = async () => {
        const response = await commentsAPI.createComment(postId, comment, 765);
        console.log(response);
    }

    return (
        <div>
            <DynamicPage
                title={title}
                body={body}
                comments={comments}
                addComment={addComment}
                setComment={setComment}
            />
        </div >
    )
}

DynamicPageContainer.propTypes = {
    response: PropTypes.object,

}

export default DynamicPageContainer;