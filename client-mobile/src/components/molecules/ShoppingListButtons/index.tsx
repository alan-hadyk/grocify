import { IconName } from "@client/components/atoms/Icon/@types"
import { Button } from "@client/components/molecules/Button"
import { ButtonSize, ButtonVariant } from "@client/components/molecules/Button/@types"
import { shoppingListButtonsDefaultStyles } from "@client/components/molecules/ShoppingListButtons/styles"
import { View } from "dripsy"

export const ShoppingListButtons: React.FC = () => {
  const { button, recipeButton, wrapper } = shoppingListButtonsDefaultStyles

  return (
    <View sx={wrapper}>
      <Button
        iconName={IconName.Plus}
        text="Recipe"
        variant={ButtonVariant.GreenSecondary}
        size={ButtonSize.LargeFixed}
        sx={recipeButton}
        disabled
      />
      <Button
        iconName={IconName.Plus}
        text="Add grocery item"
        size={ButtonSize.LargeFixed}
        sx={button}
        disabled
      />
    </View>
  )
}
