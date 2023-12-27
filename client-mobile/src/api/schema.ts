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
  UUID: { input: any; output: any }
}

export type Mutation = {
  createUser: User
}

export type MutationCreateUserArgs = {
  email: Scalars["String"]["input"]
  password: Scalars["String"]["input"]
  preferredLanguage: PreferredLang
  username: Scalars["String"]["input"]
}

export enum PreferredLang {
  En = "en-US",
  Pl = "pl_PL",
}

export type Query = {
  user: User
}

export type QueryUserArgs = {
  id?: InputMaybe<Scalars["UUID"]["input"]>
  username?: InputMaybe<Scalars["String"]["input"]>
}

export type User = {
  createdAt: Scalars["String"]["output"]
  email: Scalars["String"]["output"]
  id: Scalars["UUID"]["output"]
  preferredLanguage: PreferredLang
  username: Scalars["String"]["output"]
}

export type CreateUserMutationVariables = Exact<{
  username: Scalars["String"]["input"]
  password: Scalars["String"]["input"]
  email: Scalars["String"]["input"]
  preferredLanguage: PreferredLang
}>

export type CreateUserMutation = {
  createUser: {
    id: any
    email: string
    username: string
    preferredLanguage: PreferredLang
    createdAt: string
  }
}

export type UserQueryVariables = Exact<{
  username: Scalars["String"]["input"]
}>

export type UserQuery = {
  user: {
    id: any
    username: string
    email: string
    preferredLanguage: PreferredLang
    createdAt: string
  }
}

export const CreateUserDocument = `
    mutation createUser($username: String!, $password: String!, $email: String!, $preferredLanguage: PreferredLang!) {
  createUser(
    username: $username
    password: $password
    email: $email
    preferredLanguage: $preferredLanguage
  ) {
    id
    email
    username
    preferredLanguage
    createdAt
  }
}
    `
export const useCreateUserMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<CreateUserMutation, TError, CreateUserMutationVariables, TContext>,
) =>
  useMutation<CreateUserMutation, TError, CreateUserMutationVariables, TContext>({
    mutationKey: ["createUser"],
    mutationFn: (variables?: CreateUserMutationVariables) =>
      fetcher<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, variables)(),
    ...options,
  })
useCreateUserMutation.getKey = () => ["createUser"]

useCreateUserMutation.fetcher = (
  variables: CreateUserMutationVariables,
  options?: RequestInit["headers"],
) =>
  fetcher<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, variables, options)
export const UserDocument = `
    query user($username: String!) {
  user(username: $username) {
    id
    username
    email
    preferredLanguage
    createdAt
  }
}
    `
export const useUserQuery = <TData = UserQuery, TError = unknown>(
  variables: UserQueryVariables,
  options?: UseQueryOptions<UserQuery, TError, TData>,
) =>
  useQuery<UserQuery, TError, TData>({
    queryKey: ["user", variables],
    queryFn: fetcher<UserQuery, UserQueryVariables>(UserDocument, variables),
    ...options,
  })
useUserQuery.document = UserDocument

useUserQuery.getKey = (variables: UserQueryVariables) => ["user", variables]
useUserQuery.fetcher = (variables: UserQueryVariables, options?: RequestInit["headers"]) =>
  fetcher<UserQuery, UserQueryVariables>(UserDocument, variables, options)
