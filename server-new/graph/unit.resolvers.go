package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.42

import (
	"context"
	"fmt"
	"grocify-server/graph/model"
)

// CreateUnit is the resolver for the createUnit field.
func (r *mutationResolver) CreateUnit(ctx context.Context, input model.CreateUnitInput) (*model.Unit, error) {
	panic(fmt.Errorf("not implemented: CreateUnit - createUnit"))
}

// DeleteUnit is the resolver for the deleteUnit field.
func (r *mutationResolver) DeleteUnit(ctx context.Context, id string) (*bool, error) {
	panic(fmt.Errorf("not implemented: DeleteUnit - deleteUnit"))
}

// UpdateUnit is the resolver for the updateUnit field.
func (r *mutationResolver) UpdateUnit(ctx context.Context, id string, input model.UpdateUnitInput) (*model.Unit, error) {
	panic(fmt.Errorf("not implemented: UpdateUnit - updateUnit"))
}

// Units is the resolver for the units field.
func (r *queryResolver) Units(ctx context.Context) ([]*model.Unit, error) {
	panic(fmt.Errorf("not implemented: Units - units"))
}

// Unit is the resolver for the unit field.
func (r *queryResolver) Unit(ctx context.Context, id string) (*model.Unit, error) {
	panic(fmt.Errorf("not implemented: Unit - unit"))
}
