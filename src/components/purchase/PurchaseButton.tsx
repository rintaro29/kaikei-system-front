import React from "react";
import Link from "next/link";

const PurchaseButton = () => {
  return (
    <Link href="apply">
      <div className="flex items-center justify-center mt-10">
        <button
          className="text-2xl text-white bg-indigo-500 opacity-70 hover:bg-indigo-300 p-10 rounded-3xl 
        shadow-xl transform transition ease-out duration-150 active:scale-95"
        >
          購入申請画面へ
        </button>
      </div>
    </Link>
  );
};

export default PurchaseButton;
