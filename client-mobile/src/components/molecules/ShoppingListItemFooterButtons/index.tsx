import { IconName } from "@client/components/atoms/Icon/@types"
import { Button } from "@client/components/molecules/Button"
import { ButtonSize, ButtonVariant } from "@client/components/molecules/Button/@types"
import { IShoppingListItemFooterButtonsProps } from "@client/components/molecules/ShoppingListItemFooterButtons/@types"
import { shoppingListItemFooterButtonsDefaultStyle } from "@client/components/molecules/ShoppingListItemFooterButtons/styles"
import { View } from "dripsy"

export const ShoppingListItemFooterButtons: React.FC<IShoppingListItemFooterButtonsProps> = ({
  onAddGroceryButtonClick,
  onRecipeButtonClick,
}) => {
  const { button, recipeButton, wrapper } = shoppingListItemFooterButtonsDefaultStyle

  return (
    <View sx={wrapper}>
      <Button
        iconName={IconName.Plus}
        text="Recipe"
        variant={ButtonVariant.GreenSecondary}
        size={ButtonSize.LargeFixed}
        sx={recipeButton}
        disabled
        onPress={onRecipeButtonClick}
      />
      <Button
        iconName={IconName.Plus}
        text="Add grocery item"
        size={ButtonSize.LargeFixed}
        sx={button}
        onPress={onAddGroceryButtonClick}
      />
    </View>
  )
}
