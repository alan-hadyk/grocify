import { IUseExpandableInputState } from "@client/components/molecules/ExpandableInput/@types/ExpandableInput"
import { useRef, useState } from "react"
import { TextInput as RnTextInput, View as RnView } from "react-native"
import { useClickOutside } from "react-native-click-outside"

export const useExpandableInputState = ({ value, onChangeText }: IUseExpandableInputState) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const inputRef = useRef<RnTextInput>(null)
  const ref = useClickOutside<RnView>(() => {
    if (value.trim() === "") {
      setIsOpen(false)
    }
  })

  const focusInput = () => {
    inputRef.current?.focus()
  }

  const openInput = () => {
    if (!isOpen) {
      onChangeText("")
      setIsOpen(true)
    }
  }

  const [containerWidth, setContainerWidth] = useState<number>(0)
  ref.current?.measure((x, y, width) => {
    setContainerWidth(width)
  })

  return {
    containerWidth,
    focusInput,
    inputRef,
    isOpen,
    openInput,
    ref,
  }
}
