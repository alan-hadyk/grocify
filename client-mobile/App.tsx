import { StatusBar } from "expo-status-bar";
import { Suspense } from "react";
import { Text } from "tamagui";
import { View } from "@client/components/View";
import { composeFunctions } from "@client/helpers/functions/composeFunctions";
import { withQueryClientProvider } from "@client/hoc/withQueryClientProvider";
import { withTamaguiProvider } from "@client/hoc/withTamaguiProvider";

const _App: React.FC = () => (
  <Suspense>
    <View>
      <Text fontFamily="$heading" fontSize="$4">
        Grocify
      </Text>
      <StatusBar style="auto" />
    </View>
  </Suspense>
);

export const App = composeFunctions<Record<string, unknown>>(
  withQueryClientProvider,
  withTamaguiProvider,
)(_App);

export default App;
