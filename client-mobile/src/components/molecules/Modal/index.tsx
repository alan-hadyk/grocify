import { IModalProps } from "@client/components/molecules/Modal/@types"
import { modalDefaultStyles } from "@client/components/molecules/Modal/styles"
import { SubtitleWithIcon } from "@client/components/molecules/SubtitleWithIcon"
import { View } from "dripsy"

export const Modal: React.FC<IModalProps> = ({
  children,
  iconName,
  subtitle,
  sx,
  onModalClose,
  isOpen = false,
}) => {
  const { wrapper } = modalDefaultStyles

  const wrapperStyles = {
    ...wrapper,
    ...sx,
  }

  return (
    isOpen && (
      <View sx={wrapperStyles}>
        <SubtitleWithIcon
          subtitle={subtitle}
          iconName={iconName}
          onIconButtonPress={onModalClose}
        />
        {children}
      </View>
    )
  )
}
