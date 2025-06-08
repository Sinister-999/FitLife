import {Box, Button, Container, Flex, HStack, Text, useColorMode} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Container maxW={"1140px"} px={4}>
            <Flex
                h={16}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDir={{
                    base: "column",
                    sm: "row",
                }}
            >
                <Box textAlign={"center"}>
                    <Text
                        fontSize={{ base: "22", sm: "50" }}
                        fontWeight={"bold"}
                        textTransform={"uppercase"}
                        textAlign={"center"}
                        bgGradient={"linear(to-r, cyan.400, blue.500)"}
                        bgClip={"text"}
                    >
                        <Link to={"/"}>Fit Life</Link>
                    </Text>
                    <Text fontSize={{ base: "14", sm: "18" }} color="gray.500">
                        Make Macro Tracking Simple
                    </Text>
                </Box>



                <HStack spacing={2} alignItems={"center"}>
                    <Link to={"/register"}>
                        <Button>
                            <Text>
                                Register
                            </Text>
                        </Button>
                    </Link>
                    <Link to={"/login"}>
                        <Button>
                            <Text>
                                Login
                            </Text>
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
                    </Button>
                </HStack>
            </Flex>
        </Container>
    );
};
export default Navbar;