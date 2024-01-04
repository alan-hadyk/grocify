import { ShoppingList } from "@client/api/schema"
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
            SELECT *
            FROM shopping_lists
            WHERE id = ?
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
}
