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

![System Architecture - High-level diagram](docs/system-architecture.drawio.svg?raw=true "System Architecture - High-level diagram")

Arrows between the components indicate the direction of communication. For instance, both clients send requests to the server and receive responses from it. The server, in turn, communicates with the databases to fetch, update, or delete data as per the client's requests.

This diagram provides a high-level overview of how these components interact within the system.

The system architecture is primarily divided into three parts: the client, the server and databases.

#### Client:

There are two clients represented in the diagram, both using React Native for their frontend:

- **Client 1 (React Native)**: This client communicates with the server using GraphQL and WebSockets. The client sends requests to the server and receives responses.
- **Client 2 (React Native)**: This client also communicates with the server using GraphQL and WebSockets.

#### Server:

Server utilizes Rust and Axum. It communicates with both clients using GraphQL and WebSockets. It also interacts with the PostgreSQL database and the Redis Store.

#### Databases:

There are two databases in the system:

- **PostgreSQL Database**: This is a relational database used for storing structured data.
- **Redis Store**: This is an in-memory data structure store, used as a session store and message broker.

### Technology Stack

> List of technologies used in the project

#### The Mobile App

1. **React Native** - For building the cross-platform mobile app that works on both Android and iOS.
2. **TypeScript** - TypeScript is a strongly typed version of JavaScript, which allows developers to write safer, more scalable code and catch errors early. TypeScript's static typing can help prevent bugs that might be caused by unexpected data types.
3. **Tamagui** - A unified UI kit for React Native and Web. It provides a light design system, style library, and optimizing compiler, enabling efficient cross-platform development.
4. **TanStack Query** - A library for managing and caching asynchronous data.
5. **graphql-request** - A minimal GraphQL client that supports all GraphQL specifications, providing a simple and flexible way to make GraphQL requests. It can be used with TanStack Query for handling GraphQL queries and mutations.
6. **ESLint** - A static code analysis tool for identifying problematic patterns and enforcing coding standards in JavaScript and TypeScript.
7. **Prettier** - An opinionated code formatter that ensures consistent formatting across your codebase.
8. **React Navigation** - A popular routing and navigation library for React Native, providing a straightforward way to manage navigation in your mobile app.
9. **Socket.IO** - A library for real-time bidirectional event-based communication using WebSockets or other protocols.
10. **GraphQL Code Generator** - A tool that generates code out of your GraphQL schema, allowing typed queries, mutations, subscriptions, and more.
11. **Playwright** - An end-to-end testing tool for web browsers, allowing cross-browser testing and automation.

#### The Backend

1. **Rust** - A modern system programming language that emphasizes safety, performance, and concurrency.
2. **Axum** - A web application framework for Rust with a focus on simplicity, zero-cost abstractions, and modern async foundations.
3. **async-graphql** - A high-performance server library for Rust, which makes it easy to build a GraphQL server.
4. **SQLx** - An async SQL database library for Rust that provides compile-time checked queries and robust connection handling. It supports various databases like PostgreSQL, MySQL, SQLite, and more.
5. **axum_sessions** - A session management library for Axum, allowing the use of cookie-based sessions.
6. **Redis** - An in-memory data structure store used for caching and session storage. It will be used to store user session data, providing fast access and scalability.
7. **rustfmt** - A tool for formatting Rust code according to style guidelines. It can be configured to match your project's specific style requirements.
8. **Clippy** - A collection of lints to catch common mistakes and improve your Rust code. It's highly configurable and provides helpful warnings and suggestions.
9. **PostgreSQL** - A powerful, open-source object-relational database system known for its robustness, scalability, and performance.
10. **Lettermen** - A Rust library for sending emails, providing a simple and flexible way to handle email notifications such as account confirmation and recovery.
11. **Docker** - A platform that enables developers to create, deploy, and run applications inside lightweight, portable containers. Containers package up the code and all its dependencies, ensuring that the application runs seamlessly and consistently across different environments. This isolation simplifies both development and deployment workflows, enhancing productivity and reliability. In the context of this project, Docker will be used to manage containers for the PostgreSQL and Redis services, providing a unified approach to managing dependencies and infrastructure.

### Data Model

> Description of database schema

Data model consists of the following main entities:

- **Users**: User profiles, including authentication data and preferences
- **Recipes**: Contains information about each recipe, including title, description, and serving size. Can be linked to multiple Ingredients.
- **Ingredients**: Details of ingredients for each recipe, including unit. Ingredients may be reusable across different recipes.
- **Units**: Unit of measurement for given ingredient, such as "g", "cups", "ml", "l", "kg" or "teaspoons". Units may be reusable across different ingredients.
- **Shopping Lists**: Aggregated lists of ingredients based on selected recipes, including user customizations
- **Notifications**: Notifications for a given user. There might a notification that a recipe or shopping list was shared with the user.

1. `users` table - Information related to user profiles, including username, password hash and email:

   - `id` UUID (required) - Unique identifier for the user
   - `username` String (required, max. 100 characters) - Username for display
   - `password_hash` String (required) - Hashed password for authentication
   - `email` String (required) - Email address for login, communication and recovery
   - `created_at` Timestamp (required) - The timestamp of when the user was created.

2. `recipes` table - Details about recipes, including title, description, creator:

   - `id` UUID (required) - Unique identifier for the recipe
   - `title` String (required, max. 100 characters) - Name or title of the recipe
   - `description` String (optional, max. 500 characters) - A brief description of the recipe
   - `serving_size` Integer (required) - Standard serving size for the recipe (e.g., servings for 1 person)
   - `user_id` UUID (required) - Relation to the User who created the recipe. This is a foreign key referencing `users.id`.
   - `created_at` Timestamp (required) - The timestamp of when the recipe was created.

3. `ingredients` table - Basic information about individual ingredients, including name and unit of measurement:

   - `id` UUID (required) - Unique identifier for the ingredient
   - `name` String (required, max. 100 characters) - Name of the ingredient (e.g., "Onion")
   - `unit` UUID (required, max. 100 characters) - Unit of measurement for the ingredient (e.g., "g", "cups", "ml", "l", "kg", "teaspoons"). This is a foreign key referencing `units.id`.
   - `created_at` Timestamp (required) - The timestamp of when the ingredient was created.

4. `units` table - Standardized units of measurement for ingredients:

   - `id` UUID (required) - Unique identifier for the unit
   - `name` String (required, max. 100 characters) - Unit of measurement (e.g., "g", "cups", "ml", "l", "kg", "teaspoons").
   - `created_at` Timestamp (required) - The timestamp of when the unit was created.

5. `shopping_lists` table - Information related to shopping lists, including name and creator:

   - `id` UUID (required) - Unique identifier for the shopping list
   - `name` String (optional) - Name or title of the shopping list
   - `user_id` UUID (required) - Relation to the User who created the shopping list. This is a foreign key referencing `users.id`
   - `created_at` Timestamp (required) - The timestamp of when the shopping list was created.

6. `users_recipes` `JOIN` table - JOIN table to associate users with recipes:

   - `id` (UUID, required): A unique identifier. This is the primary key.
   - `recipe_id` UUID (required) - Given recipe. This is a foreign key referencing `recipes.id`.
   - `user_id` UUID (required) - Given user. This is a foreign key referencing `users.id`.

7. `users_shopping_lists` `JOIN` table - JOIN table to associate users with shopping lists:

   - `id` (UUID, required): A unique identifier. This is the primary key.
   - `shopping_list_id` UUID (required) - Given shopping list. This is a foreign key referencing `shopping_lists.id`.
   - `user_id` UUID (required) - Given user. This is a foreign key referencing `users.id`.

8. `recipes_ingredients` `JOIN` table - JOIN table to associate recipes with their individual ingredients and quantities:

   - `id` (UUID, required): A unique identifier. This is the primary key.
   - `recipe_id` UUID (required) - Given recipe. This is a foreign key referencing `recipes.id`.
   - `ingredient_id` UUID (required) - Given ingredient. This is a foreign key referencing `ingredients.id`.
   - `quantity` Float (required) - Quantity of the ingredient for the recipe.

9. `shopping_lists_recipes` `JOIN` table - JOIN table to associate shopping lists with recipes:

   - `id` (UUID, required): A unique identifier. This is the primary key.
   - `shopping_list_id` UUID (required) - Given shopping list. This is a foreign key referencing `shopping_lists.id`.
   - `recipe_id` UUID (required) - Given recipe. This is a foreign key referencing `recipes.id`.

10. `shopping_lists_ingredients` `JOIN` table - JOIN table to associate shopping lists with ingredients:

    - `id` (UUID, required): A unique identifier. This is the primary key.
    - `shopping_list_id` UUID (required) - Given shopping list. This is a foreign key referencing `shopping_lists.id`.
    - `ingredient_id` UUID (required) - Given ingredient. This is a foreign key referencing `ingredients.id`.
    - `quantity` Float (required) - Quantity of the ingredient in the shopping list

11. `notifications` table - Notifications for users:

    - `id` UUID (required) - Unique identifier for the notification
    - `user_id` UUID (required) - Relation to the User who receives the notification. This is a foreign key referencing `users.id`.
    - `type` Enum (required) - Type of notification. This is an enumeration with values (e.g., "recipe_shared", "shopping_list_shared")
    - `content` JSON (required) - Detailed content of the notification, including relevant IDs and information.
    - `read` Boolean (required) - Indicates whether the notification has been read by the user.
    - `created_at` Timestamp (required) - The timestamp of when the notification was created.

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
11. Later on, user might share a recipe or shopping list with another user.

### Implementation Plan

> List of the major tasks that have to be completed

- [ ] Initial server setup
- [ ] Initial client setup
- [ ] Database schema design
- [ ] GraphQL schema design - includes defining types, queries, mutations, and any subscriptions
- [ ] Resolvers implementation for GraphQL schema - handling the logic for each query/mutation
- [ ] API endpoints development
- [ ] Authentication system implementation
- [ ] UI Design
- [ ] Client - authentication
- [ ] Client - settings
- [ ] Client - routing
- [ ] Client - creating a new recipe
- [ ] Client - list of recipes
- [ ] Client - creating a new shopping list
- [ ] Client - list of shopping lists
- [ ] Client - marking items in shopping list as done
- [ ] Client - sharing with other users
- [ ] Server - notifications
- [ ] Client - notifications
- [ ] Client - Websockets
- [ ] Client - collaboration on recipes and shopping lists
- [ ] Server - deployment
- [ ] Client - deployment (App Store and Google Play)
- [ ] Server - logging & monitoring

### Potential additional features

- Integration with local grocery stores for price comparison
- Recipe recommendations based on dietary preferences (could be monetized)

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
