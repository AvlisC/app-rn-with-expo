import {
  Button,
  NativeBaseProvider,
  View,
  Image,
  VStack,
  Text,
} from "native-base";
import { Link } from "expo-router";
import { Header } from "@components/Header";
import { TouchableOpacity } from "react-native-gesture-handler";

import Teste from "@assets/icons/ice-cream.svg";

export default function Welcome() {
  const imagem = require("@assets/imgs/logo.png");
  return (
    <NativeBaseProvider>
      <View style={{ flex: 1, backgroundColor: "#FDBFCC" }}>
        <Header />
        <VStack space={2} justifyContent="center" alignItems="center" flex={1}>
          <Image source={imagem} alt="logo" size={170} w="300" h="200" />
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa
            expedita qui maiores fuga sapiente nostrum accusantium ad harum,
            aspernatur magni dolor atque velit provident placeat exercitationem.
            Odit, quaerat enim.
          </Text>
          <View m={100}>
            <Link href="/acai" asChild>
              <TouchableOpacity>
                <Button
                  endIcon={<Teste width={30} height={30} />}
                  p={5}
                  m={5}
                  mb={20}
                  backgroundColor="#BC73C0"
                  borderColor="gray.300"
                  borderRadius={50}
                  shadow={9}
                  position="fixed"
                >
                  Menu
                </Button>
              </TouchableOpacity>
            </Link>
          </View>
        </VStack>
      </View>
    </NativeBaseProvider>
  );
}
