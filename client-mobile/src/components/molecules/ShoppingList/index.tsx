import { IconName } from "@client/components/atoms/Icon/@types"
import { DateHeader } from "@client/components/molecules/DateHeader"
import { DetailsHeader } from "@client/components/molecules/DetailsHeader"
import { EmptyResult } from "@client/components/molecules/EmptyResult"
import { IShoppingList } from "@client/components/molecules/ShoppingList/@types"
import { shoppingListDefaultStyles } from "@client/components/molecules/ShoppingList/styles"
import { View } from "dripsy"

export const ShoppingList: React.FC<IShoppingList> = ({ date }) => {
  const { wrapper } = shoppingListDefaultStyles

  return (
    <View sx={wrapper}>
      <DetailsHeader />
      <DateHeader date={date} />
      <EmptyResult iconName={IconName.Burger} description="Grocery items will appear here" />
    </View>
  )
}
