// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

import (
	"fmt"
	"io"
	"strconv"
)

type Category struct {
	ID        string `json:"id"`
	Name      string `json:"name"`
	Author    *User  `json:"author"`
	CreatedAt string `json:"createdAt"`
}

type CreateCategoryInput struct {
	Name string `json:"name"`
}

type CreateIngredientInput struct {
	Name string `json:"name"`
	Unit string `json:"unit"`
}

type CreateRecipeInput struct {
	Title       string                         `json:"title"`
	Description *string                        `json:"description,omitempty"`
	ServingSize int                            `json:"servingSize"`
	Ingredients []*RecipeIngredientCreateInput `json:"ingredients"`
}

type CreateShoppingListInput struct {
	Date        string                                `json:"date"`
	Ingredients []*ShoppingListIngredientCreateUpdate `json:"ingredients,omitempty"`
	Recipes     []*ShoppingListRecipeCreateUpdate     `json:"recipes,omitempty"`
}

type CreateUnitInput struct {
	Name string `json:"name"`
}

type CreateUserInput struct {
	Password          string   `json:"password"`
	Email             string   `json:"email"`
	PreferredLanguage Language `json:"preferredLanguage"`
}

type Ingredient struct {
	ID        string `json:"id"`
	Name      string `json:"name"`
	Unit      *Unit  `json:"unit"`
	Author    *User  `json:"author"`
	CreatedAt string `json:"createdAt"`
}

type Notification struct {
	ID        string           `json:"id"`
	User      *User            `json:"user"`
	Type      NotificationType `json:"type"`
	Content   string           `json:"content"`
	Read      bool             `json:"read"`
	CreatedAt string           `json:"createdAt"`
}

type Recipe struct {
	ID          string              `json:"id"`
	Title       string              `json:"title"`
	Description *string             `json:"description,omitempty"`
	ServingSize int                 `json:"servingSize"`
	Author      *User               `json:"author"`
	Ingredients []*RecipeIngredient `json:"ingredients"`
	CreatedAt   string              `json:"createdAt"`
}

type RecipeIngredient struct {
	ID        string  `json:"id"`
	Name      string  `json:"name"`
	Unit      *Unit   `json:"unit"`
	CreatedAt string  `json:"createdAt"`
	Quantity  float64 `json:"quantity"`
}

type RecipeIngredientCreateInput struct {
	ID       string  `json:"id"`
	Name     string  `json:"name"`
	Unit     string  `json:"unit"`
	Quantity float64 `json:"quantity"`
}

type RecipeIngredientUpdateInput struct {
	ID       string   `json:"id"`
	Name     *string  `json:"name,omitempty"`
	Unit     *string  `json:"unit,omitempty"`
	Quantity *float64 `json:"quantity,omitempty"`
}

type ShoppingList struct {
	ID          string                    `json:"id"`
	Date        string                    `json:"date"`
	Author      *User                     `json:"author"`
	Categories  []*Category               `json:"categories"`
	Ingredients []*ShoppingListIngredient `json:"ingredients"`
	Recipes     []*ShoppingListRecipe     `json:"recipes"`
	CreatedAt   string                    `json:"createdAt"`
}

type ShoppingListIngredient struct {
	ID         string  `json:"id"`
	Name       string  `json:"name"`
	Unit       *Unit   `json:"unit"`
	Quantity   float64 `json:"quantity"`
	CategoryID *string `json:"categoryId,omitempty"`
	CreatedAt  string  `json:"createdAt"`
}

type ShoppingListIngredientCreateUpdate struct {
	ID         string  `json:"id"`
	Quantity   float64 `json:"quantity"`
	CategoryID *string `json:"categoryId,omitempty"`
}

type ShoppingListRecipe struct {
	ID           string              `json:"id"`
	Title        string              `json:"title"`
	Description  *string             `json:"description,omitempty"`
	ServingSize  int                 `json:"servingSize"`
	AmountOfDays int                 `json:"amountOfDays"`
	Ingredients  []*RecipeIngredient `json:"ingredients"`
	CreatedAt    string              `json:"createdAt"`
}

type ShoppingListRecipeCreateUpdate struct {
	ID           string `json:"id"`
	AmountOfDays int    `json:"amountOfDays"`
}

type Unit struct {
	ID        string `json:"id"`
	Name      string `json:"name"`
	Author    *User  `json:"author"`
	CreatedAt string `json:"createdAt"`
}

type UpdateCategoryInput struct {
	Name *string `json:"name,omitempty"`
}

type UpdateIngredientInput struct {
	Name *string `json:"name,omitempty"`
	Unit *string `json:"unit,omitempty"`
}

type UpdateRecipeInput struct {
	Title       *string                        `json:"title,omitempty"`
	Description *string                        `json:"description,omitempty"`
	ServingSize *int                           `json:"servingSize,omitempty"`
	Ingredients []*RecipeIngredientUpdateInput `json:"ingredients,omitempty"`
}

type UpdateShoppingListInput struct {
	Date        *string                               `json:"date,omitempty"`
	Ingredients []*ShoppingListIngredientCreateUpdate `json:"ingredients,omitempty"`
	Recipes     []*ShoppingListRecipeCreateUpdate     `json:"recipes,omitempty"`
}

type UpdateUnitInput struct {
	Name *string `json:"name,omitempty"`
}

type UpdateUserInput struct {
	Password          *string `json:"password,omitempty"`
	Email             *string `json:"email,omitempty"`
	PreferredLanguage *string `json:"preferredLanguage,omitempty"`
}

type User struct {
	ID                string   `json:"id"`
	Email             string   `json:"email"`
	PreferredLanguage Language `json:"preferredLanguage"`
	CreatedAt         string   `json:"createdAt"`
}

type Language string

const (
	LanguageEn Language = "En"
	LanguagePl Language = "Pl"
)

var AllLanguage = []Language{
	LanguageEn,
	LanguagePl,
}

func (e Language) IsValid() bool {
	switch e {
	case LanguageEn, LanguagePl:
		return true
	}
	return false
}

func (e Language) String() string {
	return string(e)
}

func (e *Language) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = Language(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid Language", str)
	}
	return nil
}

func (e Language) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type NotificationType string

const (
	NotificationTypeInfo    NotificationType = "Info"
	NotificationTypeWarning NotificationType = "Warning"
	NotificationTypeError   NotificationType = "Error"
)

var AllNotificationType = []NotificationType{
	NotificationTypeInfo,
	NotificationTypeWarning,
	NotificationTypeError,
}

func (e NotificationType) IsValid() bool {
	switch e {
	case NotificationTypeInfo, NotificationTypeWarning, NotificationTypeError:
		return true
	}
	return false
}

func (e NotificationType) String() string {
	return string(e)
}

func (e *NotificationType) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = NotificationType(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid NotificationType", str)
	}
	return nil
}

func (e NotificationType) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}
