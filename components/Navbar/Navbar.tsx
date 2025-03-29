'use client'

import {Flex, Text} from "@radix-ui/themes";
import styles from './navbar.module.css'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MenuIcon } from "#/icons/MenuIcon";
import { XIcon } from "#/icons/XIcon";
import { Separator } from "radix-ui";
import { usePathname } from "next/navigation";
import {Routes} from "@/types/generalTypes";
import  Link  from 'next/link'
import {useAppSelector} from "@/store/storeHooks";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
    const pathname = usePathname();
    const productsInCart = useAppSelector((state) => state.basket.basketProducts.length);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }

    useEffect(() => {
        handleScroll()

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', () => setIsMobileMenuOpened(false));
        window.addEventListener('scroll', () => setIsMobileMenuOpened(false));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', () => setIsMobileMenuOpened(false));
            window.removeEventListener('scroll', () => setIsMobileMenuOpened(false));
        };
    }, []);

    const handleBurgerMenuClick = () => {
        setIsMobileMenuOpened((prevState) => !prevState);
    }

    return (
        <Flex
            className={`
                ${isScrolled || pathname !== Routes.HOME  ? styles.navWrapperScrolled : styles.navWrapper} 
                ${isScrolled && isMobileMenuOpened || pathname !== Routes.HOME && isMobileMenuOpened ? styles.navbarScrolledOpened : ''}
            `}
            left={'0'}
            top={isScrolled || pathname !== Routes.HOME ? '20px' : '100px'}
            width={'100%'}
            position={'fixed'}
            justify='start'
            align='center'
            direction='column'
        >
            <Flex
                className={`
                    ${isScrolled || pathname !== Routes.HOME ? styles.navbarScrolled : styles.navbar}
                `}
                gap={'2'}
                justify='between'
                align='center'
                width='100%'
                height='auto'
            >
                <Link href={Routes.HOME}>
                    <Image className={`${isScrolled  || pathname !== Routes.HOME ? styles.logoImgScrolled : styles.logoImg}`}  width={50} height={50} src='/images/logo.jpg' alt='logo'/>
                </Link>

                <Flex className={styles.navGroup} display={isScrolled || pathname !== Routes.HOME ? {initial: 'none', sm: 'flex'} : {}} gap={'4'} justify='center'>
                    <Link className={`${styles.link} ${pathname === Routes.HOME ? styles.activeLink : ''}`} href='/'>
                        Home
                    </Link>
                    <Link className={`${styles.link} ${pathname === Routes.MENU ? styles.activeLink : ''}`} href='/menu'>
                        Menu
                    </Link>
                    <Link className={`${styles.link} ${pathname === Routes.ABOUT_US ? styles.activeLink : ''}`} href='/'>
                        About Us
                    </Link>
                    <Link className={`${styles.link} ${pathname === Routes.CONTACTS ? styles.activeLink : ''}`} href='/'>
                        Contacts
                    </Link>
                </Flex>

                <Flex className={styles.mobileIconsBlock} gap='4' display={!isScrolled && pathname === Routes.HOME  ? 'none' : 'flex'}>
                    <Link className={styles.basketButton} href='/basket'>
                        {productsInCart > 0 && (
                            <Flex className={styles.basketButtonQuantityPimple} justify='center' align='center'>
                                <Text className={styles.basketButtonNumber} size='1'>{productsInCart}</Text>
                            </Flex>
                        )}

                        <img className={`icon`} src='/icons/cart_light_ico.svg' alt='cart_icon' />
                    </Link>
                    <Flex className={styles.burgerMenuIco} display={isScrolled || pathname !== Routes.HOME  ? {sm: 'none'} : {initial: 'none'}} onClick={handleBurgerMenuClick}>
                        {isMobileMenuOpened ? <XIcon /> : <MenuIcon />}
                    </Flex>
                </Flex>
            </Flex>

            <Separator.Root className={styles.Root} style={{width: 'calc(100% - 48px)',  height: `${isMobileMenuOpened ? '1px' : '0'}`, backgroundColor: 'var(--main_middle_color)' }} />

            <Flex
                className={styles.navGroup}
                display={isScrolled || pathname !== Routes.HOME  ? 'flex' : 'none'}
                width={'100%'}
                height={'100%'}
                justify={'between'}
                align={'center'}
                direction='column'
                p={'8'}
                gap={'4'}
            >
                <Link className={`${styles.link} ${pathname === Routes.HOME ? styles.activeLink : ''}`} href='/'>
                    Home
                </Link>

                <Link className={`${styles.link} ${pathname === Routes.MENU ? styles.activeLink : ''}`} href='/menu'>
                    Menu
                </Link>
                <Link className={`${styles.link} ${pathname === Routes.ABOUT_US ? styles.activeLink : ''}`} href='/'>
                    About Us
                </Link>
                <Link className={`${styles.link} ${pathname === Routes.CONTACTS ? styles.activeLink : ''}`} href='/'>
                    Contacts
                </Link>
            </Flex>
        </Flex>

  );
};

export default Navbar;