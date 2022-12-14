import React, { useEffect, useState } from "react";
import "./App.css";
import { Box, Button, Checkbox, HStack, Input, Text, useCheckbox } from "@chakra-ui/react";

function App() {
    const [num1, setnum1] = useState(0);
    const [num2, setnum2] = useState(0);
    const [num3, setnum3] = useState(0);
    const [numcheck1, setnumcheck1] = useState(false);
    const [numcheck2, setnumcheck2] = useState(false);
    const [numcheck3, setnumcheck3] = useState(false);
    const [result, setresult] = useState(0);
    useEffect(() => {
        console.log(numcheck1, numcheck2, numcheck3);

        return () => {};
    }, [numcheck1, numcheck2, numcheck3]);

    const handleMath = (op: string) => {
        console.log(op);

        switch (op) {
            case "+":
                setresult(Number(numcheck1 ? num1 : 0) + Number(numcheck2 ? num2 : 0) + Number(numcheck3 ? num3 : 0));
                break;
            case "-":
                setresult(Number(numcheck1 ? num1 : 0) - Number(numcheck2 ? num2 : 0) - Number(numcheck3 ? num3 : 0));
                break;
            case "X":
                setresult(Number(numcheck1 ? num1 : 0) * Number(numcheck2 ? num2 : 0) * Number(numcheck3 ? num3 : 0));
                break;
            case "/":
                setresult(Number(numcheck1 ? num1 : 0) / Number(numcheck2 ? num2 : 0) / Number(numcheck3 ? num3 : 0));
                break;
        }
    };
    return (
        <Box p={8} maxW={900} m="auto">
            <HStack m={8}>
                <Input
                    placeholder="Basic usage"
                    onChange={e => setnum1(Number(e.target.value))}
                    type="number"
                />
                <Checkbox
                    isChecked={numcheck1}
                    onChange={() => setnumcheck1(!numcheck1)}
                ></Checkbox>
            </HStack>
            <HStack m={8}>
                <Input
                    placeholder="Basic usage"
                    onChange={e => setnum2(Number(e.target.value))}
                    type="number"
                />
                <Checkbox
                    isChecked={numcheck2}
                    onChange={() => setnumcheck2(!numcheck2)}
                ></Checkbox>
            </HStack>
            <HStack m={8}>
                <Input
                    placeholder="Basic usage"
                    onChange={e => setnum3(Number(e.target.value))}
                    type="number"
                />
                <Checkbox
                    isChecked={numcheck3}
                    onChange={() => setnumcheck3(!numcheck3)}
                ></Checkbox>
            </HStack>
            <HStack m={8}>
                <Button colorScheme="blue" onClick={() => handleMath("+")}>
                    +
                </Button>
                <Button colorScheme="blue" onClick={() => handleMath("-")}>
                    -
                </Button>
                <Button colorScheme="blue" onClick={() => handleMath("X")}>
                    X
                </Button>
                <Button colorScheme="blue" onClick={() => handleMath("/")}>
                    /
                </Button>
            </HStack>
            <Text m={8} fontSize="2xl">
                {result}
            </Text>
        </Box>
    );
}

export default App;
