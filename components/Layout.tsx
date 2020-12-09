import React from 'react';
import Head from 'next/head';

import { Navbar } from './Navbar';
import { Container, Footer, Content } from '../styles/LayoutStyles';

export const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Next.JS blog</title>
            </Head>
            <Navbar />
            <Container>{children}</Container>
            <Footer>
                <Content>
                    Fylymon incorporated® <br /> all rights reserved <br /> 2020{' '}
                </Content>
            </Footer>
        </>
    );
};
