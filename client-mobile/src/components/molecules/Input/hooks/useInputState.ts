import { IUseInputState } from "@client/components/molecules/Input/@types"
import { useLayoutMeasurements } from "@client/hooks/useLayoutMeasurements"
import { useCallback, useRef } from "react"
import { TextInput, View } from "react-native"
import { useClickOutside } from "react-native-click-outside"

export const useInputState = ({ onChangeText }: IUseInputState) => {
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

  return {
    clearInput,
    focusInput,
    inputRef,
    onLayout,
    wrapperRef,
    wrapperWidth,
  }
}
