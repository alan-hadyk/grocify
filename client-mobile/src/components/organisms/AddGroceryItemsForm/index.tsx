import { IconName } from "@client/components/atoms/Icon/@types"
import { Banner } from "@client/components/molecules/Banner"
import { Button } from "@client/components/molecules/Button"
import { ButtonSize } from "@client/components/molecules/Button/@types"
import { IAddGroceryItemsFormProps } from "@client/components/organisms/AddGroceryItemsForm/@types"
import { GroceryItemsHeader } from "@client/components/organisms/AddGroceryItemsForm/sections/GroceryItemsHeader"
import { addGroceryItemsFormDefaultStyles } from "@client/components/organisms/AddGroceryItemsForm/styles"
import { View } from "dripsy"
import { useState } from "react"

export const AddGroceryItemsForm: React.FC<IAddGroceryItemsFormProps> = ({
  onSubmit: onAddGroceryButtonClick,
}) => {
  const [nameValue, onSetNameValue] = useState<string>("")
  const [unitValue, onSetUnitValue] = useState<string>("")

  const { outerWrapper, wrapper } = addGroceryItemsFormDefaultStyles

  return (
    <View sx={outerWrapper}>
      <View sx={wrapper}>
        <GroceryItemsHeader
          nameValue={nameValue}
          onSetNameValue={onSetNameValue}
          unitValue={unitValue}
          onSetUnitValue={onSetUnitValue}
        />
        <Banner text="Type a name and unit to add your first grocery item." />
      </View>
      <Button
        iconName={IconName.Plus}
        text="Add grocery items"
        size={ButtonSize.LargeFixed}
        disabled
        onPress={onAddGroceryButtonClick}
      />
    </View>
  )
}
