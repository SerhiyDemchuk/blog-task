import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loadData } from "../../redux/reducers/postReducer";
import { RootState } from '../../redux/reducers';
import Post from "./Post";
import { postsAPI } from "../../api/api";

function PostsContainer() {

    const dispatch = useDispatch();
    const { allPostsData } = useSelector((state: RootState) => state.posts);

    let [postId, setPostId] = useState<number>();
    let [newTitle, setNewTitle] = useState<string>();
    let [newText, setNewText] = useState<string>();

    const delPost = async (id: number) => {
        try {
            const response = await postsAPI.deletePost(id);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    const updPost = async (id: number) => {
        setPostId(id);
    }

    const addPost = async (id: number) => {
        try {
            const response = await postsAPI.updatePost(id, newTitle, newText);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        dispatch(loadData());
    }, []);

    return (
        <div>
            {
                allPostsData.map(post => (
                    <div key={post.id}>
                        <Post
                            postId={postId}
                            setNewTitle={setNewTitle}
                            setNewText={setNewText}
                            addPost={addPost}
                            updPost={updPost}
                            delPost={delPost}
                            title={post.title}
                            body={post.body}
                            id={post.id}
                        />
                    </div>
                ))
            }
        </div>
    );
}

export default PostsContainer;