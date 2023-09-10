import { ReactNode } from "react";
import { Dimensions } from "react-native";
import { View as ViewComponent } from "tamagui";

interface IViewProps {
  children: ReactNode | ReactNode[];
}

export const View: React.FC<IViewProps> = ({ children }) => {
  const screenHeight = Dimensions.get("window").height;
  const screenWidth = Dimensions.get("window").width;

  return (
    <ViewComponent
      padding="$space.40"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={screenHeight}
      width={screenWidth}
    >
      {children}
    </ViewComponent>
  );
};
