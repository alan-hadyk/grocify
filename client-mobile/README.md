# Grocify - mobile client

## Build the app

```bash
yarn prebuild:ios
cd ios/
pod install
xcodebuild clean -workspace Grocify.xcworkspace -scheme Grocify -sdk iphonesimulator -configuration Debug build ARCHS=arm64
```
