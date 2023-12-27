import { Header } from "@client/components/molecules/Header"
import { useState } from "react"

export const HeaderContainer: React.FC = () => {
  const [searchInputValue, onSearchInputValueChange] = useState<string>("")

  return (
    <Header
      searchInputValue={searchInputValue}
      onSearchInputValueChange={onSearchInputValueChange}
    />
  )
}
