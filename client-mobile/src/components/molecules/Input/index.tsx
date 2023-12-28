import { Icon } from "@client/components/atoms/Icon"
import { IconName } from "@client/components/atoms/Icon/@types"
import { Typography } from "@client/components/atoms/Typography"
import { TypographyVariant } from "@client/components/atoms/Typography/@types"
import { IInputProps } from "@client/components/molecules/Input/@types"
import { useInputState } from "@client/components/molecules/Input/hooks/useInputState"
import { closeIconStyles, inputStyles } from "@client/components/molecules/Input/styles"
import { ColorPalette } from "@client/theme/@types"
import { TextInput, View } from "dripsy"
import React from "react"
import { useTranslation } from "react-i18next"

export const Input: React.FC<IInputProps> = ({
  autoFocus = false,
  value,
  onChangeText,
  placeholder,
  label,
  iconName,
  sx,
}) => {
  const { clearInput, focusInput, inputRef, onLayout, wrapperRef, wrapperWidth } = useInputState({
    onChangeText,
  })

  const {
    input,
    inputWrapper,
    label: labelStyles,
    wrapper,
    outerWrapper,
  } = inputStyles({ wrapperWidth })

  const { t } = useTranslation()

  const outerWrapperStyles = {
    ...outerWrapper,
    ...sx,
  }

  return (
    <View sx={outerWrapperStyles}>
      {label && <Typography sx={labelStyles} text={label} variant={TypographyVariant.InputLabel} />}
      <View onLayout={onLayout} sx={wrapper} ref={wrapperRef}>
        <View sx={inputWrapper}>
          <Icon name={iconName} size={20} color={ColorPalette.Black400} />

          <TextInput
            placeholder={t(placeholder)}
            placeholderTextColor={ColorPalette.Gray400}
            value={value}
            onChangeText={onChangeText}
            onPressIn={focusInput}
            ref={inputRef}
            onFocus={focusInput}
            autoFocus={autoFocus}
            sx={input}
          />
        </View>
        <Icon
          name={IconName.Close}
          onPress={clearInput}
          size={20}
          color={ColorPalette.Black400}
          style={closeIconStyles({ value })}
        />
      </View>
    </View>
  )
}
