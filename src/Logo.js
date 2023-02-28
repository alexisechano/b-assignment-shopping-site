import React from "react";
import { Box, Heading, ChakraProvider } from "@chakra-ui/react";
import customTheme from "./utils/Theme";

export default function Logo(props) {
  return (
    <ChakraProvider theme={customTheme}>
      <Box {...props}>
        <Heading>
          Site
        </Heading>
      </Box>
    </ChakraProvider>
  );
}