import { FooterMenu } from "@client/components/molecules/FooterMenu"
import { itemPaths, items } from "@client/containers/FooterContainer/config"
import { Path } from "@client/routing/paths"
import { usePathname } from "expo-router"

export const FooterContainer: React.FC = () => {
  const pathname = usePathname()

  const footerItems = items.map((item) => ({
    ...item,
    isActive: pathname === item.href,
  }))

  // TODO: Animate footer appearing and disappearing somehow
  return itemPaths.includes(pathname as Path) ? <FooterMenu items={footerItems} /> : null
}
