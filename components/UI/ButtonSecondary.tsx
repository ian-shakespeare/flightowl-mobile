import { StyledText } from "../StyledElements";
import { Pressable, View } from "react-native";

type Props = {
  label: string;
  onPress: () => void;
};

const ButtonSecondary = ({ label, onPress }: Props) => {
  return (
    <View>
      <Pressable onPress={onPress}>
        <StyledText className="text-center text-lg">{label}</StyledText>
      </Pressable>
    </View>
  );
};

export default ButtonSecondary;
