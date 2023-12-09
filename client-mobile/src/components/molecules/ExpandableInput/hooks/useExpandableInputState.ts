import { IUseExpandableInputState } from "@client/components/molecules/ExpandableInput/@types"
import { useMeasureElement } from "@client/hooks/useMeasureElement"
import { useCallback, useEffect, useRef, useState } from "react"
import { TextInput as RnTextInput, View as RnView } from "react-native"
import { useClickOutside } from "react-native-click-outside"

export const useExpandableInputState = ({ value, onChangeText }: IUseExpandableInputState) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

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
  const { width: animatedContainerWidth } = useMeasureElement(animatedViewRef)

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
