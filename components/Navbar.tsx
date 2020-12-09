import React from 'react';
import Link from 'next/link';

import { Wrapper, Logo, LinksWrapper, Item } from '../styles/NavbarStyles';

export const Navbar = () => {
    return (
        <Wrapper>
            <Link href="/">
                <Logo>NextJS Blog</Logo>
            </Link>
            <LinksWrapper>
                <Link href="/">
                    <Item>Posts</Item>
                </Link>
                <Link href="/posts/new">
                    <Item>Create Post</Item>
                </Link>
            </LinksWrapper>
        </Wrapper>
    );
};
