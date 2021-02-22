import { postsAPI } from '../../api/api';
import { useState } from 'react';
import NewPost from './NewPost';

const NewPostContainer = () => {
    let [title, setTitle] = useState<string>();
    let [text, setText] = useState<string>();

    const addPost = async () => {
        try {
            await postsAPI.createPost(title, text, 6550);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <NewPost addPost={addPost} setTitle={setTitle} setText={setText} />
        </div>
    )
}

export default NewPostContainer;