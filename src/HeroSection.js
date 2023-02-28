import * as React from 'react';
import { Container, chakra, Stack, Text} from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Container p={{ base: 10, sm: 14 }} h='calc(80vh)'>
      <Stack direction="column" spacing={8} alignItems="center">
        <chakra.h1
          fontSize={{ base: '4xl', sm: '5xl' }}
          fontWeight="bold"
          textAlign="center"
          maxW="600px"
        >
          Have a totally new shopping experience with
          <Text as="span" bgGradient="linear(to-br, #c2910a, gray.500)" bgClip="text">
                {' '}
                Banter!{' '}
              </Text>{' '}
        </chakra.h1>
        <Text maxW="550px" fontSize="xl" textAlign="center" color="gray.500">
          Banter is the future of social e-commerce!
        </Text>
      </Stack>
    </Container>
  );
};

export default HeroSection;