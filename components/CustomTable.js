"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const CustomTable = ({ data }) => {
  return (
    <Card className="w-full text-2xl">
      <CardHeader>
        <CardTitle className="text-right">قائمة الأسبوع</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-2 border-2 text-center" colSpan={2}>
                  المقدار
                </th>
                <th className="p-2 border-t-2 border-r-2 border-l-2 border-b-0 text-right">
                  الاسم الكامل{" "}
                </th>
                <th className="p-2 border-2 text-right text-center">
                  رقم المجموعة
                </th>
              </tr>
              <tr>
                <th className="p-2 border-2 text-center">الحفظ</th>
                <th className="p-2 border-2 text-center">المراجعة</th>
                <th className="p-2 border-2 text-center"></th>
                <th className="p-2 border-2 text-center"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="text-right">
                  <td className="p-2 border-2 text-right"></td>
                  <td className="p-2 border-2 text-right"></td>
                  <td className="p-2 border-2">
                    {row[0]}
                    <div className="border-t-2 w-full mx-0">{row[1]}</div>
                  </td>
                  <td className="p-2 border-2 text-right">{index + 1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomTable;
