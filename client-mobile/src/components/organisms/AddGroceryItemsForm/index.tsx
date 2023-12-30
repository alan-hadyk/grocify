import { IconName } from "@client/components/atoms/Icon/@types"
import { AddGroceryItemForm } from "@client/components/molecules/AddGroceryItemForm"
import { Banner } from "@client/components/molecules/Banner"
import { Button } from "@client/components/molecules/Button"
import { ButtonSize } from "@client/components/molecules/Button/@types"
import { MultiSelect } from "@client/components/molecules/MultiSelect"
import { IAddGroceryItemsFormProps } from "@client/components/organisms/AddGroceryItemsForm/@types"
import { addGroceryItemsFormDefaultStyles } from "@client/components/organisms/AddGroceryItemsForm/styles"
import { View } from "dripsy"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"

export const AddGroceryItemsForm: React.FC<IAddGroceryItemsFormProps> = ({
  onAddGroceryItems,
  onAddIngredient,
}) => {
  const { handleSubmit } = useForm()

  const { t } = useTranslation()
  const { outerWrapper, wrapper } = addGroceryItemsFormDefaultStyles

  return (
    <View sx={outerWrapper}>
      <View sx={wrapper}>
        <AddGroceryItemForm onAddIngredient={onAddIngredient} />
        <Banner text="Type a name and unit to add your first grocery item." />
        <MultiSelect
          items={[
            {
              id: "123213235544",
              isSelected: true,
              text: t("unitWithName", { name: "onion", unit: "pcs" }),
            },
            {
              id: "1232454534",
              isSelected: false,
              text: t("ingredientName", { name: "tomato" }),
            },
            {
              id: "12343434",
              isSelected: true,
              text: t("ingredientName", { name: "milk" }),
            },
          ]}
          onSelectItem={() => {}}
        />
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
