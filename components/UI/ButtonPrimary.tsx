import { StyledView, StyledText } from "../StyledElements";
import { Pressable, View } from "react-native";
import { styled } from "nativewind";

type Props = {
    label: string;
    onPress: () => void;
};

const StyledPressable = styled(Pressable);

const ButtonPrimary = ({ label, onPress }: Props) => {
    return (
        <View>
            <StyledPressable
                onPress={onPress}
                className="border-2 border-fo-purple bg-fo-purple rounded-lg py-2 px-6 disabled:bg-white"
            >
                <StyledText className="text-white text-center text-lg">
                    {label}
                </StyledText>
            </StyledPressable>
        </View>
    );
};

export default ButtonPrimary;
