import { ReactText } from 'react';

export interface currentPost {
    id: number,
    title: string,
    body: string,
}

export interface commentResult {
    postId: number,
    body: string,
    id: number,
}

export interface initState {
    posts: currentPost[];
    currentPostId: string;
    currentPost: currentPost | {};
    title: string;
    body: string;
    comment: string;
    commentResult: commentResult | {};
}

export interface post {
    title: string;
    body: string;
    id: number;
}

export interface cmnt {
    id: ReactText;
    postId: number;
    body: string;
}
