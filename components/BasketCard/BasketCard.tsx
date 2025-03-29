import React from 'react';
import {PizzaType} from "@/types/generalTypes";
import {Flex, Text} from "@radix-ui/themes";
import styles from "./basketCard.module.css";
import { XIcon } from "#/icons/XIcon";
import ChangeQuantityButtons from "@/components/ChangeQuantityButtons";


interface BasketCardProps {
    data: PizzaType
    count: number;
}

const BasketCard:React.FC<BasketCardProps> = ({data, count}) => {
    return (
        <Flex className={styles.basketCard} width={'100%'}>
            <Flex className={styles.imageWrapper} direction='column'></Flex>
            <Flex className={styles.staticInfo} direction='column'>
                <Text className={styles.pizzaName} color='lime'>{data.title}</Text>
                <Text className={styles.pizzaIngrediants} color='lime'>{data.ingredients.join(' / ')}</Text>
            </Flex>
            <Flex className={styles.interactionBlock} direction='column'>
                <Flex className={styles.deletePositionIco}>
                    <XIcon />
                </Flex>
                <Flex>
                    <Text className={styles.positionPrice}>{data.price}zl</Text>
                    <Text>&nbsp;/&nbsp;</Text>
                    <Text className={styles.positionAmount}>{data.price * count}zl</Text>
                </Flex>

                <ChangeQuantityButtons data={data} itemsInCart={count}/>
            </Flex>

        </Flex>
    )
}

export default BasketCard;