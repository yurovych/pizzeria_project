import React from 'react';
import {LimitedFlex} from "@/customElements/LimitedFlex";
import {Flex, Heading, Section} from "@radix-ui/themes";

interface PageHeaderProps {
    title: string
}

const PageHeader:React.FC<PageHeaderProps> = ({title}) => {
    return (
        <Section py={'5'} className={`headerSection`} width={'100%'}>
            <LimitedFlex>
                <Flex>
                    <Heading className={`headerTitle`} mt={'auto'} as={'h1'} size={{initial: '7', sm: '8',  lg: '9'}}>
                        { title}
                    </Heading>
                </Flex>
            </LimitedFlex>
        </Section>
    )
}

export default PageHeader;