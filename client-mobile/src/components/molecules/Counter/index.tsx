import { IconName } from "@client/components/atoms/Icon/@types"
import { counterDefaultStyles } from "@client/components/molecules/Counter/styles"
import { IconButton } from "@client/components/molecules/IconButton"
import { IconButtonSize, IconButtonVariant } from "@client/components/molecules/IconButton/@types"
import { InputField } from "@client/components/molecules/InputField"
import { View } from "dripsy"
import { useForm } from "react-hook-form"

export const Counter: React.FC = () => {
  const { control, setValue, watch } = useForm({
    defaultValues: {
      count: "1",
    },
  })

  const currentCount = watch("count")
  const currentCountAsNumber = Number(currentCount)

  const onPressDecrease = () => {
    if (currentCountAsNumber > 0) {
      setValue("count", String(currentCountAsNumber - 1))
    }
  }

  const onPressIncrease = () => {
    setValue("count", String(currentCountAsNumber + 1))
  }

  const { wrapper } = counterDefaultStyles
  console.log("Current count value:", watch("count"))

  return (
    <View sx={wrapper}>
      <IconButton
        iconName={IconName.Decrease}
        size={IconButtonSize.Medium}
        variant={IconButtonVariant.GraySecondary}
        // sx={iconButton}
        disabled={currentCountAsNumber <= 1}
        onPress={onPressDecrease}
      />
      <InputField
        control={control}
        name="count"
        inputType="number"
        sx={{
          minWidth: 50,
        }}
      />
      <IconButton
        iconName={IconName.Increase}
        size={IconButtonSize.Medium}
        variant={IconButtonVariant.GraySecondary}
        // sx={iconButton}
        onPress={onPressIncrease}
      />
    </View>
  )
}
