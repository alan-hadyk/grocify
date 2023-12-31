import { Icon } from "@client/components/atoms/Icon"
import { IconName } from "@client/components/atoms/Icon/@types"
import { InputMessage } from "@client/components/atoms/InputMessage"
import { InputMessageColor } from "@client/components/atoms/InputMessage/@types"
import { IInputProps } from "@client/components/molecules/Input/@types"
import { useInputState } from "@client/components/molecules/Input/hooks/useInputState"
import { closeIconStyles, inputStyles } from "@client/components/molecules/Input/styles"
import { InputLabel } from "@client/components/molecules/InputLabel"
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
  isRequired = false,
  error,
  info,
  inputType = "text",
  disabled = false,
}) => {
  const { clearInput, focusInput, inputRef, onLayout, wrapperRef, wrapperWidth, keyboardType } =
    useInputState({
      inputType,
      onChangeText,
    })

  const { input, inputWrapper, wrapper, outerWrapper } = inputStyles({ wrapperWidth })

  const { t } = useTranslation()

  const outerWrapperStyles = {
    ...outerWrapper,
    ...sx,
  }

  return (
    <View sx={outerWrapperStyles}>
      {label && <InputLabel label={label} isRequired={isRequired} />}
      <View onLayout={onLayout} sx={wrapper} ref={wrapperRef}>
        <View sx={inputWrapper}>
          {iconName && <Icon name={iconName} size={20} color={ColorPalette.Black400} />}
          <TextInput
            placeholder={placeholder ? t(placeholder) : ""}
            placeholderTextColor={ColorPalette.Gray400}
            value={value}
            onChangeText={onChangeText}
            onPressIn={focusInput}
            ref={inputRef}
            onFocus={focusInput}
            autoFocus={autoFocus}
            sx={input}
            keyboardType={keyboardType}
            editable={disabled}
            selectTextOnFocus={disabled}
          />
        </View>
        {inputType === "text" && (
          <Icon
            name={IconName.Close}
            onPress={clearInput}
            size={20}
            color={ColorPalette.Black400}
            style={closeIconStyles({ value })}
          />
        )}
      </View>
      {error && <InputMessage text={error.message} textValues={error.values} />}
      {info && (
        <InputMessage text={info.message} textValues={info.values} color={InputMessageColor.Info} />
      )}
    </View>
  )
}
