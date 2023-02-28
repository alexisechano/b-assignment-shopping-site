import HeroSection from "./HeroSection";
import ImageSection from "./ImageSection";
import { Box, Button, Input } from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons'
import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
  } from '@chakra-ui/react'

function MainSection() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, ] = React.useState('left')

    return (
        <Box w='calc(100vw)' alignItems='center'>
            <Box position='fixed'
            bottom='20px'
            right={['4px', '20px', '20px', '20px', '30px']}
            zIndex={2}>
                    <Button onClick={onOpen} zIndex={3} size='lg' rightIcon={<ChatIcon />} colorScheme='yellow' variant='outline'>
                        Banter
                    </Button>
            </Box>
            <HeroSection />
            <ImageSection /> 
            <Drawer variant="permanent" placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                <DrawerHeader borderBottomWidth='1px' textColor={'primary.500'}>Let's Banter</DrawerHeader>
                <DrawerBody>
                    <p>Thoughts on the products...</p>
                </DrawerBody>
                <DrawerFooter borderTopWidth="1px">
                <Box>
                <Input
                  placeholder="Thoughts?"
                />
              </Box>
                <Button bgColor={'primary.500'}>Send</Button>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}

export default MainSection;