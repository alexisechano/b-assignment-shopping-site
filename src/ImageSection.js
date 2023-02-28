import * as React from 'react';
import {Stack, Container, Image} from '@chakra-ui/react';

const ImageSection = () => {
  return (
    <Container h='calc(50vh)'>
     <Stack direction='row' alignItems="center">
     <Image boxSize='200px' p={4} src='https://www.chikoshoes.com/wp-content/uploads/2022/03/2203BLD80262-1.jpg' alt='Shoe' />
     <Image boxSize='200px' p={4} src='https://www.chikoshoes.com/wp-content/uploads/2022/03/2203BLD80262-1.jpg' alt='Shoe' />
     <Image boxSize='200px' p={4} src='https://www.chikoshoes.com/wp-content/uploads/2022/03/2203BLD80262-1.jpg' alt='Shoe' />
    </Stack>
    </Container>
  );
};

export default ImageSection;