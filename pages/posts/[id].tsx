import React from 'react';
import DynamicPageContainer from '../../components/DynamicPage/DynamicPageContainer';
import { postsAPI } from '../../api/api';

const DynamicPost = ({ response }) => {
    
    return (
        <DynamicPageContainer response={response} />
    )
}

export default DynamicPost;

export async function getServerSideProps({ query }) {
    const { id } = query;
    const response = await postsAPI.retrievePost(id);
    return {
        props: { response }
    }
};
