import { AnimatedView } from "@client/components/animations/AnimatedView"
import { Icon } from "@client/components/atoms/Icon"
import { IconName } from "@client/components/atoms/Icon/@types"
import { IExpandableInputProps } from "@client/components/molecules/ExpandableInput/@types"
import { useExpandableInputState } from "@client/components/molecules/ExpandableInput/hooks/useExpandableInputState"
import { useExpandableInputStyles } from "@client/components/molecules/ExpandableInput/hooks/useExpandableInputStyles"
import {
  expandableInputDefaultStyles,
  getAnimatedViewProps,
} from "@client/components/molecules/ExpandableInput/styles"
import { ColorPalette } from "@client/theme/@types"
import { TextInput } from "dripsy"
import React, { Fragment } from "react"
import { useTranslation } from "react-i18next"

export const ExpandableInput: React.FC<IExpandableInputProps> = ({
  iconName = IconName.Search,
  value,
  onChangeText,
  placeholder = "Search...",
}) => {
  const {
    clearInput,
    animatedContainerWidth,
    focusInput,
    isOpen,
    openInput,
    inputRef,
    animatedViewRef,
    onLayout,
  } = useExpandableInputState({
    onChangeText,
    value,
  })

  const { closeIconStyles, inputStyles, screenWidth } = useExpandableInputStyles({
    animatedContainerWidth,
    value,
  })
  const { t } = useTranslation()

  return (
    <AnimatedView
      {...getAnimatedViewProps({ isOpen, screenWidth })}
      sx={expandableInputDefaultStyles.mainContainer}
      onPress={openInput}
      ref={animatedViewRef}
      onLayout={onLayout}>
      <Icon
        name={iconName}
        onPress={openInput}
        {...expandableInputDefaultStyles.mainIcon}
        key="mainIcon"
      />
      {isOpen && (
        <Fragment key="input">
          <TextInput
            placeholder={t(placeholder)}
            placeholderTextColor={ColorPalette.Gray400}
            value={value}
            onChangeText={onChangeText}
            onPressIn={focusInput}
            ref={inputRef}
            onFocus={focusInput}
            autoFocus
            sx={inputStyles}
          />
          <Icon name={IconName.Close} onPress={clearInput} {...closeIconStyles} />
        </Fragment>
      )}
    </AnimatedView>
  )
}
