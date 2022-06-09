import { Box, Button, Spacer, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import "./App.css";
import { counter_decrement, counter_increment } from "./Store/action.types";
function App() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.count);

  console.log(state);

  return (
    <Box bg="teal" h="100vh">
      <Box w="fit-content" m="auto" pt="20px">
        <Text fontSize="2xl" color="white">Counter : {state}</Text>
        <Box display="flex" justifyContent="space-between">
          <Button
            onClick={() => dispatch({ type: counter_increment })}
            h="40px"
            w="40px"
          >
            <AddIcon />
          </Button>
          <Button onClick={() => dispatch({ type: counter_decrement })}>
            <MinusIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
