import { Theme } from "@client/theme"

declare module "dripsy" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DripsyCustomTheme extends Theme {}
}
