import React from "react";
import { Button, Container, Input, Text } from "atomize";
import Background from "./components/Background";

function Home() {
    return (
        <>
            {/* Outside Container */}
            <Background/>
            <Container h="100vh" w="100vw" d="flex" flexDir="column" justify="center" overflow="hidden">
                
                <Container textAlign="center" maxW="400px">
                    <Text tag="h1" textSize="display1" m={{ b: "2rem" }}>
                        Login
                    </Text>
                    <Input placeholder="Utilizador" m={{ b: "1rem" }}/>
                    <Input placeholder="Palavra-passe" type="password" m={{ b: "1rem" }}/>
                    <Button h="2.5rem" w="100%" rounded="lg">
                        Login
                    </Button>
                </Container>
            </Container>
        </>
    );
}

export default Home;