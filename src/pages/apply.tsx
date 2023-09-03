import Link from "next/link";
import React from "react";

const apply = () => {
  return (
    <div className="flex flex-col  justify-center h-screen py-4 sm:px-6 lg:px-8">
      <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-md">
        <div className=" py-8 px-4  sm:px-10">
          <form>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                購入品名
              </label>
              <input
                id="purchase"
                name="purchase"
                type="text"
                autoComplete="purchase"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-md py-2 px-3 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mt-6">
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                金額
              </label>
              <input
                id="amount"
                name="amount"
                type="text"
                autoComplete="off"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-md py-2 px-3 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 no-spinners"
              />
            </div>
            <div className="mt-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                申請者
              </label>
              <input
                id="applicant"
                name="applicant"
                type="text"
                autoComplete="off"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-md py-2 px-3 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mt-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                申請内容
              </label>
              <textarea
                id="description"
                name="description"
                required
                className="h-28 mt-1 block w-full border border-gray-300 rounded-md shadow-md py-1 px-3 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
            <Link href="applyCompleted">
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full mt-2 py-2 px-4 border border-transparent rounded-md shadow-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  購入申請
                </button>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default apply;
