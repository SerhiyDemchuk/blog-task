import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://simple-blog-api.crew.red/'
})

export const postsAPI = {
    listPosts() {
        return instance.get(`posts`)
            .then(response => {
                return response.data;
            })
    },
    retrievePost(id: number) {
        return instance.get(`posts/${id}?_embed=comments`)
            .then(response => {
                return response.data;
            })
    },
    createPost() {
        return instance.post(`posts`)
    },
    updatePost(id: number) {
        return instance.put(`posts/${id}`)
    },
    deletePost(id: number) {
        return instance.delete(`posts/${id}`)
            .then(response => {
                return response.data;
            })
    }
}

export const commentsAPI = {
    createComment() {
        return instance.post(`comments`)
            .then(response => {
                return response.data;
            })
    }
}