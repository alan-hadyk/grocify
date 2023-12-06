import { IconName } from "@client/components/atoms/Icon/@types/Icon"
import { Icon } from "@client/components/atoms/Icon/Icon"
import { IExpandableInputProps } from "@client/components/molecules/ExpandableInput/@types/ExpandableInput"
import { useExpandableInputState } from "@client/components/molecules/ExpandableInput/hooks/useExpandableInputState"
import { useExpandableInputStyles } from "@client/components/molecules/ExpandableInput/hooks/useExpandableInputStyles"
import { ColorPalette } from "@client/theme/@types"
import { styled } from "dripsy"
import { View as MotiView, AnimatePresence } from "moti"
import { TextInput as RnTextInput, Pressable } from "react-native"

const TextInput = styled(RnTextInput)()
const SyledMotiView = styled(MotiView)()

export const ExpandableInput: React.FC<IExpandableInputProps> = ({ value, onChangeText }) => {
  const { closeIconStyles, searchIconStyles, inputStyles, mainContainerStyles, screenWidth } =
    useExpandableInputStyles({ value })

  const { containerWidth, focusInput, isOpen, openInput, inputRef, ref } = useExpandableInputState({
    onChangeText,
    value,
  })

  return (
    <Pressable onPress={openInput} ref={ref}>
      <AnimatePresence>
        <SyledMotiView
          animate={{
            borderColor: isOpen ? ColorPalette.Black400 : ColorPalette.Gray100,
            borderRadius: isOpen ? 20 : 50,
            width: isOpen ? screenWidth - 88 : 40,
          }}
          exitTransition={{
            duration: 300,
            type: "timing",
          }}
          from={{
            borderColor: ColorPalette.Gray100,
            borderRadius: 50,
            width: 40,
          }}
          transition={{
            duration: 300,
            type: "timing",
          }}
          sx={mainContainerStyles}>
          <Icon name={IconName.Search} onPress={openInput} svgProps={searchIconStyles} />
          {isOpen && (
            <>
              <TextInput
                placeholder="Search"
                value={value}
                onChangeText={onChangeText}
                onPressIn={focusInput}
                ref={inputRef}
                onFocus={focusInput}
                autoFocus
                sx={{
                  ...inputStyles,
                  width: containerWidth - 72,
                }}
              />
              <Icon
                name={IconName.Clear}
                onPress={() => {
                  onChangeText("")
                }}
                svgProps={closeIconStyles}
              />
            </>
          )}
        </SyledMotiView>
      </AnimatePresence>
    </Pressable>
  )
}
