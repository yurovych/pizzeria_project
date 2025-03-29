'use client'

import React from 'react';
import BasketCard from "@/components/BasketCard";
import {useAppSelector} from "@/store/storeHooks";
import {Button, Flex, Heading, Text} from "@radix-ui/themes";
import styles from "./basketComponent.module.css";
import {PizzaType} from "@/types/generalTypes";

const BasketComponent:React.FC = () => {
    const products = useAppSelector((state) => state.basket.basketProducts)
    const basketListObject: {[key: string]: PizzaType[]} = {};
    const total = products.reduce((acc, item) => acc + item.price, 0);

    products.forEach((item) => {
        if (basketListObject[item._id]) {
            basketListObject[item._id].push(item);
        } else {
            basketListObject[item._id] = [item];
        }
    })

    const basketListValues = Object.values(basketListObject);

    return (
        <Flex className={styles.basketComponent} width={'100%'} direction={{initial: 'column-reverse', md: 'row'}}>
            <Flex className={styles.listBlock} width='100%' direction='column'>
                {basketListValues.map((item) => (
                    <BasketCard key={item[0]._id} data={item[0]} count={item.length} />
                ))}
            </Flex>


            <Flex className={styles.summaryBlock} direction='column' width='100%'>
                <Heading className={styles.summaryTitle} as='h3'>Order Summary</Heading>
                <Flex className={styles.summaryTotal}>
                    <Text>Total</Text>
                    &nbsp;
                    <Text>{total || 0}zl</Text>
                </Flex>
                <Flex>
                    <Button>Checkout</Button>
                    <Button>Delete All</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default BasketComponent;