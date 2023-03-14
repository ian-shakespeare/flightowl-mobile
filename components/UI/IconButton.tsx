import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, Pressable } from "react-native";

type Props = {
  icon: IconDefinition;
  color: string;
  size: number;
  onPress: () => void;
};

const IconButton = ({ icon, color, size, onPress }: Props) => {
  return (
    <View>
      <Pressable onPress={onPress}>
        <FontAwesomeIcon icon={icon} color={color} size={size} />
      </Pressable>
    </View>
  );
};

export default IconButton;
