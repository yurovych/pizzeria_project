import React from 'react';
import {Blockquote, Button, Flex, Heading} from "@radix-ui/themes";
import Image from "next/image";
import styles from './homeMenuCarouselCard.module.css';

interface HomeMenuCarouselCardProps {
    image: string;
    title: string;
    description: string;
}

const HomeMenuCarouselCard: React.FC<HomeMenuCarouselCardProps> = ({image, title, description}) => {
  return (
      <Flex width={'100%'} direction={{initial: 'column', sm: 'row'}} px={{initial: 'none', sm: '5'}} gap='5' justify='between'>
          <Flex width={{initial: '100%', sm: '60%'}}>
              <Image width={1000} height={1000} className={styles.cardImage} src={image} alt='menu_img' />
          </Flex>


          <Flex width={{initial: '100%', sm: '40%'}} direction='column' px={{initial: '5', sm: 'none'}} gap='5'>
              <Heading className={styles.title} as={'h3'} size={{initial: '7', sm: '8'}}>
                  {title}
              </Heading>
              <Blockquote className={styles.desctiption} size={{initial: '3', md: '6'}}>
                  {description}
              </Blockquote>
              <Button mt={'auto'} size={'4'} className={`button`} variant="solid" radius={'medium'}>Order Now</Button>
          </Flex>
      </Flex>
  );
};

export default HomeMenuCarouselCard;