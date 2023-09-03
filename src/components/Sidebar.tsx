import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import WorkIcon from "@mui/icons-material/Work";
import RedditIcon from "@mui/icons-material/Reddit";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type SidebarProps = {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

// menuItemsの型定義
interface MenuItem {
  id: number;
  label: string;
  icon: React.ComponentType;
  link: string;
}

const menuItems: MenuItem[] = [
  { id: 1, label: "ホーム", icon: HomeIcon, link: "/" },
  { id: 2, label: "購入申請", icon: ShoppingCartCheckoutIcon, link: "/purchase" },
  { id: 3, label: "収支", icon: MonetizationOnIcon, link: "/money" },
  { id: 4, label: "購入品", icon: WorkIcon, link: "/goodsDetail" },
];

const Sidebar: React.FC<SidebarProps> = ({ setIsLoggedIn }) => {
  const [toggleCollapse, setToggleCollapse] = useState<boolean>(false);
  const [isCollapsible, setIsCollapsible] = useState<boolean>(false);

  const router = useRouter();

  <div className="bg"></div>;
  const activeMenu = useMemo(() => menuItems.find((menu) => menu.link === router.pathname), [router.pathname]);

  const wrapperClasses = classNames(
    "text-black bg-indigo-500 opacity-70 h-screen  px-4 pt-8 pb-4  flex justify-between flex-col ",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames("p-4 rounded bg-slate-400 absolute right-0", {
    "rotate-180": toggleCollapse,
  });

  const getNavItemClasses = (menu: Partial<MenuItem>) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-slate-200 rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-slate-200"]: activeMenu?.id === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative  rounded p-2">
          <div className="flex items-center  gap-4">
            <RedditIcon />
            <span
              className={classNames(" text-green-400 text-lg font-medium text-text", {
                hidden: toggleCollapse,
              })}
            >
              立命 太郎
            </span>
          </div>
          {isCollapsible && (
            <button className={collapseIconClasses} onClick={handleSidebarToggle}>
              <ArrowForwardIosIcon />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div key={menu.id} className={classes}>
                <Link href={menu.link} className="flex py-4 px-3 items-center w-full h-full">
                  <div style={{ width: "2.5rem" }}>
                    <Icon />
                  </div>
                  {!toggleCollapse && (
                    <span className={classNames("text-md font-medium text-text-light")}>{menu.label}</span>
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <Link href="/login">
        <div className={`${getNavItemClasses({})} px-3 py-4`} onClick={(e) => setIsLoggedIn(false)}>
          <div style={{ width: "2.5rem" }}>
            <LogoutIcon />
          </div>
          {!toggleCollapse && (
            <span className={classNames("text-md text-pink-700  font-medium text-text-light")}>ログアウト</span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;

// import classNames from "classnames";
// import React, { useState } from "react";
// const Sidebar = () => {
//   const [toggleCollapse, setToggleCollapse] = useState(false);
//   const wrapperClasses = classNames("h-screen px-4 pt-8 pb-4 bg-white flex justify-between flex-col  w-50", {
//     ["w-80"]: !toggleCollapse,
//     ["w-20"]: toggleCollapse,
//   });

//   const collapseIconClasses = classNames("p")
//   return (
//     <div className={wrapperClasses}>
//       <div className="flex flex-col">
//         <div className="flex items-center justify-between relative">
//         <div className=" flex items-center pl-1 gap-4">
//       <LogoIcon />
//       <span className={classNames("mt-2 text-lg font-medium text-black", { hidden: toggleCollapse })}>Logo</span>
//       </div>
//       <button>
//         <CollapseIcon/>
//       </button>
//         </div>

//          </div>

//       <div></div>
//     </div>
//   );
// };

// export default Sidebar;
