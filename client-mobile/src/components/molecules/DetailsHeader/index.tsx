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
        <IconButton
          iconName={IconName.Remove}
          size={IconButtonSize.Medium}
          variant={IconButtonVariant.RedSecondary}
          disabled
        />
        <Button
          iconName={IconName.Copy}
          text="Collab"
          variant={ButtonVariant.BlueSecondary}
          size={ButtonSize.LargeFixed}
          iconPlacement={ButtonIconPlacement.Left}
          disabled
        />
        <IconButton
          iconName={IconName.Reuse}
          size={IconButtonSize.Medium}
          variant={IconButtonVariant.GreenSecondary}
          disabled
        />
      </View>
    </View>
  )
}
