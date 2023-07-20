import { View, Text, ImageBackground } from "react-native";

export default function TabHamburger() {
  const imagem = require("@assets/imgs/patternLight.png");
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={imagem}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <Text>OPÇÕES HAMBURGER</Text>
      </ImageBackground>
    </View>
  );
}
