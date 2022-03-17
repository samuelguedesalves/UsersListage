import { Box, Container, Heading } from "@chakra-ui/react";

export const Header: React.FC = () => {
  return (
    <Box backgroundColor={"red.400"}>
      <Container maxWidth={"container.md"} paddingY={5}>
        <Heading fontSize={"3xl"} color="white">
          Users listage
        </Heading>
      </Container>
    </Box>
  );
};
