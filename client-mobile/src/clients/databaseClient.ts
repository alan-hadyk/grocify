import * as SQLite from "expo-sqlite"

/**
 * Instance of SQLite database.
 */
export const databaseClient = SQLite.openDatabase("database.db")
