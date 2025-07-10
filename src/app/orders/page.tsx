 
const orders = [
  {
    id: "1237861238721",
    date: "19.07.2023",
    price: 89.9,
    products: "Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)",
    status: "On the way (approx. 10min)...",
  },
  {
    id: "1237861238722",
    date: "20.07.2023",
    price: 109.5,
    products: "Cheese Burger (1), Chicken Wings (6), Pepsi 500ml (1)",
    status: "Delivered",
  },
  {
    id: "1237861238723",
    date: "21.07.2023",
    price: 49.9,
    products: "Veg Wrap (1), Lemon Soda (1)",
    status: "Preparing...",
  },
];
 
export default function OrdersPage() {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <h1 className="text-2xl font-bold mb-6 text-red-500">Your Orders</h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full text-sm md:text-base text-left border-collapse">
          <thead className="bg-red-100 text-red-700 uppercase tracking-wide">
            <tr>
              <th className="hidden md:table-cell px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Price</th>
              <th className="hidden md:table-cell px-4 py-3">Products</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={order.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-red-50 transition duration-300`}
              >
                <td className="hidden md:table-cell px-4 py-4 font-mono">
                  #{order.id}
                </td>
                <td className="px-4 py-4">{order.date}</td>
                <td className="px-4 py-4 font-semibold text-red-600">
                  ${order.price.toFixed(2)}
                </td>
                <td className="hidden md:table-cell px-4 py-4">
                  {order.products}
                </td>
                <td className="px-4 py-4 text-sm text-green-600">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
 