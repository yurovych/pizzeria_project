
import {Flex, Button, Heading, Section, Link, Text} from "@radix-ui/themes";
import styles from './home.module.css';
import HomeMenuCaruosel from "@/components/HomeMenuCarousel";
import menuPresentationSlide1 from "#/images/menu_presentation_img_1.jpg";
import menuPresentationSlide2 from "#/images/menu_presentation_img_2.jpg";
import menuPresentationSlide3 from "#/images/menu_presentation_img_3.jpg";
import menuPresentationSlide4 from "#/images/menu_presentation_img_2.jpg";
import { HomeMenuPresentationType } from "@/types/generalTypes";



export const metadata = {
    title: 'Home | LodruPizza',
    description: 'Website for LodruPizza',
}

const slidesData: HomeMenuPresentationType[] = [
    {
        image: menuPresentationSlide1,
        title: 'Margherita',
        description: "A classic Italian pizza with thin crust, tomato sauce, mozzarella, and fresh basil. A simple yet perfect balance of flavors!"
    },
    {
        image: menuPresentationSlide2,
        title: 'Pepperoni',
        description: "A spicy favorite topped with loads of pepperoni, gooey mozzarella, and rich tomato sauce. Perfect for those who love a little heat!"
    },
    {
        image: menuPresentationSlide3,
        title: 'Hawaiian',
        description: "A sweet and savory combo with juicy pineapple, ham, and melted cheese. A controversial choice, but loved by many!"
    },
    {
        image: menuPresentationSlide4,
        title: 'Quattro Formaggi',
        description: "A dream for cheese lovers, featuring a blend of mozzarella, gorgonzola, parmesan, and ricotta. Creamy, rich, and absolutely delicious!"
    },
]

const Home = () => {
    return (
        <>
            <Section className={styles.headerSection} width={'100vw'} height={'100vh'}>
                <Flex className={styles.header} direction="column" gap={{initial: '3', sm: '6'}}>
                    <Heading as={'h1'} className={styles.title} size={{initial: '7', sm: '9'}} weight="bold">LODRUPIZZA - DISCOVER TASTE OF ITALY </Heading>
                    <Heading as={'h4'} className={styles.subtitle} size={{initial: '4', sm: '6'}} weight="medium">We invite you to a little part if Italy in Gdansk, where we bake, hopefully, the tastiest pizza in our city!</Heading>
                    <Button size={'4'} className={`button ${styles.button}`} variant="solid" radius={'medium'}>See the Menu</Button>
                </Flex>
            </Section>

            <Section width={'100vw'} className={styles.menuPresentstionSection}>
                <Flex className={styles.menuPresentation}>
                    <HomeMenuCaruosel slidesData={slidesData} />
                </Flex>
            </Section>

            <footer className={styles.footerWrapper}>
                <Flex className={styles.footer} direction='column'  align='center' justify='center' gap='3' px='5' py='9'>
                    <Heading className={styles.footerTitle} size={{initial: '8', sm: '9'}} as={'h2'}>Lodrupizza</Heading>
                    <Flex gap={'3'}>
                        <Link className={`${styles.footerInfo} ${styles.footerLink}`} size={{initial: '3', sm: '6'}} href={'tel:+4809341234'}>
                            <Flex align='center' width={'24'} height={'24'} gap={'3'}>
                                <img className={`icon`} src={'/icons/phone_light_ico.svg'} alt='phone_icon' />
                                +4809341234
                            </Flex>
                        </Link>
                    </Flex>
                    <Flex gap={'3'}>
                        <Link className={`${styles.footerInfo} ${styles.footerLink}`} size={{initial: '3', sm: '6'}} href={'https://www.google.com/maps/place/Obro%C5%84c%C3%B3w+Wybrze%C5%BCa+4E,+80-398+Gda%C5%84sk,+Poland/@54.40794,18.5906359,173a,35y,351.58h,15.29t/data=!3m1!1e3!4m6!3m5!1s0x46fd0b2ae9e17453:0x3218c72f7a7e422e!8m2!3d54.4080986!4d18.5906881!16s%2Fg%2F11c1fzx2m2?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D'}>
                            <Flex align='center' width={'24'} height={'24'} gap={'3'}>
                                <img className={`icon`} src={'/icons/location_light_ico.svg'} alt='location_icon' />
                                Obrońców Wybrzeża 4E
                            </Flex>
                        </Link>
                    </Flex>
                    <Text className={styles.footerInfo} mt={'5'} size={{initial: '3', sm: '6'}}>Monday - Friday: 11:00 - 21:00  </Text>
                    <Text className={styles.footerInfo} size={{initial: '3', sm: '6'}}>Saturday - Sunday: 10:00 - 22:00  </Text>
                    <Button size={'4'} className={`button ${styles.button}`} variant="solid" radius={'medium'}>See the Menu</Button>
                    <Flex className={styles.footerBottomBlock} width={'100%'} justify='between'>
                        <Link href={'/'} className={styles.footerInfo} size={{initial: '2', sm: '4'}}>Privat Policy</Link>
                        <Link href={'/'} className={styles.footerInfo} size={{initial: '2', sm: '4'}}>Terms and Conditions</Link>
                    </Flex>
                </Flex>
            </footer>
        </>


    ) ;
};

export default Home;

