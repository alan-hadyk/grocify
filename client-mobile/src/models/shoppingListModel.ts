import { ShoppingList, UpdateShoppingListInput } from "@client/api/schema"
import { databaseClient } from "@client/clients/databaseClient"
import "react-native-get-random-values"
import { v4 as uuidv4 } from "uuid"

/**
 * ShoppingListModel class provides methods for performing database operations on the shopping lists table.
 */
export class ShoppingListModel {
  static initSchema = async () =>
    databaseClient.transactionAsync(async (tx) => {
      await tx.executeSqlAsync(`
        CREATE TABLE IF NOT EXISTS shopping_lists (
          id TEXT PRIMARY KEY,
          date TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
          created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
        );
      `)

      console.log("shopping_lists table initialized")

      await tx.executeSqlAsync(`
        CREATE TABLE IF NOT EXISTS shopping_lists_ingredients (
          id TEXT PRIMARY KEY,
          shopping_list_id TEXT NOT NULL,
          ingredient_id TEXT NOT NULL,
          category_id TEXT,
          quantity REAL NOT NULL
        );
      `)

      console.log("shopping_list_ingredients table initialized")
    })

  static create = (): Promise<ShoppingList> =>
    new Promise((resolve, reject) => {
      const id = uuidv4()

      databaseClient.transaction((tx) => {
        tx.executeSql(
          `
            INSERT
            INTO shopping_lists (id)
            VALUES (?)
            RETURNING *
        `,
          [id],
          (_, result) => {
            const shoppingList = result.rows.item(0)

            resolve({
              categories: [],
              createdAt: shoppingList.created_at,
              date: shoppingList.date,
              id: shoppingList.id,
              ingredients: [],
              recipes: [],
            })
          },
          (_, error) => {
            reject(error)
            return false
          },
        )
      })
    })

  static get = ({ id }: Pick<ShoppingList, "id">): Promise<ShoppingList> =>
    new Promise((resolve, reject) => {
      databaseClient.transaction((tx) => {
        tx.executeSql(
          `
            SELECT
              sl.id AS shoppingListId,
              sl.date AS shoppingListDate,
              sl.created_at AS shoppingListCreatedAt,
              sli.ingredient_id AS ingredientId,
              sli.category_id AS categoryId,
              sli.quantity AS ingredientQuantity,
              ing.name AS ingredientName,
              ing.last_category_id AS ingredientLastCategoryId,
              ing.created_at AS ingredientCreatedAt,
              u.id AS unitId,
              u.name AS unitName,
              u.created_at AS unitCreatedAt
            FROM shopping_lists AS sl
            LEFT JOIN shopping_lists_ingredients AS sli ON sl.id = sli.shopping_list_id
            LEFT JOIN ingredients AS ing ON sli.ingredient_id = ing.id
            LEFT JOIN units AS u ON ing.unit = u.id
            WHERE sl.id = ?        
          `,
          [id],
          (_, result) => {
            const rows = result.rows._array
            const shoppingList: ShoppingList = {
              categories: [],
              createdAt: rows[0].shoppingListCreatedAt,
              date: rows[0].shoppingListDate,
              id: rows[0].shoppingListId,
              ingredients: [],
              recipes: [],
            }

            rows.forEach((row) => {
              if (row.ingredientId) {
                shoppingList.ingredients.push({
                  categoryId: row.categoryId,
                  createdAt: row.ingredientCreatedAt,
                  id: row.ingredientId,
                  lastCategoryId: row.ingredientLastCategoryId,
                  name: row.ingredientName,
                  quantity: row.ingredientQuantity,
                  unit: row.unitId
                    ? {
                        createdAt: row.unitCreatedAt,
                        id: row.unitId,
                        name: row.unitName,
                      }
                    : undefined,
                })
              }
            })

            resolve(shoppingList)
          },
          (_, error) => {
            reject(error)
            return false
          },
        )
      })
    })

  static update = (
    { id }: Pick<ShoppingList, "id">,
    input: UpdateShoppingListInput,
  ): Promise<ShoppingList> =>
    new Promise((resolve) => {
      databaseClient.transactionAsync(async (tx) => {
        if (input.date) {
          // Update shopping list details
          await tx.executeSqlAsync(
            `
              UPDATE shopping_lists
              SET date = ?
              WHERE id = ?
            `,
            [input.date, id],
          )
        }

        if (input.ingredients) {
          await tx.executeSqlAsync(
            `
              DELETE FROM shopping_lists_ingredients
              WHERE shopping_list_id = ?
            `,
            [id],
          )

          for (const ingredient of input.ingredients) {
            const ingredientInsertSql = ingredient.categoryId
              ? `
              INSERT INTO shopping_lists_ingredients (id, shopping_list_id, ingredient_id, category_id, quantity)
              VALUES (?, ?, ?, ?, ?)
            `
              : `
              INSERT INTO shopping_lists_ingredients (id, shopping_list_id, ingredient_id, quantity)
              VALUES (?, ?, ?, ?)
            `

            const shoppingListIngredientId = uuidv4()

            const insertValues = ingredient.categoryId
              ? [
                  shoppingListIngredientId, // id
                  id, // shopping_list_id
                  ingredient.id, // ingredient_id
                  ingredient.categoryId, // category_id
                  ingredient.quantity, // quantity
                ]
              : [
                  shoppingListIngredientId, // id
                  id, // shopping_list_id
                  ingredient.id, // ingredient_id
                  ingredient.quantity, // quantity
                ]

            await tx.executeSqlAsync(ingredientInsertSql, insertValues)
          }
        }

        const updatedShoppingList = await ShoppingListModel.get({ id })

        resolve(updatedShoppingList)
      })
    })
}
