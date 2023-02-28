import { extendTheme } from "@chakra-ui/react";

const drawers = {
  components: {
    Drawer: {
      variants: {
        permanent: {
          dialogContainer: {
            width: 0,
          },
        },
      },
    },
  },
}

const colors = {
  primary: {
    100: "#c2910a",
    200: "#27EF96",
    300: "#10DE82",
    400: "#0EBE6F",
    500: "#c2910a",
    600: "#c2910a",
    700: "#c2910a",
    800: "#075C37",
    900: "#064C2E"
  }
};


const customTheme = extendTheme({ colors, drawers });

export default customTheme;