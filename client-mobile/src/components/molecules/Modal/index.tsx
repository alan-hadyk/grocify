import { AnimatedView } from "@client/components/animations/AnimatedView"
import { IAnimatedViewProps } from "@client/components/animations/AnimatedView/@types"
import { IModalProps } from "@client/components/molecules/Modal/@types"
import { modalDefaultStyles } from "@client/components/molecules/Modal/styles"
import { SubtitleWithIcon } from "@client/components/molecules/SubtitleWithIcon"
import { useLayoutMeasurements } from "@client/hooks/useLayoutMeasurements"
import { useScreenDimensions } from "@client/hooks/useScreenDimensions"
import { Duration } from "@client/theme/@types"
import { View } from "dripsy"
import { View as ReactView } from "react-native"
import { useClickOutside } from "react-native-click-outside"

export const Modal: React.FC<IModalProps> = ({
  children,
  iconName,
  subtitle,
  sx,
  onModalClose,
  isOpen = false,
}) => {
  const { screenHeight } = useScreenDimensions()

  const { animatedWrapper, wrapper, subtitleWithIcon } = modalDefaultStyles({ screenHeight })

  const wrapperStyles = {
    ...wrapper,
    ...sx,
  }

  const getAnimatedViewProps = ({
    isOpen,
    screenHeight,
  }: {
    isOpen: boolean
    screenHeight: number
  }) => ({
    animate: {
      // height: isOpen ? screenHeight : 0,
      translateY: isOpen ? 0 : screenHeight,
    } as IAnimatedViewProps["animate"],
    exitTransition: {
      duration: Duration.VerySlow,
      type: "timing",
    } as IAnimatedViewProps["exitTransition"],
    from: {
      // height: 0,
      translateY: screenHeight,
    } as IAnimatedViewProps["from"],
    to: {
      translateY: 0,
    },
    transition: {
      duration: Duration.VerySlow,
      type: "timing",
    } as IAnimatedViewProps["transition"],
  })

  const animatedViewRef = useClickOutside<ReactView>(onModalClose)
  const { onLayout } = useLayoutMeasurements()

  return (
    isOpen && (
      <AnimatedView
        {...getAnimatedViewProps({ isOpen, screenHeight })}
        sx={wrapperStyles}
        // onPress={openInput}
        ref={animatedViewRef}
        onLayout={onLayout}
        isVisible={isOpen}>
        <View sx={animatedWrapper}>
          <SubtitleWithIcon
            subtitle={subtitle}
            iconName={iconName}
            onIconButtonPress={onModalClose}
            sx={subtitleWithIcon}
          />
          {children}
        </View>
      </AnimatedView>
    )
  )
}
