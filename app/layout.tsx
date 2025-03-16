import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import '@/styles/global.css';
import Navbar from "../components/Navbar/Navbar";

export const metadata = {
    icons: {
        icon: "/icons/favicon-32x32.png",
    },
}

const RootLayout = ({children}: any) => {
    return (
        <html lang='en'>
            <body>
                <Theme accentColor={'lime'}>
                    <Navbar />

                    <main>
                        {children}
                    </main>
                    {/*<ThemePanel />*/}
                </Theme>
            </body>
        </html>
    )
}

export default RootLayout;

