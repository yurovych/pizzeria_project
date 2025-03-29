import React from 'react';
import { Flex } from "@radix-ui/themes";
import styles from './customElementsStyles.module.css'

interface LimitedFlexProps {
    children: React.ReactNode;
}

export const LimitedFlex: React.FC<LimitedFlexProps> = ({ children } ) => {
    return <Flex className={styles.limitedFlex} width={'100%'} mx={'auto'}>{children}</Flex>
}

