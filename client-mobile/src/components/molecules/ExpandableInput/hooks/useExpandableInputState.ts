import { IUseExpandableInputState } from "@client/components/molecules/ExpandableInput/@types/ExpandableInput"
import { useCallback, useEffect, useRef, useState } from "react"
import { TextInput as RnTextInput, View as RnView } from "react-native"
import { useClickOutside } from "react-native-click-outside"

export const useExpandableInputState = ({ value, onChangeText }: IUseExpandableInputState) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [animatedContainerWidth, setAnimatedContainerWidth] = useState<number>(0)

  const inputRef = useRef<RnTextInput>(null)

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

  const animatedViewRef = useClickOutside<RnView>(closeInput)

  animatedViewRef.current?.measure((_x, _y, width) => {
    setAnimatedContainerWidth(width)
  })

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
    openInput,
  }
}
