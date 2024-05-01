/**
 * DECENTVOTE | Voting dApp made by ZiLab Technologies
 *
 * www.zilab.co
 * Telegram: @zilab_technologies
 */
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import useThemeStore from "@/store/themeStore";

export default function ToggleSidebarButton({
  className,
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const toggleSidebar = useThemeStore((state) => state.toggleSidebar);
  return (
    <Button
      variant={"ghost"}
      size={"icon"}
      className={className}
      onClick={() => toggleSidebar()}
    >
      <MenuIcon />
    </Button>
  );
}
