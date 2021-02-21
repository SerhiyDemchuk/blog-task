import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loadData } from "../../redux/reducers/postReducer";
import { RootState } from '../../redux/reducers';
import { NextThunkDispatch, wrapper } from "../../redux";
import Post from "./Post";

export default function PostsContainer () {
    const dispatch = useDispatch();
    const { postsData } = useSelector((state: RootState) => state.posts);
    console.log(postsData);
    
    useEffect(() => {
        dispatch(loadData());
    }, []);
    
    return (
        <div>
            <h1>Hello</h1>
            <Post postsData={postsData} />
        </div>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(async({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(loadData());
})