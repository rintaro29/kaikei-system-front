import React, { useState, useEffect } from "react";
import Select from "react-select";
import MonthlyPurchaseTable from "./purchase/MonthlyPurchaseTable";

const HomePage = () => {
  const [years, setYears] = useState<{ value: number; label: string }[]>([]);

  useEffect(() => {
    const currentYear: number = new Date().getFullYear();
    const yearOptions = [];
    for (let i = 2015; i <= currentYear; i++) {
      yearOptions.push({ value: i, label: String(i) });
    }
    setYears(yearOptions);
  }, []);

  const julyData = [
    {
      purchaseDate: "7/31",
      itemName: "PC",
      price: 50000,
      applicant: "山田太郎",
      applicationStatus: "✅承認済み",
      applicationDate: "2023/7/21",
      approvalDate: "2023/7/29",
      receipt: "pc_領収書.pdf",
    },
    {
      purchaseDate: "",
      itemName: "キーボード",
      price: 7000,
      applicant: "立命花子",
      applicationStatus: "申請中",
      applicationDate: "2023/7/24",
      approvalDate: "",
      receipt: "",
    },
  ];

  const augustData = [
    {
      purchaseDate: "8/15",
      itemName: "モニター",
      price: 30000,
      applicant: "RCC太郎",
      applicationStatus: "✅承認済み",
      applicationDate: "2023/8/10",
      approvalDate: "2023/8/14",
      receipt: "領収書.pdf",
    },
    {
      purchaseDate: "",
      itemName: "マウス",
      price: 5000,
      applicant: "にぼ次郎",
      applicationStatus: "申請中",
      applicationDate: "2023/8/18",
      approvalDate: "",
      receipt: "",
    },
  ];

  return (
    <div>
      <div className="flex ml-14 mt-14 mb-10">
        <p className="text-2xl font-bold m-3">購入品情報</p>
        <Select className="m-3" options={years} />
      </div>

      <MonthlyPurchaseTable month="8月" data={julyData} />
      <MonthlyPurchaseTable month="7月" data={augustData} />
      <MonthlyPurchaseTable month="6月" data={augustData} />
      <MonthlyPurchaseTable month="5月" data={augustData} />
      <MonthlyPurchaseTable month="4月" data={augustData} />
    </div>
  );
};

export default HomePage;
