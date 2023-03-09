import { useState } from "react";
import {
  StyledView,
  StyledTextInput,
  StyledText,
} from "../../components/StyledElements";
import Button from "../../components/UI/Button";
import Hyperlink from "../../components/UI/Hyperlink";
import Spacer from "../../components/UI/Spacer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StyledView className="flex-1 gap-2 items-center justify-center">
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
        <Button label="Login" onPress={() => console.log(email, password)} />
      </StyledView>
      <Spacer />
    </StyledView>
  );
};

export default Login;
