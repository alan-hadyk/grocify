import { IconName } from "@client/components/atoms/Icon/@types/Icon"
import { Box } from "@client/components/layout/Box/Box"
import { ExpandableInput } from "@client/components/molecules/ExpandableInput/ExpandableInput"
import { IconButtonSize } from "@client/components/molecules/IconButton/@types/IconButton"
import { IconButton } from "@client/components/molecules/IconButton/IconButton"
import { useState } from "react"

export const Header: React.FC = () => {
  const [value, setSearchPhrase] = useState<string>("")

  return (
    <Box
      alignItems="center"
      height={40}
      flexWrap="nowrap"
      flexDirection="row"
      paddingTop="16"
      paddingLeft="16"
      paddingRight="16"
      justifyContent="space-between">
      <ExpandableInput value={value} onChangeText={setSearchPhrase} />
      <IconButton iconName={IconName.Bell} size={IconButtonSize.Medium} variant="graySecondary" />
    </Box>
  )
}
