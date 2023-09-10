import { StatusBar } from "expo-status-bar";
import { Suspense } from "react";
import { TamaguiProvider, Text } from "tamagui";
import tamaguiConfig from "./tamagui.config";
import { View } from "@app/components/View";

const App: React.FC = () => (
  <TamaguiProvider config={tamaguiConfig}>
    <Suspense>
      <View>
        <Text fontFamily="$heading" fontSize="$4">
          Grocify
        </Text>
        <StatusBar style="auto" />
      </View>
    </Suspense>
  </TamaguiProvider>
);

export default App;
