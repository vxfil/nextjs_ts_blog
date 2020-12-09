import React from 'react';

import { Layout } from '../../components/Layout';
import { NewPostForm } from '../../components/NewPostForm';

export default function New() {
    return (
        <Layout>
            <h2 style={{ textAlign: 'center' }}>New Post</h2>
            <NewPostForm />
        </Layout>
    );
}
