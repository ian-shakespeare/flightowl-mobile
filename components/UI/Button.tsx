import { StyledView, StyledText } from "../StyledElements";
import { Pressable } from "react-native";

type Props = {
  label: string;
  onPress: () => void;
};

const Button = ({ label, onPress }: Props) => {
  return (
    <StyledView className="bg-fo-purple rounded-lg py-2 px-6">
      <Pressable onPress={onPress}>
        <StyledText className="text-white text-lg">{label}</StyledText>
      </Pressable>
    </StyledView>
  );
};

export default Button;
