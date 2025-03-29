'use client'

import React from "react";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import '@/styles/global.css';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import { store } from '@/store'
import { Provider } from 'react-redux'
import FetchProductsInitializer from "@/components/FetchProductsInitializer";



const RootLayout = ({children}:  { children: React.ReactNode }
) => {

    return (
        <html lang='en'>
            <Provider store={store}>
                <body>
                <FetchProductsInitializer />
                <Theme accentColor={'lime'}>
                    <Navbar />

                    <main>
                        {children}
                    </main>

                    <Footer />
                    {/*<ThemePanel />*/}
                </Theme>
                </body>
            </Provider>
        </html>
    )
}

export default RootLayout;

