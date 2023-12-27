import { Header } from "@client/components/molecules/Header"
import { itemPaths } from "@client/containers/FooterContainer/config"
import { Path } from "@client/routing/paths"
import { usePathname } from "expo-router"
import { useState } from "react"

export const HeaderContainer: React.FC = () => {
  const [searchInputValue, onSearchInputValueChange] = useState<string>("")
  const pathname = usePathname()

  // TODO: Animate header appearing and disappearing somehow
  return itemPaths.includes(pathname as Path) ? (
    <Header
      searchInputValue={searchInputValue}
      onSearchInputValueChange={onSearchInputValueChange}
    />
  ) : null
}
