// import Image from "next/image";
// import React from "react";

// export default function CartPage() {
//   return (
//     <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
//       <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
//         <div className="flex items-center justify-between mb-4">
//           <Image
//             src={"/temporary/p1.png"}
//             alt="temporary img"
//             width={100}
//             height={100}
//           />

//           <div>
//             <h1 className="uppercase text-xl font-bold">sicilian</h1>
//             <span>Large</span>
//           </div>
//           <h2 className="font-bold">$79.90</h2>
//           <span className="text-red-500 cursor-pointer">X</span>
//         </div>

//         <div className="flex items-center justify-between mb-4">
//           <Image
//             src={"/temporary/p2.png"}
//             alt="temporary img"
//             width={100}
//             height={100}
//           />

//           <div>
//             <h1 className="uppercase text-xl font-bold">pepperoni</h1>
//             <span>Medium</span>
//           </div>
//           <h2 className="font-bold">$59.90</h2>
//           <span className="text-red-500 cursor-pointer">X</span>
//         </div>
//         <div className="flex items-center justify-between mb-4">
//           <Image
//             src={"/temporary/p3.png"}
//             alt="temporary img"
//             width={100}
//             height={100}
//           />

//           <div>
//             <h1 className="uppercase text-xl font-bold">vegetarian</h1>
//             <span>Small</span>
//           </div>
//           <h2 className="font-bold">$39.90</h2>
//           <span className="text-red-500 cursor-pointer">X</span>
//         </div>
//       </div>

//       <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6 ">
//         <div className="flex justify-between">
//           <span>Subtotal (3 items)</span>
//           <span>$81.70</span>
//         </div>

//          <div className="flex justify-between">
//           <span>Service Cost</span>
//           <span>$81.70</span>
//         </div>

//          <div className="flex justify-between">
//           <span>Delivery Cost</span>
//           <span>FREE!</span>
//         </div>

//         <hr />

//         <div className="flex justify-between">
//           <span className="text-2xl font-bold">Total</span>
//           <span className="text-2xl font-bold">$81.70</span>
//           <span>$81.70</span>
//         </div>

//         <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end ">Checkout</button>
//       </div>
//     </div>
//   );
// }


"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function CartPage() {
  // 1️⃣ Cart state
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "sicilian",
      size: "Large",
      price: 79.9,
      img: "/temporary/p1.png",
    },
    {
      id: 2,
      name: "pepperoni",
      size: "Medium",
      price: 59.9,
      img: "/temporary/p2.png",
    },
    {
      id: 3,
      name: "vegetarian",
      size: "Small",
      price: 39.9,
      img: "/temporary/p3.png",
    },
  ]);

  // 2️⃣ Remove item handler
  const handleRemove = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // 3️⃣ Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* Left Side - Cart Items */}
      <div className="h-1/2 p-4 flex flex-col justify-center lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-4">
            <Image src={item.img} alt={item.name} width={100} height={100} />
            <div>
              <h1 className="uppercase text-xl font-bold">{item.name}</h1>
              <span>{item.size}</span>
            </div>
            <h2 className="font-bold">${item.price.toFixed(2)}</h2>
            <span
              className="text-red-500 cursor-pointer"
              onClick={() => handleRemove(item.id)}
            >
              X
            </span>
          </div>
        ))}

        {cartItems.length === 0 && (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>

      {/* Right Side - Summary */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-10 xl:px-20 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span>Subtotal ({cartItems.length} items)</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Service Cost</span>
          <span>$5.00</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery Cost</span>
          <span>FREE!</span>
        </div>

        <hr />

        <div className="flex justify-between">
          <span className="text-2xl font-bold">Total</span>
          <span className="text-2xl font-bold">
            ${(subtotal + 5).toFixed(2)}
          </span>
        </div>

        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          Checkout
        </button>
      </div>
    </div>
  );
}
