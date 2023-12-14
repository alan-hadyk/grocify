import { FooterMenu } from "@client/components/molecules/FooterMenu"
import { items } from "@client/containers/FooterContainer/config"
import { usePathname } from "expo-router"

export const FooterContainer: React.FC = () => {
  const pathname = usePathname()

  const footerItems = items.map((item) => ({
    ...item,
    isActive: pathname === item.href,
  }))

  return <FooterMenu items={footerItems} />
}
