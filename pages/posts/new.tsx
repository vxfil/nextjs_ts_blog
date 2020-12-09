import React from 'react';

import { Layout } from '../../components/Layout';
import { NewPostForm } from '../../components/NewPostForm';

export default function New() {
    return (
        <Layout>
            <h2 style={{ textAlign: 'center', color: '#444444', fontWeight: 700 }}>New Post</h2>
            <NewPostForm />
        </Layout>
    );
}
