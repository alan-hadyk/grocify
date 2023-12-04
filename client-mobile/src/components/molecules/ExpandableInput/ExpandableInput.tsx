import { IconName } from "@client/components/atoms/Icon/@types/Icon"
import { Icon } from "@client/components/atoms/Icon/Icon"
import { IExpandableInputProps } from "@client/components/molecules/ExpandableInput/@types/ExpandableInput"
import { useExpandableInputStyles } from "@client/hooks/useExpandableInputStyles"
import React, { useRef, useState } from "react"
import { TextInput, View, Animated } from "react-native"
import { useClickOutside } from "react-native-click-outside"

export const ExpandableInput: React.FC<IExpandableInputProps> = ({ value, onChangeText }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  // const animation = useRef(new Animated.Value(0)).current
  const inputRef = useRef<TextInput>(null)
  const ref = useClickOutside<View>(() => {
    if (value.trim() === "") {
      setIsOpen(false)
    }
  })

  const focusInput = () => {
    inputRef.current?.focus()
  }

  const { closeIconStyles, searchIconStyles, inputStyles, mainContainerStyles } =
    useExpandableInputStyles({ isOpen })

  // useEffect(() => {
  //   // Animate the opening and closing of the search input
  //   Animated.timing(animation, {
  //     duration: 300, // Animation can take 300 milliseconds
  //     toValue: isOpen ? 1 : 0, // Animate to 1 if open, 0 if closed
  //     useNativeDriver: false, // Width is not supported by native driver
  //   }).start()
  // }, [isOpen])

  // // Interpolate width from the animation value
  // const width = animation.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ["40px", "80%"], // Change '100%' to the full width of your input
  // })

  return (
    <View {...mainContainerStyles} ref={ref}>
      {!isOpen && (
        <Icon
          name={IconName.Search}
          onPress={() => {
            onChangeText("")
            setIsOpen(true)
          }}
          {...searchIconStyles}
        />
      )}
      {isOpen && (
        <>
          <Icon name={IconName.Search} width={40} height={40} />
          <TextInput
            placeholder="Search"
            value={value}
            onChangeText={onChangeText}
            onPressIn={focusInput}
            ref={inputRef}
            onFocus={focusInput}
            autoFocus
            {...inputStyles}
          />
          <Icon
            name={IconName.Clear}
            onPress={() => {
              onChangeText("")
            }}
            {...closeIconStyles}
          />
        </>
      )}
    </View>
  )
}
