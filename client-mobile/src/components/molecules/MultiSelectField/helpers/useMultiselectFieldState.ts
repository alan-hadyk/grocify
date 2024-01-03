export const calculateUpdatedItems = (items: any, updatedItem: any) => {
  let itemIndex = 0
  let quantity

  const updatedItems = items.map((item: any, index: number) => {
    if (item.id === updatedItem.id) {
      itemIndex = index
      quantity = item.quantity
      return { ...item, ...updatedItem }
    }

    return item
  })

  if (quantity === updatedItem.quantity) {
    const item = updatedItems[itemIndex]
    updatedItems.splice(itemIndex, 1)

    if (item.isSelected) {
      updatedItems.unshift(item)
    } else {
      updatedItems.push(item)
      item.quantity = 1
    }
  }

  return updatedItems
}
