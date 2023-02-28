import React from 'react';
import Header from "./HeaderSection";
import HeroSection from "./HeroSection";
import ImageSection from "./ImageSection";
import { Box} from '@chakra-ui/react';

function App() {
    return (
    <Box>
        <Header />
        <HeroSection />
        <ImageSection />
    </Box>
    );
}

export default App;