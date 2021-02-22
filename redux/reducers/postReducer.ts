import { postsAPI } from "../../api/api";

export type CommentType = {
    title: string,
    body: string,
    id: number
    comments: [
        id: number,
        postId: number,
        body: string
    ]
}

export type PostType = {
    title: string,
    body: string,
    id: number
}

let initialState = {
    allPostsData: [] as Array<PostType> | null,
    onePostData: [] as Array<CommentType> | null,
}

type InitialStateType = typeof initialState;

enum PostActionType {
    LIST_POST = 'LIST_POST',
    RETRIEVE_POST = 'RETRIEVE_POST'
}

const postReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case PostActionType.LIST_POST:
            return { ...state, allPostsData: action.data }
        case PostActionType.RETRIEVE_POST:
            return { ...state, onePostData: action.data }
        default:
            return state;
    }
}

type LoadDataType = {
    type: PostActionType.LIST_POST,
    data: Array<PostType>
}
const loadDataAction = (data: Array<PostType>): LoadDataType => ({ type: PostActionType.LIST_POST, data });

type RetrievePostType = {
    type: PostActionType.RETRIEVE_POST,
    data: Array<CommentType>
}
const retrievePostAction = (data: Array<CommentType>): RetrievePostType => ({ type: PostActionType.RETRIEVE_POST, data });

export const loadData = () => {
    return async function(dispatch: any) {
        const response = await postsAPI.listPosts();
        dispatch(loadDataAction(response));
    }
}

export const retrievePost = (id: number) => {
    return async function(dispatch: any) {
        const response = await postsAPI.retrievePost(id);
        dispatch(retrievePostAction(response));
    }
}

type ActionTypes = LoadDataType | RetrievePostType;

export default postReducer;