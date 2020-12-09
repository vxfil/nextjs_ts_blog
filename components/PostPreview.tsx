import React, { FC } from 'react';
import Link from 'next/link';

import { Wrapper, Header, Body, Footer, More } from '../styles/PostPreviewStyles';

type PostPreviewProps = {
    title: string;
    body: string;
    postId: number;
};

export const PostPreview: FC<PostPreviewProps> = ({ title, body, postId }) => {
    return (
        <Wrapper>
            <Header>{title}</Header>
            <Body>{body}</Body>
            <Footer>
                <Link href={`/posts/${postId}`}>
                    <More>Read more...</More>
                </Link>
            </Footer>
        </Wrapper>
    );
};
