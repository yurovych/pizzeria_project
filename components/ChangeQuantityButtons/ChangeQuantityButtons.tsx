'use client'

import React from 'react';
import styles from "@/components/MenuCard/menuCard.module.css";
import { Flex, IconButton} from "@radix-ui/themes";
import {addOneProduct, deleteOneProduct} from "@/store/slices/basketSlice";
import {PizzaType} from "@/types/generalTypes";
import {useAppDispatch} from "@/store/storeHooks";

interface ChangeQuantityButtonsProps {
    data: PizzaType;
    itemsInCart: number;
}

const ChangeQuantityButtons:React.FC<ChangeQuantityButtonsProps> = ({data, itemsInCart}) => {
    const dispatch = useAppDispatch();

    const handleMinusButton = () => {
        if (itemsInCart > 0) {
            dispatch(deleteOneProduct(data._id))
        }
    }

    const handlePlusButton = () => {
        if (itemsInCart < 10) {
            dispatch(addOneProduct(data))
        }
    }

    return (
        <Flex className={styles.iconButtonsGroup} gap={'1'}>
            <IconButton className={styles.iconButton} variant='classic' disabled={itemsInCart === 0} onClick={handleMinusButton} size={'3'}>
                -
            </IconButton>
            <Flex justify='center' align='center' width={'38px'} height={'38px'}>
                {itemsInCart}
            </Flex>
            <IconButton className={styles.iconButton} variant='classic' disabled={itemsInCart >= 10} onClick={handlePlusButton} size={'3'}>
                +
            </IconButton>
        </Flex>
    )
}

export default ChangeQuantityButtons;