/* eslint-disable import/exports-last */ /* eslint-disable sort-keys */
import { fetcher } from "@client/lib/fetcher"
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from "@tanstack/react-query"
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  DateTime: { input: any; output: any }
}

export type CreateIngredientInput = {
  name: Scalars["String"]["input"]
  unit: Scalars["ID"]["input"]
}

export type CreateRecipeInput = {
  description?: InputMaybe<Scalars["String"]["input"]>
  ingredients: RecipeIngredientCreateInput[]
  servingSize: Scalars["Int"]["input"]
  title: Scalars["String"]["input"]
}

export type CreateShoppingListInput = {
  date: Scalars["DateTime"]["input"]
  ingredients?: InputMaybe<ShoppingListIngredientCreateUpdate[]>
  recipes?: InputMaybe<ShoppingListRecipeCreateUpdate[]>
}

export type CreateUnitInput = {
  name: Scalars["String"]["input"]
}

export type CreateUserInput = {
  email: Scalars["String"]["input"]
  password: Scalars["String"]["input"]
  preferredLanguage: Language
}

export type Ingredient = {
  author: User
  createdAt: Scalars["DateTime"]["output"]
  id: Scalars["ID"]["output"]
  name: Scalars["String"]["output"]
  unit: Unit
}

export enum Language {
  En = "En",
  Pl = "Pl",
}

export type Mutation = {
  _dummyMutation?: Maybe<Scalars["String"]["output"]>
  createIngredient: Ingredient
  createRecipe: Recipe
  createShoppingList: ShoppingList
  createUnit: Unit
  createUser: User
  deleteIngredient?: Maybe<Scalars["Boolean"]["output"]>
  deleteRecipe?: Maybe<Scalars["Boolean"]["output"]>
  deleteShoppingList?: Maybe<Scalars["Boolean"]["output"]>
  deleteUnit?: Maybe<Scalars["Boolean"]["output"]>
  deleteUser?: Maybe<Scalars["Boolean"]["output"]>
  updateIngredient: Ingredient
  updateRecipe: Recipe
  updateShoppingList: ShoppingList
  updateUnit: Unit
  updateUser: User
}

export type MutationCreateIngredientArgs = {
  input: CreateIngredientInput
}

export type MutationCreateRecipeArgs = {
  input: CreateRecipeInput
}

export type MutationCreateShoppingListArgs = {
  input: CreateShoppingListInput
}

export type MutationCreateUnitArgs = {
  input: CreateUnitInput
}

export type MutationCreateUserArgs = {
  input: CreateUserInput
}

export type MutationDeleteIngredientArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteRecipeArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteShoppingListArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteUnitArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationUpdateIngredientArgs = {
  id: Scalars["ID"]["input"]
  input: UpdateIngredientInput
}

export type MutationUpdateRecipeArgs = {
  id: Scalars["ID"]["input"]
  input: UpdateRecipeInput
}

export type MutationUpdateShoppingListArgs = {
  id: Scalars["ID"]["input"]
  input: UpdateShoppingListInput
}

export type MutationUpdateUnitArgs = {
  id: Scalars["ID"]["input"]
  input: UpdateUnitInput
}

export type MutationUpdateUserArgs = {
  input: UpdateUserInput
}

export type Notification = {
  content: Scalars["String"]["output"]
  createdAt: Scalars["DateTime"]["output"]
  id: Scalars["ID"]["output"]
  read: Scalars["Boolean"]["output"]
  type: NotificationType
  user: User
}

export enum NotificationType {
  Error = "Error",
  Info = "Info",
  Warning = "Warning",
}

export type Query = {
  _dummy?: Maybe<Scalars["String"]["output"]>
  ingredient?: Maybe<Ingredient>
  ingredients: Ingredient[]
  notification?: Maybe<Notification>
  notifications: Notification[]
  recipe?: Maybe<Recipe>
  recipes: Recipe[]
  shoppingList?: Maybe<ShoppingList>
  shoppingLists: ShoppingList[]
  unit?: Maybe<Unit>
  units: Unit[]
  user?: Maybe<User>
}

export type QueryIngredientArgs = {
  id: Scalars["ID"]["input"]
}

export type QueryNotificationArgs = {
  id: Scalars["ID"]["input"]
}

export type QueryRecipeArgs = {
  id: Scalars["ID"]["input"]
}

export type QueryShoppingListArgs = {
  id: Scalars["ID"]["input"]
}

export type QueryUnitArgs = {
  id: Scalars["ID"]["input"]
}

export type Recipe = {
  author: User
  createdAt: Scalars["DateTime"]["output"]
  description?: Maybe<Scalars["String"]["output"]>
  id: Scalars["ID"]["output"]
  ingredients: RecipeIngredient[]
  servingSize: Scalars["Int"]["output"]
  title: Scalars["String"]["output"]
}

export type RecipeIngredient = {
  createdAt: Scalars["DateTime"]["output"]
  id: Scalars["ID"]["output"]
  name: Scalars["String"]["output"]
  quantity: Scalars["Float"]["output"]
  unit: Unit
}

export type RecipeIngredientCreateInput = {
  id: Scalars["ID"]["input"]
  name: Scalars["String"]["input"]
  quantity: Scalars["Float"]["input"]
  unit: Scalars["ID"]["input"]
}

export type RecipeIngredientUpdateInput = {
  id: Scalars["ID"]["input"]
  name?: InputMaybe<Scalars["String"]["input"]>
  quantity?: InputMaybe<Scalars["Float"]["input"]>
  unit?: InputMaybe<Scalars["ID"]["input"]>
}

export type ShoppingList = {
  author: User
  createdAt: Scalars["DateTime"]["output"]
  date: Scalars["DateTime"]["output"]
  id: Scalars["ID"]["output"]
  ingredients: ShoppingListIngredient[]
  recipes: ShoppingListRecipe[]
}

export type ShoppingListIngredient = {
  createdAt: Scalars["DateTime"]["output"]
  id: Scalars["ID"]["output"]
  name: Scalars["String"]["output"]
  quantity: Scalars["Float"]["output"]
  unit: Unit
}

export type ShoppingListIngredientCreateUpdate = {
  id: Scalars["ID"]["input"]
  quantity: Scalars["Float"]["input"]
}

export type ShoppingListRecipe = {
  amountOfDays: Scalars["Int"]["output"]
  createdAt: Scalars["DateTime"]["output"]
  description?: Maybe<Scalars["String"]["output"]>
  id: Scalars["ID"]["output"]
  ingredients: RecipeIngredient[]
  servingSize: Scalars["Int"]["output"]
  title: Scalars["String"]["output"]
}

export type ShoppingListRecipeCreateUpdate = {
  amountOfDays: Scalars["Int"]["input"]
  id: Scalars["ID"]["input"]
}

export type Unit = {
  author: User
  createdAt: Scalars["DateTime"]["output"]
  id: Scalars["ID"]["output"]
  name: Scalars["String"]["output"]
}

export type UpdateIngredientInput = {
  name?: InputMaybe<Scalars["String"]["input"]>
  unit?: InputMaybe<Scalars["ID"]["input"]>
}

export type UpdateRecipeInput = {
  description?: InputMaybe<Scalars["String"]["input"]>
  ingredients?: InputMaybe<RecipeIngredientUpdateInput[]>
  servingSize?: InputMaybe<Scalars["Int"]["input"]>
  title?: InputMaybe<Scalars["String"]["input"]>
}

export type UpdateShoppingListInput = {
  date?: InputMaybe<Scalars["DateTime"]["input"]>
  ingredients?: InputMaybe<ShoppingListIngredientCreateUpdate[]>
  recipes?: InputMaybe<ShoppingListRecipeCreateUpdate[]>
}

export type UpdateUnitInput = {
  name?: InputMaybe<Scalars["String"]["input"]>
}

export type UpdateUserInput = {
  email?: InputMaybe<Scalars["String"]["input"]>
  password?: InputMaybe<Scalars["String"]["input"]>
  preferredLanguage?: InputMaybe<Scalars["String"]["input"]>
}

export type User = {
  createdAt: Scalars["DateTime"]["output"]
  email: Scalars["String"]["output"]
  id: Scalars["ID"]["output"]
  preferredLanguage: Language
}

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput
}>

export type CreateUserMutation = {
  createUser: { id: string; email: string; preferredLanguage: Language; createdAt: any }
}

export type UserQueryVariables = Exact<{ [key: string]: never }>

export type UserQuery = {
  user?: { id: string; email: string; preferredLanguage: Language; createdAt: any } | null
}

export const CreateUserDocument = `
    mutation createUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    email
    preferredLanguage
    createdAt
  }
}
    `

export const useCreateUserMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<CreateUserMutation, TError, CreateUserMutationVariables, TContext>,
) => {
  return useMutation<CreateUserMutation, TError, CreateUserMutationVariables, TContext>({
    mutationKey: ["createUser"],
    mutationFn: (variables?: CreateUserMutationVariables) =>
      fetcher<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, variables)(),
    ...options,
  })
}

useCreateUserMutation.getKey = () => ["createUser"]

useCreateUserMutation.fetcher = (
  variables: CreateUserMutationVariables,
  options?: RequestInit["headers"],
) =>
  fetcher<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, variables, options)

export const UserDocument = `
    query user {
  user {
    id
    email
    preferredLanguage
    createdAt
  }
}
    `

export const useUserQuery = <TData = UserQuery, TError = unknown>(
  variables?: UserQueryVariables,
  options?: UseQueryOptions<UserQuery, TError, TData>,
) => {
  return useQuery<UserQuery, TError, TData>({
    queryKey: variables === undefined ? ["user"] : ["user", variables],
    queryFn: fetcher<UserQuery, UserQueryVariables>(UserDocument, variables),
    ...options,
  })
}

useUserQuery.document = UserDocument

useUserQuery.getKey = (variables?: UserQueryVariables) =>
  variables === undefined ? ["user"] : ["user", variables]

useUserQuery.fetcher = (variables?: UserQueryVariables, options?: RequestInit["headers"]) =>
  fetcher<UserQuery, UserQueryVariables>(UserDocument, variables, options)
