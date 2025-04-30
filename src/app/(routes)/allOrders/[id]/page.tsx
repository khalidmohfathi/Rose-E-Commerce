"use client";
import { fetchSpecificOrder } from "@/lib/api/orders.api";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function OrderDetails() {
  const [order, setOrder] = useState<Order | null>(null);
  const { id }: { id: string } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSpecificOrder(id);
      setOrder(data);
      console.log(data);
    };

    fetchData();
  }, []);

  if (!order) {
    return (
      <main className="main-container">
        <p className="text-red-500">Loading your order...</p>
      </main>
    );
  }

  return (
    <main className="main-container bg-gray-100 rounded-3xl shadow-lg">
      <div className="p-4">
        <h6 className="font-normal text-blue-600">
          <span className="font-semibold text-black">Order ID:</span>{" "}
          {order._id}
        </h6>
        <h6 className="font-semibold">
          Total Payment Price:{" "}
          <span className="text-blue-600 font-normal">
            {order.totalPrice} EGP
          </span>
        </h6>
        <h6 className="font-semibold flex items-center">
          Payment Method:
          <span className="ml-2 inline-block px-3 py-1 rounded-full bg-primary text-white text-sm">
            {order.paymentType}
          </span>
        </h6>
        <h6 className="text-gray-500 font-normal">
          {new Date(order.createdAt).toLocaleString()}
        </h6>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-center border border-gray-200 bg-white">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3 border-b">Product</th>
              <th className="px-4 py-3 border-b">Price</th>
              <th className="px-4 py-3 border-b">Quantity</th>
            </tr>
          </thead>
          <tbody className="divide-y font-normal text-gray-800">
            {order.orderItems.map((item) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <Link
                    href={`/products/${item.product._id}`}
                    className="flex flex-wrap justify-center items-center"
                  >
                    <img src={item.product.imgCover} alt="" className="w-16" />
                    <p className="ml-2">
                      {item.product.title.split(" ").slice(0, 3).join(" ")}
                    </p>
                  </Link>
                </td>
                <td className="px-4 py-3">{item.price} EGP</td>
                <td className="px-4 py-3">{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
