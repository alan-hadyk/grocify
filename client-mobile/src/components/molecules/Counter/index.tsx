import { IconName } from "@client/components/atoms/Icon/@types"
import { ICounterProps } from "@client/components/molecules/Counter/@types"
import { counterDefaultStyles } from "@client/components/molecules/Counter/styles"
import { IconButton } from "@client/components/molecules/IconButton"
import { IconButtonSize, IconButtonVariant } from "@client/components/molecules/IconButton/@types"
import { Input } from "@client/components/molecules/Input"
import { Pressable } from "dripsy"

export const Counter: React.FC<ICounterProps> = ({ value, onChange, disabled, onBlur }) => {
  const valueAsNumber = Number(value)

  const onPressDecrease = () => {
    if (valueAsNumber > 1) {
      onChange(String(valueAsNumber - 1))
    }
  }

  const onPressIncrease = () => {
    onChange(String(valueAsNumber + 1))
  }

  const handleBlur = () => {
    if (valueAsNumber <= 1) {
      onBlur("1")
    }
  }

  const { wrapper } = counterDefaultStyles

  return (
    <Pressable sx={wrapper}>
      <IconButton
        iconName={IconName.Decrease}
        size={IconButtonSize.Medium}
        variant={IconButtonVariant.GraySecondary}
        disabled={valueAsNumber <= 1 || disabled}
        onPress={onPressDecrease}
      />
      <Input
        inputType="number"
        value={value}
        sx={{
          minWidth: 50,
        }}
        onChangeText={onChange}
        disabled={disabled}
        onBlur={handleBlur}
      />
      <IconButton
        iconName={IconName.Increase}
        size={IconButtonSize.Medium}
        variant={IconButtonVariant.GraySecondary}
        onPress={onPressIncrease}
      />
    </Pressable>
  )
}
