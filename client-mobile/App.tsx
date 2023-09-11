import { StatusBar } from "expo-status-bar";
import { Layout } from "@client/components/layout/Layout";
import { composeFunctions } from "@client/helpers/functions/composeFunctions";
import { withQueryClientProvider } from "@client/hoc/withQueryClientProvider";
import { withThemeProvider } from "@client/hoc/withThemeProvider";
import { Header } from "@client/components/atoms/Header";

const _App: React.FC = () => (
  <Layout>
    <Header>Grocify</Header>
    <StatusBar style="auto" />
  </Layout>
);

export const App = composeFunctions<Record<string, unknown>>(
  withQueryClientProvider,
  withThemeProvider,
)(_App);

export default App;
