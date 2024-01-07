import { CreateUnitInput, Unit } from "@client/api/schema"
import { databaseClient } from "@client/clients/databaseClient"
import "react-native-get-random-values"
import { v4 as uuidv4 } from "uuid"

/**
 * UnitModel class provides methods for performing database operations on the units table.
 */
export class UnitModel {
  static initSchema = async () =>
    databaseClient.transactionAsync(async (tx) => {
      await tx.executeSqlAsync(`
        CREATE TABLE IF NOT EXISTS units (
          id TEXT PRIMARY KEY,
          name TEXT NOT NULL,
          created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
        );
      `)

      console.log("units table initialized")
    })

  static create = ({ name }: CreateUnitInput): Promise<Unit> =>
    new Promise((resolve, reject) => {
      const id = uuidv4()

      databaseClient.transaction((tx) => {
        tx.executeSql(
          `
            INSERT
            INTO units (id, name)
            VALUES (?, ?)
            RETURNING *
        `,
          [id, name],
          (_, result) => {
            const unit = result.rows.item(0)

            resolve({
              createdAt: unit.created_at,
              id: unit.id,
              name: unit.name,
            })
          },
          (_, error) => {
            reject(error)
            return false
          },
        )
      })
    })

  static getAll = (): Promise<Unit[]> =>
    new Promise((resolve, reject) => {
      databaseClient.transaction((tx) => {
        tx.executeSql(
          `
              SELECT *
              FROM units
            `,
          [],
          (_, result) => {
            const units = result.rows._array

            resolve(
              units.map((unit) => ({
                createdAt: unit.created_at,
                id: unit.id,
                name: unit.name,
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
