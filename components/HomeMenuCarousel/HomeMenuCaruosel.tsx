'use client'

import React from 'react';
import styles from "./homeMenuCarousel.module.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';
import {Flex} from "@radix-ui/themes";
import HomeMenuCarouselCard from "@/components/HomeMenuCarouselCard/HomeMenuCarouselCard";
import {PizzaType} from "@/types/generalTypes";

interface HomeMenuCarouselProps {
    slidesData: PizzaType[];
}

const HomeMenuCarousel: React.FC<HomeMenuCarouselProps> = ({ slidesData }) => {
    const [emblaRef] =
        useEmblaCarousel({ loop: true, duration: 30,
        }, [Autoplay({stopOnInteraction: false, delay: 5000
        })]);


    return (
        <Flex className={styles.menuPresentationCard} width={'100%'}>
            <Flex className={styles.embla} ref={emblaRef}>
                <Flex className={styles.container} width={'100%'}>
                    {slidesData.map((slide, index) => (
                        <div key={index} className={styles.slide}>
                            <HomeMenuCarouselCard  image={slide.image} title={slide.title} description={slide.description} />
                        </div>
                    ))}
                </Flex>
            </Flex>
        </Flex>

    )
}

export default HomeMenuCarousel;