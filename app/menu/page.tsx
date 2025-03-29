
import {Section} from "@radix-ui/themes";
import styles from "./menu.module.css";
import {LimitedFlex} from "@/customElements/LimitedFlex";
import React from "react";
import MenuList from "@/components/MenuComponent";
import PageHeader from "@/components/PageHeader";

export const metadata = {
    title: 'Menu | LodruPizza',
    description: 'Lodrupizza menu',
    icons: {
        icon: "/icons/favicon-32x32.png",
    },
}

const Menu = () => {
    return (
        <>
            <PageHeader title={'Explore taste together with Lodrupizza'} />

            <Section className={styles.menuMainSection}>
                <LimitedFlex>
                    <MenuList />
                </LimitedFlex>
            </Section>
        </>


    )
}
export default Menu;