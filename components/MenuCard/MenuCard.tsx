'use client'

import React from 'react';
import styles from "./menuCard.module.css";
import { PizzaType } from "@/types/generalTypes";
import {Button, Flex, Heading, Text} from "@radix-ui/themes";
import Image from "next/image";
import {useAppDispatch, useAppSelector} from "@/store/storeHooks";
import {addOneProduct, deleteProductPosition} from "@/store/slices/basketSlice";
import ChangeQuantityButtons from "@/components/ChangeQuantityButtons";

interface MenuCardProps {
    data: PizzaType;
}
const MenuCard: React.FC<MenuCardProps> = ({ data }) => {
    const dispatch = useAppDispatch();
    const basketProducts = useAppSelector(state => state.basket.basketProducts);
    const itemsInCart = basketProducts.filter(item => item._id === data._id).length;


    const handleAddToCart = () => {
        itemsInCart > 0 ? dispatch(deleteProductPosition(data._id)) : dispatch(addOneProduct(data));
    }

    return (
        <Flex className={styles.card} width={'100%'} direction='column'>
            <Image width={1000} height={1000} className={styles.cardImage} src='/images/menu_presentation_img_1.jpg' alt='product_image' />

            <Flex width={'100%'} direction='column' p={'5'} gap='1'>
                <Heading className={styles.title} size={'6'} as={'h3'}>{data.title}</Heading>
                <Text className={styles.ingredients} size={'3'}>{data.ingredients.join(' 🍕 ') }</Text>
                <Text className={styles.price} size={'5'}>{`${data.price} zl`}</Text>

                <Flex className={styles.buttonsGroup} align={'end'} direction='column' gap='3' justify='between' width={'100%'} pt={'3'}>
                    <ChangeQuantityButtons data={data} itemsInCart={itemsInCart} />

                    <Button className={`button ${styles.buttonCart}`} onClick={handleAddToCart} size={'3'} variant="solid" radius={'medium'}>
                        {itemsInCart > 0 ? 'Remove from Cart' : 'Add to cart' }
                        <img className={`icon`} src={itemsInCart > 0 ? '/icons/cart_delete_light_ico.svg' : '/icons/cart_add_light_ico.svg'} alt='cart_icon' />
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default MenuCard;