import axios from "axios";
import { useState } from "react";
import {
    StyledView,
    StyledTextInput,
    StyledText,
} from "../components/StyledElements";
import ButtonPrimary from "../components/UI/ButtonPrimary";
import Hyperlink from "../components/UI/Hyperlink";

const RegisterPage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const register = async () => {
        if (
            firstName === "" ||
            lastName === "" ||
            email === "" ||
            password === ""
        )
            return;
        if (password !== passwordConfirm) return;
        await axios
            .post(process.env.API_URL + "/sessions", {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                sex: "unselected",
            })
            .then((res) => console.log(res))
            .catch((err) => console.error(err.toJSON()));
    };

    return (
        <StyledView className="h-2/3 flex gap-2 items-center justify-center">
            <StyledView className="w-3/4 flex flex-row">
                <StyledView className="flex w-1/2 justify-between">
                    <StyledText className="w-3/4 text-lg">
                        First Name
                    </StyledText>
                    <StyledTextInput
                        inputMode="text"
                        onChangeText={setFirstName}
                        placeholder="First"
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg"
                    />
                </StyledView>
                <StyledView className="flex w-1/2">
                    <StyledText className="w-3/4 text-lg">Last Name</StyledText>
                    <StyledTextInput
                        inputMode="text"
                        onChangeText={setLastName}
                        placeholder="Last"
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg"
                    />
                </StyledView>
            </StyledView>
            <StyledText className="w-3/4 text-lg">Email</StyledText>
            <StyledTextInput
                inputMode="email"
                onChangeText={setEmail}
                placeholder="example@email.com"
                className="w-3/4 px-4 py-2 border-2 border-gray-200 rounded-lg"
            />
            <StyledText className="w-3/4 text-lg">Password</StyledText>
            <StyledTextInput
                secureTextEntry
                onChangeText={setPassword}
                placeholder="Password"
                className="w-3/4 px-4 py-2 border-2 border-gray-200 rounded-lg"
            />
            <StyledText className="w-3/4 text-lg">Confirm Password</StyledText>
            <StyledTextInput
                secureTextEntry
                onChangeText={setPasswordConfirm}
                placeholder="Confirm Password"
                className="w-3/4 px-4 py-2 border-2 border-gray-200 rounded-lg"
            />
            <StyledView className="w-3/4 flex flex-row justify-between items-center">
                <Hyperlink href="/register" label="Log In" />
                <ButtonPrimary label="Create" onPress={register} />
            </StyledView>
        </StyledView>
    );
};

export default RegisterPage;
