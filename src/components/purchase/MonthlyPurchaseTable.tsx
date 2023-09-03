import React from "react";

type PurchaseData = {
  purchaseDate: string;
  itemName: string;
  price: number;
  applicant: string;
  applicationStatus: string;
  applicationDate: string;
  approvalDate: string;
  receipt: string;
};

type MonthlyPurchaseTableProps = {
  month: string;
  data: PurchaseData[];
};

const MonthlyPurchaseTable: React.FC<MonthlyPurchaseTableProps> = ({ month, data }) => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <div>
        <p className="text-2xl font-bold m-3 ml-0">{month}</p>
      </div>
      <table className="min-w-1/3 table-auto">
        <thead className="bg-gray-400">
          <tr>
            <th className="px-4 py-2 border-r-2 ">購入日</th>
            <th className="px-4 py-2 border-r-2">購入品名</th>
            <th className="px-4 py-2 border-r-2">金額</th>
            <th className="px-4 py-2 border-r-2">申請者</th>
            <th className="px-4 py-2 border-r-2">申請状況</th>
            <th className="px-4 py-2 border-r-2">申請日</th>
            <th className="px-4 py-2 border-r-2">承認日</th>
            <th className="px-4 py-2 border-r-2 ">領収書</th>
          </tr>
        </thead>
        <tbody>
          {data.map((purchase, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{purchase.purchaseDate}</td>
              <td className="border px-4 py-2">{purchase.itemName}</td>
              <td className="border px-4 py-2">{purchase.price}</td>
              <td className="border px-4 py-2">{purchase.applicant}</td>
              <td
                className={`px-4 py-2 ${purchase.applicationStatus === "申請中" ? "text-red-500" : "text-green-500"}`}
              >
                {purchase.applicationStatus}
              </td>
              <td className="border px-4 py-2">{purchase.applicationDate}</td>
              <td className="border px-4 py-2">{purchase.approvalDate}</td>
              <td className="border px-4 py-2 text-cyan-400">{purchase.receipt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonthlyPurchaseTable;
