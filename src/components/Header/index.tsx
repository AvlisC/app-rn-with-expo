import { View } from "react-native";

import MeltedChocolate from "@assets/imgs/melted-chocolate.svg";

export const Header: React.FC = () => {
  return (
    <View>
      <MeltedChocolate height="50%" width="105%" preserveAspectRatio="none" />
    </View>
  );
};
