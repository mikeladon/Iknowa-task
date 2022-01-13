export interface PostData {
    id: number,
    title: string,
    body: string,
    userId: number,
}

export interface CommentData {
    body: string,
    email: string,
    id: number,
    name: string,
    postId: number
}

export interface NewComment {
    title: string,
    text: string,
}