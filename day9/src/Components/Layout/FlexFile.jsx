import React from "react";
import {
  Center,
  Flex,
  Square,
  Text,
  Box,
  Spacer,
  Heading,
  Button,
  border,
} from "@chakra-ui/react";

const FlexFile = () => {
  return (
    <>
      <Text fontSize={"30px"}>Flex Box</Text>
      <Flex border={"1px solid black"}>
        <Center bg="teal" w="100px" h="100px">
          1
        </Center>
        <Square size="100px" bg="red.900" color="whiteAlpha.900">
          <Text>2</Text>
        </Square>
        <Box bg="tomato" flex={"1"}>
          <Text>3</Text>
        </Box>
      </Flex>

      <Text fontSize="2xl">Chakra Spacer</Text>
      <Flex border="1px solid red" maxW={"500px"} m="auto">
        <Box padding={"5"} bg="teal.300">
          1
        </Box>
        <Spacer />
        <Box padding={"5"} bg="teal.500">
          2
        </Box>
      </Flex>
      <Flex border={"1px solid red"} p="2">
        <Box
          display={"flex"}
          border="0px solid black"
          textAlign="center"
          alignItems="center"
          w="60%"
          justifyContent='space-between'
        >
          <Heading>Logo</Heading>
          <Text>Inspiration</Text>
          <Text>Find Work</Text>
          <Text>Hire Designers</Text>
          <Text>Learn Designs</Text>
        </Box>
        <Spacer />
        <Box display={"flex"}>
          <Button bg={"transparent"} _hover={{ textDecoration: "underline" }}>
            SignIn
          </Button>
          <Button bg='#ed64a6' _hover={{bg:'#ed4647'}}>SignUp</Button>
        </Box>
      </Flex>
    </>
  );
};

export default FlexFile;
