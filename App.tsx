import React from "react";

import { NativeBaseProvider } from "native-base";
import { Welcome } from "@screens/Welcome";
import { NavigationContainer } from "@react-navigation/native";

export const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Welcome />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
