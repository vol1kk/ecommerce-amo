import cn from "@/utils/cn";
import { SidebarCategories } from "@/layouts/Sidebar";
import SidebarItem from "@/layouts/Sidebar/components/SidebarItem";

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  return (
    <nav>
      <ul
        className={cn(
          "flex flex-wrap justify-center gap-4 text-xl text-lightColor",
          className,
        )}
      >
        {SidebarCategories.map(category => (
          <SidebarItem
            key={category.name}
            href={category.href}
            icon={category.icon}
            name={category.name}
          />
        ))}
      </ul>
    </nav>
  );
}
