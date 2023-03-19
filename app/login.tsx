import axios from "axios";
import { useState, useContext } from "react";
import {
    StyledView,
    StyledTextInput,
    StyledText,
} from "../components/StyledElements";
import ButtonPrimary from "../components/UI/ButtonPrimary";
import Hyperlink from "../components/UI/Hyperlink";
import { AuthContext } from "./_layout";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { account, setAccount } = useContext(AuthContext);

    const login = async () => {
        if (email === "" || password === "") return;
        console.log("hi");
        await axios
            .post("https://api.flightowl.app/sessions", {
                email: email,
                password: password,
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.error(err.toJSON()));
    };

    return (
        <StyledView className="h-2/3 flex gap-2 items-center justify-center">
            <StyledText className="w-3/4 text-lg">Email</StyledText>
            <StyledTextInput
                inputMode="email"
                onChangeText={setEmail}
                placeholder="What's your email?"
                className="w-3/4 border-2 border-gray-200 rounded-lg px-4 py-2"
            />
            <StyledText className="w-3/4 text-lg">Password</StyledText>
            <StyledTextInput
                secureTextEntry
                onChangeText={setPassword}
                placeholder="What's your password?"
                className="w-3/4 border-2 border-gray-200 rounded-lg px-4 py-2"
            />
            <StyledView className="w-3/4 flex flex-row justify-between items-center">
                <Hyperlink href="/register" label="Create an Account" />
                <ButtonPrimary label="Login" onPress={login} />
            </StyledView>
        </StyledView>
    );
};

export default LoginPage;
