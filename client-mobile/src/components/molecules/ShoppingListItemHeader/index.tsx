import { IconName } from "@client/components/atoms/Icon/@types"
import { Button } from "@client/components/molecules/Button"
import {
  ButtonIconPlacement,
  ButtonSize,
  ButtonVariant,
} from "@client/components/molecules/Button/@types"
import { IconButton } from "@client/components/molecules/IconButton"
import { IconButtonSize, IconButtonVariant } from "@client/components/molecules/IconButton/@types"
import { IShoppingListItemHeader } from "@client/components/molecules/ShoppingListItemHeader/@types"
import { shoppingListItemHeaderDefaultStyles } from "@client/components/molecules/ShoppingListItemHeader/styles"
import { Path } from "@client/routing/paths"
import { View } from "dripsy"
import { router } from "expo-router"

export const ShoppingListItemHeader: React.FC<IShoppingListItemHeader> = ({
  onDelete,
  onCollab,
  onReuse,
}) => {
  const onBackButtonPress = () =>
    router.push({
      pathname: Path.ShoppingLists,
    })

  const { buttonWrapper, wrapper } = shoppingListItemHeaderDefaultStyles

  return (
    <View sx={wrapper}>
      <IconButton
        iconName={IconName.ArrowLeft}
        size={IconButtonSize.Medium}
        variant={IconButtonVariant.GreenPrimary}
        onPress={onBackButtonPress}
      />
      <View sx={buttonWrapper}>
        <IconButton
          iconName={IconName.Remove}
          size={IconButtonSize.Medium}
          variant={IconButtonVariant.RedSecondary}
          disabled
          onPress={onDelete}
        />
        <Button
          iconName={IconName.Copy}
          text="Collab"
          variant={ButtonVariant.BlueSecondary}
          size={ButtonSize.LargeFixed}
          iconPlacement={ButtonIconPlacement.Left}
          disabled
          onPress={onCollab}
        />
        <IconButton
          iconName={IconName.Reuse}
          size={IconButtonSize.Medium}
          variant={IconButtonVariant.GreenSecondary}
          disabled
          onPress={onReuse}
        />
      </View>
    </View>
  )
}
