import React from "react";

type DisplayBudgetProps = {
  budget: number;
};

const DisplayBudget = (props: DisplayBudgetProps) => {
  return (
    <div className="flex justify-center">
      <div className="py-1 px-1 mt-7 mx-7 bg-gray-300 rounded-3xl w-3/4 h-32 relative">
        <div>
          <p className="text-2xl text-gray-600 font-bold ml-16 mt-6">部費残高</p>
        </div>
        <div className="flex justify-end ">
          <p className="text-3xl text-gray-600 font-bold m-3 absolute ml-16 mb-6">￥{props.budget.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayBudget;
