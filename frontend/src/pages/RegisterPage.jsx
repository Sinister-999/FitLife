import {useState} from "react";
import {useToast} from "@chakra-ui/react";

const CreatePage = () => {
    const [newUser, setNewUser] = useState({
        username: "",
        email: "",
        password: "",
    });
    const toast = useToast();

    // const {createUser} =
    return (
        <div>CreatePage</div>
    );
};

export default CreatePage;