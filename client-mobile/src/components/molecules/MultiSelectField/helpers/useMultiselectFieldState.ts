export const calculateUpdatedItems = (items: any, updatedItem: any) => {
  let itemIndex = 0
  let quantity
  let numberOfSelectedItems = 0

  const updatedItems = items.map((item: any, index: number) => {
    if (item.id === updatedItem.id) {
      itemIndex = index
      quantity = item.quantity

      return { ...item, ...updatedItem }
    }

    if (item.isSelected) {
      numberOfSelectedItems++
    }
    return item
  })

  if (quantity === updatedItem.quantity) {
    const item = updatedItems[itemIndex]
    updatedItems.splice(itemIndex, 1)

    if (item.isSelected) {
      item.quantity = 1
      updatedItems.unshift(item)
    } else {
      item.quantity = 0
      updatedItems.splice(numberOfSelectedItems, 0, item)
    }
  }

  return updatedItems
}
