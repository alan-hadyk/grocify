import { CreateIngredientInput, Ingredient } from "@client/api/schema"
import { databaseClient } from "@client/clients/databaseClient"
import "react-native-get-random-values"
import { v4 as uuidv4 } from "uuid"

/**
 * ShoppingListIngredientsModel class provides methods for performing database operations on the shopping_list_ingredients table.
 */
export class ShoppingListIngredientsModel {
  static initSchema = async () =>
    databaseClient.transactionAsync(async (tx) => {
      await tx.executeSqlAsync(`
        CREATE TABLE IF NOT EXISTS shopping_lists_ingredients (
          id TEXT PRIMARY KEY,
          shopping_list_id TEXT NOT NULL,
          category_id TEXT NOT NULL,
          quantity NUMBER NOT NULL,
        );
      `)

      console.log("shopping_list_ingredients table initialized")
    })

  static create = ({ name, unit }: CreateIngredientInput): Promise<Ingredient> =>
    new Promise((resolve, reject) => {
      const id = uuidv4()

      const sql = unit
        ? `
        INSERT
        INTO ingredients (id, name, unit)
        VALUES (?, ?, ?)
        RETURNING *, (SELECT name FROM units WHERE id = unit) as unitName
      `
        : `
        INSERT
        INTO ingredients (id, name)
        VALUES (?, ?)
        RETURNING *
      `

      databaseClient.transaction((tx) => {
        tx.executeSql(
          sql,
          unit ? [id, name, unit] : [id, name],
          (_, result) => {
            const ingredient = result.rows.item(0)

            resolve({
              createdAt: ingredient.created_at,
              id: ingredient.id,
              lastCategoryId: ingredient.lastCategoryId,
              name: ingredient.name,
              ...(ingredient.unit && {
                unit: {
                  id: ingredient.unit,
                  name: ingredient.unitName,
                },
              }),
            })
          },
          (_, error) => {
            reject(error)
            return false
          },
        )
      })
    })

  static getAll = (): Promise<Ingredient[]> =>
    new Promise((resolve, reject) => {
      databaseClient.transaction((tx) => {
        tx.executeSql(
          `
            SELECT ingredients.*, units.name as unitName
            FROM ingredients
            LEFT JOIN units ON ingredients.unit = units.id
            `,
          [],
          (_, result) => {
            const ingredients = result.rows._array

            resolve(
              ingredients.map((ingredient) => ({
                createdAt: ingredient.created_at,
                id: ingredient.id,
                lastCategoryId: ingredient.lastCategoryId,
                name: ingredient.name,
                ...(ingredient.unit && {
                  unit: {
                    id: ingredient.unit,
                    name: ingredient.unitName,
                  },
                }),
              })),
            )
          },
          (_, error) => {
            reject(error)
            return false
          },
        )
      })
    })
}
