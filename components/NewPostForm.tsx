import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';

import { createPost } from '../api';
import { Form, Label, Input, Error, TextArea, Button } from '../styles/NewPostFormStyles';

export const NewPostForm = () => {
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            title: '',
            body: '',
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .min(5, 'Must be 5 characters or more')
                .max(50, 'Must be 50 characters or less')
                .required('Required'),
            body: Yup.string()
                .min(5, 'Must be 5 characters or more')
                .max(500, 'Must be 500 characters or less')
                .required('Required'),
        }),
        onSubmit: async (values) => {
            const response = await createPost(values);
            router.push(`/posts/${response.id}`);
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Label htmlFor="title">Title</Label>
            <Input id="title" type="text" {...formik.getFieldProps('title')} />
            {formik.touched.title && formik.errors.title ? <Error>{formik.errors.title}</Error> : null}
            <Label htmlFor="body">Body</Label>
            <TextArea id="body" {...formik.getFieldProps('body')} />
            {formik.touched.body && formik.errors.body ? <Error>{formik.errors.body}</Error> : null}
            <Button type="submit">Create Post</Button>
        </Form>
    );
};
