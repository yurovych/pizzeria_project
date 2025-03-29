import styles from "./footer.module.css";
import {Button, Flex, Heading, Text} from "@radix-ui/themes";
import { LimitedFlex } from "@/customElements/LimitedFlex";
import {Routes} from "@/types/generalTypes";
import {contactData} from "@/data/contactData";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footerWrapper}>
            <LimitedFlex>
                <Flex className={styles.footer} direction='column' align='center' justify='center' gap='3' px='5' py='9'>
                    <Heading className={styles.footerTitle} size={{initial: '8', sm: '9'}} as={'h2'}>Lodrupizza</Heading>
                    <Flex gap={'3'}>
                        <Link className={`${styles.footerInfo} ${styles.footerLink}`} href={`tel:${contactData.tel}`}>
                            <Flex align='center' width={'24'} height={'24'} gap={'3'}>
                                <img className={`icon`} src={'/icons/phone_light_ico.svg'} alt='phone_icon' />
                                <Text size={{initial: '3', sm: '6'}}>{contactData.tel}</Text>
                            </Flex>
                        </Link>
                    </Flex>
                    <Flex gap={'3'}>
                        <Link className={`${styles.footerInfo} ${styles.footerLink}`} href={contactData.googleMapsUrl}>
                            <Flex align='center' width={'24'} height={'24'} gap={'3'}>
                                <img className={`icon`} src={'/icons/location_light_ico.svg'} alt='location_icon' />
                                <Text size={{initial: '3', sm: '6'}}>{contactData.address}</Text>
                            </Flex>
                        </Link>
                    </Flex>
                    <Text className={styles.footerInfo} mt={'5'} size={{initial: '3', sm: '6'}}>Monday - Friday: 11:00 - 21:00  </Text>
                    <Text className={styles.footerInfo} size={{initial: '3', sm: '6'}}>Saturday - Sunday: 10:00 - 22:00  </Text>
                    <Link href={Routes.MENU}>
                        <Button size={'4'} className={`button ${styles.button}`} variant="solid" radius={'medium'}>See the Menu</Button>
                    </Link>
                    <Flex className={styles.footerBottomBlock} width={'100%'} justify='between'>
                        <Link href={Routes.HOME} className={styles.footerInfo}>
                            <Text size={{initial: '2', sm: '4'}}>
                                Privat Policy
                            </Text>
                        </Link>
                        <Link href={Routes.HOME} className={styles.footerInfo}>
                            <Text size={{initial: '2', sm: '4'}}>
                                Terms and Conditions
                            </Text>
                        </Link>
                    </Flex>
                </Flex>
            </LimitedFlex>

        </footer>
    )
}

export default Footer;