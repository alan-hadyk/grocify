import { useCreateIngredient } from "@client/api/mutations/useCreateIngredient"
import { useCreateUnit } from "@client/api/mutations/useCreateUnit"
import { useUpdateShoppingList } from "@client/api/mutations/useUpdateShoppingList"
import { useIngredients } from "@client/api/queries/useIngredients"
import { useShoppingList } from "@client/api/queries/useShoppingList"
import { useUnits } from "@client/api/queries/useUnits"
import { Unit, UpdateShoppingListInput } from "@client/api/schema"
import { IAddIngredientFormData } from "@client/components/molecules/AddIngredientForm/@types"
import { TMultiSelectFieldItemType } from "@client/components/molecules/MultiSelectField/@types"
import { useModalContext } from "@client/containers/ShoppingListItemContainer/provider"
import { ITranslation } from "@client/translations/@types"
import { useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react"

export const useUpdateGroceryItemsModalState = () => {
  const { isModalOpen, setIsModalOpen } = useModalContext()

  const onModalClose = () => {
    setIsModalOpen(false)
  }

  const { id: shoppingListId } = useLocalSearchParams()

  const { data: shoppingList, isLoading: isLoadingShoppingList } = useShoppingList({
    id: shoppingListId as string | undefined,
  })
  const { data: units, isLoading: isLoadingUnits, refetch: refetchUnits } = useUnits()
  const {
    data: ingredients,
    isLoading: isLoadingIngredients,
    refetch: refetchIngredients,
  } = useIngredients()

  const { isPending: isCreatingIngredient, mutateAsync: createIngredient } = useCreateIngredient({
    onSuccess: () => {
      refetchIngredients()
    },
  })
  const { isPending: isCreatingUnit, mutateAsync: createUnit } = useCreateUnit({
    onSuccess: () => {
      refetchUnits()
    },
  })
  const { isPending: isUpdatingShoppingList, mutate: updateShoppingList } = useUpdateShoppingList({
    onSuccess: onModalClose,
  })

  const [unitsMap, setUnitsMap] = useState<Map<Unit["name"], Unit>>()

  useEffect(() => {
    const _unitsMap = new Map()
    units?.forEach((unit) => {
      _unitsMap.set(unit.name.toLowerCase(), unit)
    })

    setUnitsMap(_unitsMap)
  }, [units])

  const addIngredient = async (
    { name, unit }: IAddIngredientFormData,
    unshiftIngredientInFormIngredients: (ingredient: TMultiSelectFieldItemType) => void,
  ) => {
    let ingredientUnit = unit ? unitsMap?.get(unit.toLowerCase()) : undefined

    try {
      if (!ingredientUnit && unit) {
        ingredientUnit = await createUnit({ name: unit })
      }

      const ingredient = await createIngredient({ name, unit: ingredientUnit?.id })

      unshiftIngredientInFormIngredients({
        id: ingredient.id,
        isSelected: true,
        quantity: 1,
        text: ingredient.unit?.name ? "ingredientNameWithUnit" : "ingredientName",
        textValues: {
          name: ingredient.name,
          unit: ingredient.unit?.name || "",
        },
      })
    } catch (err) {
      const error = err as Error
      const errorMessage: keyof ITranslation["errors"] =
        "There was a problem with adding a new ingredient"
      error.message = errorMessage

      throw error
    }
  }

  const updateGroceryItems = (data: Pick<UpdateShoppingListInput, "ingredients">) => {
    if (!shoppingListId || Array.isArray(shoppingListId)) return

    updateShoppingList({
      id: shoppingListId,
      ...data,
    })
  }

  const areIngredientsInShoppingList =
    Array.isArray(shoppingList?.ingredients) && shoppingList.ingredients.length > 0

  return {
    addIngredient,
    areIngredientsInShoppingList,
    ingredients,
    isCreatingIngredient,
    isCreatingUnit,
    isLoadingIngredients,
    isLoadingShoppingList,
    isLoadingUnits,
    isModalOpen,
    isUpdatingShoppingList,
    onModalClose,
    shoppingList,
    units,
    updateGroceryItems,
  }
}
