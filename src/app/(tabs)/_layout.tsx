import { Tabs } from "expo-router";

import HamburgerSvg from "@assets/icons/hamburger.svg";
import AcaiSvg from "@assets/icons/acai-berry.svg";
import IceCreamSvg from "@assets/icons/ice-cream.svg";
import MilkShake from "@assets/icons/milkshake.svg";
import { color } from "native-base/lib/typescript/theme/styled-system";

export default function TabRoutesLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }} initialRouteName="acai">
      <Tabs.Screen
        name="acai"
        options={{
          title: "Açais",

          tabBarIcon: ({ size }) => <AcaiSvg width={35} />,
        }}
      />

      <Tabs.Screen
        name="hamburger"
        options={{
          title: "Hamburgers",
          tabBarIcon: ({ size }) => <HamburgerSvg width={35} />,
        }}
      />

      <Tabs.Screen
        name="iceCream"
        options={{
          title: "Sorvetes",
          tabBarIcon: ({ size }) => <IceCreamSvg width={35} />,
        }}
      />

      <Tabs.Screen
        name="milkShake"
        options={{
          title: "MilkShakes",
          tabBarIcon: ({ size }) => <MilkShake width={35} />,
        }}
      />
    </Tabs>
  );
}
