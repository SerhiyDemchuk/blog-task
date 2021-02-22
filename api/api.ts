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
    createPost(title: string | number, body: string | number, id: number) {
        return instance.post(`posts`, {
            title: title,
            body: body,
            id: id
        })
    },
    updatePost(id: number, title: number | string, body: number | string) {
        return instance.put(`posts/${id}`, {
            title: title,
            body: body,
            id: id
        })
    },
    deletePost(id: number) {
        return instance.delete(`posts/${id}`)
            .then(response => {
                return response.data;
            })
    }
}

export const commentsAPI = {
    createComment(postId: string | number, body: string | number, id: number) {
        return instance.post(`comments`, {
            postId: postId,
            body: body,
            id: id
        })
    }
}