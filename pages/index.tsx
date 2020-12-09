import React, { useEffect } from 'react';
import { Layout } from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';

import { GET_POSTS_REQUESTED } from '../redux/actions/postsActions';
import { PostPreview } from '../components/PostPreview';

export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => dispatch({ type: GET_POSTS_REQUESTED }), [dispatch]);
    const posts = useSelector((store) => store.postsReducer.posts);

    interface post {
        title: string;
        body: string;
        id: number;
    }

    return (
        <Layout>
            <h2 style={{ textAlign: 'center' }}>Posts</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
                {posts.map((post: post) => {
                    return <PostPreview key={post.id} title={post.title} body={post.body} postId={post.id} />;
                })}
            </div>
        </Layout>
    );
}
