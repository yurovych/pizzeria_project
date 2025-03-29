import {Flex, Button, Heading, Section} from "@radix-ui/themes";
import styles from './home.module.css';
import HomeMenuCaruosel from "@/components/HomeMenuCarousel";
import {LimitedFlex} from "@/customElements/LimitedFlex";
import {Routes} from "@/types/generalTypes";
import Link from "next/link";

export const metadata = {
    title: 'Home | LodruPizza',
    description: 'Website for LodruPizza',
    icons: {
        icon: "/icons/favicon-32x32.png",
    },
}

const slidesData = [
    {
        _id: '1',
        title: 'Margherita',
        description: "A classic Italian pizza with thin crust, tomato sauce, mozzarella, and fresh basil. A simple yet perfect balance of flavors!",
        image: '/images/menu_presentation_img_1.jpg',
        ingredients: ["Thin crust", "Tomato sauce", "Mozzarella", "Fresh basil"],
        price: 39
    },
     {
        _id: '2',
        title: 'Margherita',
        description: "A classic Italian pizza with thin crust, tomato sauce, mozzarella, and fresh basil. A simple yet perfect balance of flavors!",
        image: '/images/menu_presentation_img_1.jpg',
        ingredients: ["Thin crust", "Tomato sauce", "Mozzarella", "Fresh basil"],
        price: 39
    },
     {
        _id: '3',
        title: 'Margherita',
        description: "A classic Italian pizza with thin crust, tomato sauce, mozzarella, and fresh basil. A simple yet perfect balance of flavors!",
        image: '/images/menu_presentation_img_1.jpg',
        ingredients: ["Thin crust", "Tomato sauce", "Mozzarella", "Fresh basil"],
        price: 39
    }
]

const Home = () => {
    return (
        <>
            <Section className={styles.headerSection} width={'100vw'} height={'100vh'} py={{initial: '2', md: '9'}}>
                <LimitedFlex>
                    <Flex className={styles.header} direction="column" gap={{initial: '3', sm: '6'}}>
                        <Heading as={'h1'} className={styles.title} size={{initial: '7', sm: '8', lg: '9'}} weight="bold">LODRUPIZZA - DISCOVER TASTE OF ITALY </Heading>
                        <Heading as={'h4'} className={styles.subtitle} size={{initial: '4', sm: '6'}} weight="medium">We invite you to a little part if Italy in Gdansk, where we bake, hopefully, the tastiest pizza in our city!</Heading>
                        <Link href={Routes.MENU}>
                            <Button className={`button ${styles.button}`} size={'4'} variant="solid" radius={'medium'}>See the Menu</Button>
                        </Link>

                    </Flex>
                </LimitedFlex>
            </Section>

            <Section className={styles.menuPresentstionSection}>
                <LimitedFlex>
                    <Flex className={styles.menuPresentation}>
                        <HomeMenuCaruosel slidesData={slidesData} />
                    </Flex>
                </LimitedFlex>
            </Section>
        </>


    ) ;
};

export default Home;

