import { StyledKeyboardAvoidingView } from "@client/components/atoms/StyledKeyboardAvoidingView"
import { IModalProps } from "@client/components/molecules/Modal/@types"
import { modalDefaultStyles } from "@client/components/molecules/Modal/styles"
import { SubtitleWithIcon } from "@client/components/molecules/SubtitleWithIcon"
import React from "react"
import { Platform, Modal as RNModal, SafeAreaView } from "react-native"

export const Modal: React.FC<IModalProps> = ({
  children,
  iconName,
  subtitle,
  sx,
  onModalClose,
  isOpen = false,
}) => {
  const { modalContainer, subtitleWithIcon } = modalDefaultStyles

  return (
    <RNModal
      animationType="slide"
      hardwareAccelerated
      presentationStyle="fullScreen"
      visible={isOpen}
      onRequestClose={onModalClose}>
      <SafeAreaView style={{ backgroundColor: "transparent", flex: 1 }}>
        <StyledKeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          sx={modalContainer}>
          <SubtitleWithIcon
            subtitle={subtitle}
            iconName={iconName}
            onIconButtonPress={onModalClose}
            sx={subtitleWithIcon}
          />
          {children}
        </StyledKeyboardAvoidingView>
      </SafeAreaView>
    </RNModal>
  )
}
