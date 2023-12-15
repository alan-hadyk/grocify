import { IUseExpandableInputState } from "@client/components/molecules/ExpandableInput/@types"
import { useLayoutMeasurements } from "@client/hooks/useLayoutMeasurements"
import { useCallback, useEffect, useRef, useState } from "react"
import { TextInput, View } from "react-native"
import { useClickOutside } from "react-native-click-outside"

export const useExpandableInputState = ({ value, onChangeText }: IUseExpandableInputState) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const inputRef = useRef<TextInput>(null)

  const focusInput = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  const openInput = useCallback(() => {
    if (!isOpen) {
      setIsOpen(true)
    }
  }, [isOpen])

  const closeInput = () => {
    if (value.trim() === "") {
      setIsOpen(false)
    }
  }

  const clearInput = () => {
    onChangeText("")
  }

  const animatedViewRef = useClickOutside<View>(closeInput)
  const { width: animatedContainerWidth, onLayout } = useLayoutMeasurements()

  useEffect(() => {
    if (value) {
      focusInput()
      openInput()
    }
  }, [value, focusInput, openInput])

  return {
    animatedContainerWidth,
    animatedViewRef,
    clearInput,
    closeInput,
    focusInput,
    inputRef,
    isOpen,
    onLayout,
    openInput,
  }
}
