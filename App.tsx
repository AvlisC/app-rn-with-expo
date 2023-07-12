import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import Acai from '@assets/icons/acai-berry.svg'
import Hamburger from '@assets/icons/hamburger.svg'
import IceCream from '@assets/icons/ice-cream.svg'
import MilkShake from '@assets/icons/milkshake.svg'
import { Center, Heading, Image, NativeBaseProvider, Stack, VStack } from 'native-base';

export const App: React.FC = () => {
  const imagem = require('@assets/imgs/melted-chocolate.png')
  return (
    <NativeBaseProvider>
      <Stack bgColor="#FDBFCC" flex={0.6}><Image source={imagem} height="300" width="full" alt='melted-chocolate' /></Stack>
      <Center alignItems="left" pl={5} bgColor="#FDBFCC" flex={1.0}>
        <Text >Acai Berry</Text>
        <Acai height={80} width={80} />
        <Text >Hamburger</Text>
        <Hamburger height={80} width={80} />
        <Text >IceScream</Text>
        <IceCream height={80} width={80} />
        <Text >MIlkShake</Text>
        <MilkShake height={80} width={80} />
        {/* <StatusBar style="auto" /> */}
      </Center>
      <Stack alignItems="center" bgColor="#FDBFCC"><Text > Contatos: (13) 0 0000-0000 </Text></Stack>
    </NativeBaseProvider>
  );
}
