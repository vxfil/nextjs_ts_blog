import React from 'react';
import Head from 'next/head';

import { Navbar } from './Navbar';

export const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Next.JS blog</title>
            </Head>
            <Navbar />
            <main>{children}</main>
        </>
    );
};
