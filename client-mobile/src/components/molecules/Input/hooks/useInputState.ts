import { IUseInputState } from "@client/components/molecules/Input/@types"
import { useLayoutMeasurements } from "@client/hooks/useLayoutMeasurements"
import { useCallback, useRef } from "react"
import { KeyboardTypeOptions, TextInput, View } from "react-native"
import { useClickOutside } from "react-native-click-outside"

export const useInputState = ({ onChangeText, inputType }: IUseInputState) => {
  const inputRef = useRef<TextInput>(null)

  const { width: wrapperWidth, onLayout } = useLayoutMeasurements()

  const focusInput = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  const clearInput = () => {
    onChangeText("")
  }

  const wrapperRef = useClickOutside<View>(() => {
    inputRef.current?.blur()
  })

  const getKeyboardType = (inputType: string | undefined): KeyboardTypeOptions => {
    switch (inputType) {
      case "number":
        return "numeric"
      case "text":
      default:
        return "default"
    }
  }

  const keyboardType = getKeyboardType(inputType)

  return {
    clearInput,
    focusInput,
    inputRef,
    keyboardType,
    onLayout,
    wrapperRef,
    wrapperWidth,
  }
}
