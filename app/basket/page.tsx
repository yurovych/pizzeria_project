
import {Section} from "@radix-ui/themes";
import {LimitedFlex} from "@/customElements/LimitedFlex";
import React from "react";
import styles from  './basket.module.css';
import BasketComponent from "@/components/BasketComponent";
import PageHeader from "@/components/PageHeader";

export const metadata = {
    title: 'Basket | LodruPizza',
    description: 'Lodrupizza basket',
    icons: {
        icon: "/icons/favicon-32x32.png",
    },
}

const Menu = () => {
    return (
        <>
            <PageHeader title={'Ready to Checkout'} />

            <Section className={styles.menuMainSection}>
                <LimitedFlex>
                    <BasketComponent />
                </LimitedFlex>
            </Section>
        </>


    )
}
export default Menu;