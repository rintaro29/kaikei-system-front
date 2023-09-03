import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" bg-slate-50 p-4 text-black opacity-90 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex w-full items-center justify-center">
          <Image src="/images/rcc-favicon.png" alt="RCCのfaviconです" width={50} height={50} className="mr-5" />
          <h1 className="text-xl font-semibold ">
            <Link href="/">RCC会計システム</Link>
          </h1>
        </div>

        {/* <nav>
          <ul className="flex space-x-4">
            <>
              <Link href="/login" className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium">
                ログイン
              </Link>
              <Link href="/signup" className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium">
                サインアップ
              </Link>
            </>
          </ul>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
