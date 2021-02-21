import { postsAPI } from "../../api/api";

export type PostType = {
    title: string,
    body: string,
    id: string | number
}

let initialState = {
    postsData: [] as Array<PostType> | null,
}

type InitialStateType = typeof initialState;

enum PostActionType {
    LIST_POST = 'LIST_POST',
    RETRIEVE_POST = 'RETRIEVE_POST',
    CREATE_POST = 'CREATE_POST',
    UPDATE_POST = 'UPDATE_POST',
    DELETE_POST = 'DELETE_POST',
    CREATE_COMMENT = 'CREATE_COMMENT'
}

const postReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case PostActionType.LIST_POST:
            return { ...state, postsData: action.data }
        default:
            return state;
    }
}

type LoadDataType = {
    type: PostActionType.LIST_POST,
    data: Array<PostType>
}

const loadDataAction = (data: Array<PostType>): LoadDataType => ({ type: PostActionType.LIST_POST, data });

export const loadData = () => {
    return async function(dispatch: any) {
        const response = await postsAPI.listPosts();
        dispatch(loadDataAction(response));
    }
}

type ActionTypes = LoadDataType;

export default postReducer;