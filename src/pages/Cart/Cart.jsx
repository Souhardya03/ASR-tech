import React, { use, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { products } from '../../data';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'LCD Monitor',
      price: 650,
      quantity: 1,
      image: 'monitor'
    },
    {
      id: 2,
      name: 'H1 Gamepad',
      price: 550,
      quantity: 2,
      image: 'gamepad'
    }
  ]);

  const [couponCode, setCouponCode] = useState('');

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCartItems = products.filter(product => storedCart.includes(product.id)).map(product => ({
      ...product,
      quantity: 1
    }));
    setCartItems(updatedCartItems);
  }, []);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
    
  };

  const removeItem = (id) => {
    localStorage.setItem("cart", JSON.stringify(JSON.parse(localStorage.getItem("cart")).filter(itemId => itemId !== id)));
    setCartItems(cartItems.filter(item => item.id !== id));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen px-14 my-32 bg-white">
      <div className="mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-lg mb-12">
          <span className="text-gray-500">Home</span>
          <span className="text-gray-500">/</span>
          <span className="text-black font-medium">Cart</span>
        </div>

        {/* Cart Table */}
        <div className="mb-8">
          {/* Table Header */}
          <div className="grid grid-cols-4 text-xl gap-8 py-6 px-8 shadow-sm mb-8">
            <div className="font-normal">Product</div>
            <div className="font-normal">Price</div>
            <div className="font-normal">Quantity</div>
            <div className="font-normal text-right">Subtotal</div>
          </div>

          {/* Cart Items */}
          {cartItems.map((item) => (
            <div key={item.id} className="grid grid-cols-4 gap-8 py-6 px-8 shadow-sm mb-4 items-center">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                    <img src={item.image} alt={item.name} className="max-w-full max-h-full" />
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <span className="font-normal text-lg">{item.name}</span>
              </div>
              <div className="font-normal text-lg">${item.price}</div>
              <div className="flex items-center border border-gray-300 rounded w-fit">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-50"
                >
                  −
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                  className="w-16 h-10 text-center border-x border-gray-300 outline-none"
                  min="1"
                />
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
              <div className="font-normal text-lg text-right">${item.price * item.quantity}</div>
            </div>
          ))}
        </div>

        {/* Return to Shop Button */}
        <div className="mb-16">
          <button className="px-12 text-lg py-4 border-2 border-gray-300 rounded hover:bg-gray-50 font-medium">
            Return To Shop
          </button>
        </div>

        {/* Coupon and Cart Total */}
        <div className="flex gap-8 justify-between items-start">
          {/* Coupon Code */}
          <div className="flex gap-4 flex-1 max-w-xl">
            <input
              type="text"
              placeholder="Coupon Code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="flex-1 px-6 py-4 border border-gray-300 rounded"
            />
            <button className="px-12 text-lg py-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded">
              Apply Coupon
            </button>
          </div>

          {/* Cart Total */}
          <div className="w-full max-w-3xl border-2 border-black rounded p-8">
            <h2 className="text-xl font-medium mb-6">Cart Total</h2>
            
            <div className="space-y-4">
              <div className="flex text-lg justify-between py-4 border-b border-gray-300">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>
              
              <div className="flex text-lg justify-between py-4 border-b border-gray-300">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              
              <div className="flex text-lg justify-between py-4">
                <span>Total:</span>
                <span className="font-medium">${total}</span>
              </div>
            </div>

            <button className="w-full text-lg mt-6 py-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded">
              Process to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}