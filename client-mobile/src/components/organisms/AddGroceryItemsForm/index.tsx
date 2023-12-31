import { IconName } from "@client/components/atoms/Icon/@types"
import { AddIngredientForm } from "@client/components/molecules/AddIngredientForm"
import { Banner } from "@client/components/molecules/Banner"
import { Button } from "@client/components/molecules/Button"
import { ButtonSize } from "@client/components/molecules/Button/@types"
import { MultiSelect } from "@client/components/molecules/MultiSelect"
import { IMultiSelectProps } from "@client/components/molecules/MultiSelect/@types"
import { IAddGroceryItemsFormProps } from "@client/components/organisms/AddGroceryItemsForm/@types"
import { addGroceryItemsFormDefaultStyles } from "@client/components/organisms/AddGroceryItemsForm/styles"
import { View } from "dripsy"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"

export const AddGroceryItemsForm: React.FC<IAddGroceryItemsFormProps> = ({
  onAddGroceryItems,
  onAddIngredient,
}) => {
  const { handleSubmit } = useForm()

  const { t } = useTranslation()
  const { outerWrapper, wrapper } = addGroceryItemsFormDefaultStyles

  // TODO remove when backend is ready
  const initialItems = [
    {
      id: "123213235544",
      isSelected: false,
      text: t("unitWithName", { name: "onion", unit: "pcs" }),
    },
    {
      id: "1232454534",
      isSelected: false,
      text: t("ingredientName", { name: "tomato" }),
    },
    {
      id: "12343434",
      isSelected: false,
      text: t("ingredientName", { name: "milk" }),
    },
  ] as IMultiSelectProps["items"]

  const [items, setItems] = useState(initialItems)

  console.log({ items })

  // Function to handle item selection
  const onSelectItem = (selectedId: string) => {
    const newItems = items.map((item) =>
      item.id === selectedId ? { ...item, isSelected: !item.isSelected } : item,
    )
    setItems(newItems)
  }

  return (
    <View sx={outerWrapper}>
      <View sx={wrapper}>
        <AddIngredientForm onAddIngredient={onAddIngredient} />
        <Banner text="Type a name and unit to add your first grocery item." />
        <MultiSelect items={items} onSelectItem={onSelectItem} />
      </View>

      <Button
        iconName={IconName.Plus}
        text="Add grocery items"
        size={ButtonSize.LargeFixed}
        disabled
        onPress={handleSubmit(onAddGroceryItems)}
        sx={{
          marginX: "$16",
        }}
      />
    </View>
  )
}
