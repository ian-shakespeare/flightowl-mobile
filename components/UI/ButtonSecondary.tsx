import { StyledView, StyledText } from "../StyledElements";
import { Pressable } from "react-native";

type Props = {
  label: string;
  onPress: () => void;
};

const ButtonSecondary = ({ label, onPress }: Props) => {
  return (
    <StyledView className="py-2 px-6">
      <Pressable onPress={onPress}>
        <StyledText className="text-center text-lg">{label}</StyledText>
      </Pressable>
    </StyledView>
  );
};

export default ButtonSecondary;
