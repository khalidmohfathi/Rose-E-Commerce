import { fetchAllOrders } from "@/lib/api/orders.api";
import Link from "next/link";
import React from "react";

export default async function page() {
  let orders: Order[] = [];
  try {
    orders = await fetchAllOrders();
  } catch {
    return (
      <main className="main-container">
        <p className="text-red-500">
          Failed to load orders. Please try again later.
        </p>
      </main>
    );
  }

  return (
    <main className="main-container">
      <h2 className="text-main text-3xl font-bold section-header mb-8">
        My Orders
      </h2>
      <div className="overflow-x-auto rounded-2xl border border-main">
        <table className="min-w-full text-center">
          <thead className="bg-main text-white">
            <tr>
              <th className="py-3 px-4 border-b">#</th>
              <th className="py-3 px-4 border-b">Order Date</th>
              <th className="py-3 px-4 border-b">Order Price</th>
              <th className="py-3 px-4 border-b">Status</th>
              <th className="py-3 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item) => (
              <tr key={item._id} className="border-t hover:bg-gray-100">
                <td className="py-3 px-4">{item.orderNumber}</td>
                <td className="py-3 px-4 text-nowrap">
                  {new Date(item.createdAt).toDateString()}
                </td>
                <td className="py-3 px-4 text-nowrap">{item.totalPrice} EGP</td>
                <td className="py-3 px-4">
                  <div className="flex flex-col items-center space-y-1">
                    <span
                      className={`px-2 py-1 rounded text-white text-sm ${
                        item.isPaid ? "bg-green-600" : "bg-red-600"
                      }`}
                    >
                      isPaid
                    </span>
                    <span
                      className={`px-2 py-1 rounded text-white text-sm ${
                        item.isDelivered ? "bg-green-600" : "bg-red-600"
                      }`}
                    >
                      isDelivered
                    </span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <Link
                    href={"/allOrders/" + item._id}
                    className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
