import { Header } from "@components/Header";
import { View, Text, ImageBackground } from "react-native";

export default function TabAcai() {
  const imagem = require("@assets/imgs/patternBrown.png");
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={imagem}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <Text>OPÇÕES Acai</Text>
      </ImageBackground>
    </View>
  );
}
