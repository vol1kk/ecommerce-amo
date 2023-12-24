import { AccountCategories } from "@/components/Account/constants/AccountCategories";
import SidebarLogout from "@/components/Account/components/SidebarLogout";
import { LogoutIcon } from "@/components/common/Icons";
import { AccountLink } from "@/components/Account/components/AccountLink";

export default function Sidebar() {
  return (
    <aside>
      <nav className="grid justify-center">
        <ul className="text-lg font-semibold text-lightColor [&>li]:flex [&>li]:w-[250px] [&>li]:items-center [&>li]:gap-4 [&>li]:py-2">
          {AccountCategories.map(category => (
            <AccountLink
              key={category.href}
              href={category.href}
              name={category.name}
              icon={category.icon}
            />
          ))}
          <li className="text-color justify-center text-base text-red-500 [&_svg>path]:fill-red-500">
            <LogoutIcon width={16} />
            <SidebarLogout />
          </li>
        </ul>
      </nav>
    </aside>
  );
}
