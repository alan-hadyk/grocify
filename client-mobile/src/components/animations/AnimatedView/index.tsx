import { IAnimatedViewProps } from "@client/components/animations/AnimatedView/@types"
import { StyledMotiView } from "@client/components/animations/StyledMotiView"
import { AnimatePresence } from "moti"
import React, { forwardRef } from "react"
import { Pressable, View } from "react-native"

const _AnimatedView: React.ForwardRefRenderFunction<View, IAnimatedViewProps> = (
  { children, onPress, animate, exitTransition, from, transition, sx },
  ref,
) => (
  <Pressable onPress={onPress} ref={ref}>
    <AnimatePresence>
      <StyledMotiView
        animate={animate}
        exitTransition={exitTransition}
        from={from}
        transition={transition}
        sx={sx}>
        {children}
      </StyledMotiView>
    </AnimatePresence>
  </Pressable>
)

export const AnimatedView = forwardRef(_AnimatedView)
