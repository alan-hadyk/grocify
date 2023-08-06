# Grocify

## Architecture Implementation Plan

### Project Overview

> Brief description of the project and its objectives.

**Grocify**

An application in which the user can add various recipes, and then automatically create a shopping list with the necessary ingredients.


### Technical Requirements

> Hard Technical Requirements of the project

#### The Frontend

- Responsive and user-friendly mobile interface
- Offline capabilities to allow access to recipes and shopping lists without internet connectivity
- Real-time sync with the backend for updates and changes

#### The Backend

- Scalable and performant to handle multiple concurrent users
- GraphQL API endpoints to serve data to the mobile app, enabling efficient queries and reducing over-fetching of data
- Integration with a database to store recipes, ingredients, and user information
- Secure authentication and authorization
- Subscription support for real-time updates (if needed, e.g., shared lists)

### System Architecture

> High-level diagram showing how the different components of the system will interact with each other


#### Client-side:

- **Mobile App**: React Native application for users to interact with recipes and shopping lists
- **Authentication**: Handling user authentication and maintaining sessions

#### Server-side:

- **API Layer**: Rust and Axum-based GraphQL API serving data to the mobile app, with support for queries, mutations, and possibly subscriptions
- **Services**: Business logic and data transformation
- **Data Access Layer**: Interaction with the database

#### Databases:

- **PostgreSQL or MySQL**: Relational database to store recipes, ingredients, user profiles, and shopping lists
 
### Technology Stack

> List of technologies used in the project

#### The Mobile App

1. **React Native** - For building the cross-platform mobile app that works on both Android and iOS.
2. **TypeScript** - TypeScript is a strongly typed version of JavaScript, which allows developers to write safer, more scalable code and catch errors early. TypeScript's static typing can help prevent bugs that might be caused by unexpected data types.

#### The Backend

1. **Rust** - A modern system programming language that emphasizes safety, performance, and concurrency.
2. **Axum** - A web application framework for Rust with a focus on simplicity, zero-cost abstractions, and modern async foundations.

### Data Model

> Description of database schema

Data model consists of four main entities:

- **Recipes**: Contains information about each recipe, including title, description, and serving size. Can be linked to multiple Ingredients.
- **Ingredients**: Details of ingredients for each recipe, including quantity and unit. Ingredients may be reusable across different recipes.
- **Users**: User profiles, including authentication data and preferences
- **Shopping Lists**: Aggregated lists of ingredients based on selected recipes, including user customizations

1. `users` table:
    - `id` UUID (required) - Unique identifier for the user
    - `username` String (required, max. 100 characters) - Username for display
    - `password_hash` String (required) - Hashed password for authentication
    - `email` String (required) - Email address for login, communication and recovery
    - `recipes` Relation to `recipes` (optional) - Recipes created by the user
    - `shopping_lists` Relation to `shopping_lists` (optional) - Shopping lists created or shared with the user

2. `recipes` table:
    - `id` UUID (required) - Unique identifier for the recipe
    - `title` String (required, max. 100 characters) - Name or title of the recipe
    - `description` String (optional, max. 500 characters) - A brief description of the recipe
    - `user_id` UUID (required) - Relation to the User who created the recipe
    - `ingredients` Relation to `recipe_ingredients` (required) - Link to ingredients with quantity information

3. `ingredients` table:
    - `id` UUID (required) - Unique identifier for the ingredient
    - `name` String (required, max. 100 characters) - Name of the ingredient (e.g., "Onion")
    - `unit` String (required, max. 100 characters) - Unit of measurement for the ingredient.  (e.g., "g", "cups", "ml", "l", "kg", "teaspoons")

### User Flow

> Step-by-step walkthrough of a typical user interaction with the application

1. The user adds a recipe (e.g. "Spaghetti") to the app.
2. The user adds ingredients to the recipe for 1 meal for 1 person (e.g. 1 onion, 1 can of tomatoes, 200 g of minced meat, 1 stock cube).
3. The user adds another recipe to the application (e.g. "Chicken soup"), including ingredients for 1 meal for 1 person.
4. The user can also add cleaning items to the app.
5. The user is going to go shopping, so he creates a shopping list.
6. In this list, he selects the previously added recipe, specifying for how many people the meal is needed and for how many days.
7. Based on the information collected in the previous point, the application calculates the list of needed ingredients and adds it to the list.
8. The user can modify the list and add his own items to it.
9. The user can also add more ingredients to the list based on another recipe.
10. Having a ready list, the user can go to the store and mark off the next items on the list while shopping.

### Implementation Plan

> List of the major tasks that have to be completed

- [ ] [Initial server setup]()
- [ ] [Initial client setup]()
- [ ] [Database schema design]()
- [ ] [GraphQL schema design]() - includes defining types, queries, mutations, and any subscriptions
- [ ] [Resolvers implementation for GraphQL schema]() - handling the logic for each query/mutation
- [ ] [API endpoints development]()
- [ ] [Authentication system implementation]()
- [ ] [UI Design]()
- [ ] [Client - authentication]()
- [ ] [Client - routing]()
- [ ] [Client - UI components]()
- [ ] [Client - API endpoints & interactivity]()
- [ ] [Client - Websockets]()

### Potential additional features

>  

**Proposed new features**

- Sharing shopping lists with other users
- Integration with local grocery stores for price comparison
- Recipe recommendations based on dietary preferences

### Testing Strategy

> Plan to test the application, to ensure it works as expected

- **Unit Testing**: To ensure individual components are working correctly
- **Integration Testing**: To test the interaction between different parts of the application
- **End-to-End Testing**: To simulate user interactions and test the complete functionality of the application

### Potential Challenges

> Any difficulties that might arise during the development. How they can be addressed?

- **Data Synchronization**: Ensuring that data between the client and server is synchronized in real-time
- **Scalability**: Designing the system to handle a growing number of users
- **Security**: Implementing secure authentication and protecting user data
- **UI/UX Design**: Creating an intuitive and responsive design that provides a smooth user experience
- **Usage of GraphQL**: The use of GraphQL may lead to some specific benefits and challenges:
    - Pros:
        - Flexibility in querying, allowing the client to request exactly the data it needs
        - Easier evolution of the API, as fields can be deprecated, and new ones can be added more freely
        - Potential for real-time updates through subscriptions
    - Cons/Challenges:
        - Complexity in the backend to handle flexible queries
        - Potential security considerations, like unintentional data exposure or costly queries (can be mitigated with proper permissions and query complexity analysis)
        - Additional tooling and libraries may be needed, especially for features like batching and caching