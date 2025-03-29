'use client'

import React, {useEffect} from 'react';
import {useAppDispatch} from "@/store/storeHooks";
import {fetchProductsAsync} from "@/store/slices/fetchProducts";

const FetchProductsInitializer: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProductsAsync())
    }, []);

    return null;
}

export default FetchProductsInitializer;