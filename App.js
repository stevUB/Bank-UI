import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Card from './src/component/sections/Card';
import Transactions from './src/component/sections/Transactions';
import { useColorScheme } from "nativewind";
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from "expo-splash-screen";
import Header from './src/component/sections/Header';


export default function App() {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  const [fontsLoaded, fontError] = useFonts({
    SpaceGroteskSemiBold: require("./src/component/font/SpaceGrotesk-SemiBold.ttf"),
    SpaceGroteskBold: require("./src/component/font/SpaceGrotesk-Bold.ttf"),
    SpaceGroteskMedium: require("./src/component/font/SpaceGrotesk-Medium.ttf")
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  },[fontsLoaded, fontError]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="p-6 dark:bg-neutral-900">
      <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />

      <View onLayout={onLayoutRootView} >
        <View className="my-6">
          <Header />

          <Card />

          <Transactions />  
        </View>
      </View>
    </SafeAreaView>
  );
  
}
