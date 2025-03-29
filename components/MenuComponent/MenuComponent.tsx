'use client'

import React from 'react';
import PizzaCard from "../MenuCard";
import {Grid} from "@radix-ui/themes";
import {useAppSelector} from "@/store/storeHooks";

const MenuComponent:React.FC = () => {
    const products = useAppSelector(state => state.products);

    return (
        <Grid width={'100%'} px={'5'} columns={{initial: '1', sm: '2', md: '3', lg: '4'}} gap={{initial: '3', sm: '6'}}>
            {products.objects.map((item) => (
                <PizzaCard key={item._id} data={item} />
            ))}
        </Grid>

    )
}

export default MenuComponent;