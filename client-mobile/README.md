# Grocify - mobile client

## Getting Started

### **Prerequisites**

```bash
- node >=19.8.1
- npm >=9.6.2
- yarn >=1.22.19
```

1.Make sure that the server is running in a separate tab. Refer to server's `README` for more information.

2.Install NPM dependencies

```bash
cd client-mobile/
yarn
```

### **Development - iOS simulator**

1.Create `client-mobile/.env` file. Inside, paste the content from `client-mobile/.env.example`.

2.[Install Xcode](https://developer.apple.com/xcode/)

3.Run Expo in development mode with iOS simulator

```bash
yarn ios:dev
```

### **Development - Expo app (iOS)**

1.Create `client-mobile/.env` file. Inside, set the following content:

```bash
EXPO_PUBLIC_API_URL=http://X.X.X.X:3000/graphql
```

Replace `X.X.X.X` with the actual IP address of your machine in a local network (it usually starts with `192.168`).

2.[Install Expo Go app](https://apps.apple.com/pl/app/expo-go/id982107779?l=pl) on your phone

3.Run Expo in development mode

```bash
yarn start
```

4.Open Expo Go app on your phone and scan the QR code in the terminal.

## Generating API Schema

`client-mobile/src/api/graphql/*` folder contains GraphQL mutations and queries. In order to use them in the app, you can use an automatically generated file with API Schema - `client-mobile/src/api/schema.ts`. This file contains React Hooks with correct typing, as well as all API-related types.
To recreate schema file, use the following script (requires running `server`):

```bash
yarn schema
```

## E2E tests

In order to run E2E tests, you need to install [Maestro](https://maestro.mobile.dev/).

```bash
curl -Ls "https://get.maestro.mobile.dev" | bash
export PATH="$PATH":"$HOME/.maestro/bin"
```

### **iOS**

Before running Flows on iOS Simulator, install Facebook IDB tool.

```bash
brew tap facebook/fb
brew install facebook/fb/idb-companion
```

Next, make sure that you have a running `server`, and app running via simulator in separate tabs.

To run tests, simply run the following command:

```bash
yarn test:e2e
```

If you want to write your own tests, refer to [https://maestro.mobile.dev/getting-started/writing-your-first-flow](https://maestro.mobile.dev/getting-started/writing-your-first-flow) and [https://maestro.mobile.dev/getting-started/maestro-studio](https://maestro.mobile.dev/getting-started/maestro-studio).

## CLI Scripts

### **Expo - development mode**

```bash
yarn start
```

### **Expo - release mode (Android simulator)**

```bash
yarn android
```

### **Expo - development mode (Android simulator)**

```bash
yarn android:dev
```

### **Prebuild the app for Android**

```bash
yarn android:prebuild
```

### **Expo - release mode (iOS simulator)**

```bash
yarn ios
```

### **Expo - development mode (iOS simulator)**

```bash
yarn ios:dev
```

### **Prebuild the app for iOS**

```bash
yarn ios:prebuild
```

### **Lint source code**

```bash
yarn lint
```

### **Lint source code and fix lint issues**

```bash
yarn lint:fix
```

### **Generate API schema (requires running `server`)**

```bash
yarn schema
```

### **Run E2E tests (requires running `server`, and app running via simulator)**

```bash
yarn test:e2e
```
