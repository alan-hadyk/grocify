import { IconName } from "@client/components/atoms/Icon/@types/Icon"
import { Icon } from "@client/components/atoms/Icon/Icon"
import { Box } from "@client/components/layout/Box/Box"
import { IExpandableInputProps } from "@client/components/molecules/ExpandableInput/@types/ExpandableInput"
import {
  iconButtonDefaultStyles,
  styles,
} from "@client/components/molecules/ExpandableInput/styles"
import React, { useEffect, useRef, useState } from "react"
import { Keyboard, Modal, TextInput, TouchableWithoutFeedback, View } from "react-native"
import { useClickOutside } from "react-native-click-outside"

export const ExpandableInput: React.FC<IExpandableInputProps> = ({ value, onChangeText }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  // const [keyboardDismissed, setKeyboardDismissed] = useState<boolean>(false)
  const inputRef = useRef<TextInput>(null)
  const ref = useClickOutside<View>(() => {
    console.log("clicked outside A")
    if (value.trim() === "") {
      setIsOpen(false)
    }
  })

  // const handleClose = () => {
  //   if (value.trim() === "" && !keyboardDismissed) {
  //     setIsOpen(false)
  //   }
  //   // Reset the keyboard dismissed flag
  //   setKeyboardDismissed(false)
  // }

  const focusInput = () => {
    inputRef.current?.focus()
  }

  // Focus the input after the modal is opened
  // useEffect(() => {
  //   if (isOpen) {
  //     // Add listeners for keyboard hide and show events
  //     const keyboardHideListener = Keyboard.addListener("keyboardDidHide", () => {
  //       setKeyboardDismissed(true)
  //     })

  //     const timer = setTimeout(() => {
  //       focusInput() // Focus the TextInput with a slight delay
  //     }, 100)

  //     return () => {
  //       clearTimeout(timer)
  //       keyboardHideListener.remove()
  //     }
  //   }
  // }, [isOpen, keyboardDismissed])

  return (
    <>
      {!isOpen && (
        <Box {...iconButtonDefaultStyles.wrapper}>
          <Icon
            name={IconName.Search}
            onPress={() => {
              onChangeText("")
              setIsOpen(true)
            }}
          />
        </Box>
      )}
      {isOpen && (
        <>
          <View style={styles.container} ref={ref}>
            <Icon name={IconName.Search} width={40} height={40} />
            <TextInput
              style={styles.input}
              placeholder="Search"
              value={value}
              onChangeText={onChangeText}
              onPressIn={focusInput}
              ref={inputRef}
              onFocus={focusInput}
              // onSubmitEditing={() => {
              //   setKeyboardDismissed(true)
              // }}
              autoFocus
            />
            <Icon
              name={IconName.Clear}
              onPress={() => {
                onChangeText("")
              }}
            />
          </View>
        </>
      )}
    </>
  )
}
