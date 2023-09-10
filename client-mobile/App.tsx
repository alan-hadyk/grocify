import { StatusBar } from "expo-status-bar";
import { Suspense } from "react";
import { TamaguiProvider, Text, View } from "tamagui";
import tamaguiConfig from "./tamagui.config";
import { Dimensions } from "react-native";

const App: React.FC = () => {
  const screenHeight = Dimensions.get("window").height;
  const screenWidth = Dimensions.get("window").width;

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Suspense>
        <View
          padding="$space.40"
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={screenHeight}
          width={screenWidth}
        >
          <Text fontFamily="$heading" fontSize="$4">
            Grocify
          </Text>
          <StatusBar style="auto" />
        </View>
      </Suspense>
    </TamaguiProvider>
  );
};

export default App;
