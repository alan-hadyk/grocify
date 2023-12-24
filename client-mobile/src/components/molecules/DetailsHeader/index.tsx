import { IconName } from "@client/components/atoms/Icon/@types"
import { Button } from "@client/components/molecules/Button"
import {
  ButtonIconPlacement,
  ButtonSize,
  ButtonVariant,
} from "@client/components/molecules/Button/@types"
import { detailsHeaderDefaultStyles } from "@client/components/molecules/DetailsHeader/styles"
import { IconButton } from "@client/components/molecules/IconButton"
import { IconButtonSize, IconButtonVariant } from "@client/components/molecules/IconButton/@types"
import { Path } from "@client/routing/paths"
import { View } from "dripsy"
import { router } from "expo-router"

export const DetailsHeader: React.FC = () => {
  const onBackButtonClick = () =>
    router.push({
      pathname: Path.ShoppingLists,
    })

  const { buttonWrapper, wrapper } = detailsHeaderDefaultStyles

  return (
    <View sx={wrapper}>
      <IconButton
        iconName={IconName.ArrowLeft}
        size={IconButtonSize.Medium}
        variant={IconButtonVariant.GreenPrimary}
        onPress={onBackButtonClick}
      />
      <View sx={buttonWrapper}>
        <Button
          iconName={IconName.Remove}
          text="Delete"
          variant={ButtonVariant.RedSecondary}
          size={ButtonSize.SmallFixed}
          iconPlacement={ButtonIconPlacement.Left}
          disabled
        />
        <Button
          iconName={IconName.Copy}
          text="Collaborate"
          variant={ButtonVariant.BlueSecondary}
          size={ButtonSize.SmallFixed}
          iconPlacement={ButtonIconPlacement.Left}
          disabled
        />
        <Button
          iconName={IconName.Reuse}
          text="Reuse"
          variant={ButtonVariant.GreenSecondary}
          size={ButtonSize.SmallFixed}
          iconPlacement={ButtonIconPlacement.Left}
          disabled
        />
      </View>
    </View>
  )
}
