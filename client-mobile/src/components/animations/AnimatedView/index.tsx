import { IAnimatedViewProps } from "@client/components/animations/AnimatedView/@types"
import { StyledMotiView } from "@client/components/animations/StyledMotiView"
import { AnimatePresence } from "moti"
import React, { forwardRef } from "react"
import { Pressable, View } from "react-native"

const _AnimatedView: React.ForwardRefRenderFunction<View, IAnimatedViewProps> = (
  {
    children,
    onPress,
    animate,
    exit,
    exitTransition,
    from,
    isVisible = true,
    transition,
    sx,
    onLayout,
  },
  ref,
) => (
  <Pressable onPress={onPress} ref={ref}>
    <AnimatePresence>
      {isVisible && (
        <StyledMotiView
          animate={animate}
          exit={exit}
          exitTransition={exitTransition}
          from={from}
          transition={transition}
          sx={sx}
          onLayout={onLayout}>
          {children}
        </StyledMotiView>
      )}
    </AnimatePresence>
  </Pressable>
)

export const AnimatedView = forwardRef(_AnimatedView)
