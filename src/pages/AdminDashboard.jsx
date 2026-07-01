import React from 'react';
import { motion } from 'motion/react';

export default function AdminDashboard({ setCurrentPage }) {
    const handleLogout = () => {
        localStorage.removeItem('marutham_jwt');
        alert("Logged out successfully");
        setCurrentPage('home');
    };

    return (
        <div className="pt-24 min-h-screen px-6 max-w-7xl mx-auto mb-20">
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-4xl font-display-lg text-earth-brown font-bold tracking-tight">Admin Dashboard</h1>
                <button 
                    onClick={handleLogout}
                    className="text-sm font-label-md bg-earth-brown/10 text-earth-brown hover:bg-earth-brown hover:text-warm-cream transition-colors px-6 py-2 rounded-md"
                >
                    Log Out
                </button>
            </div>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                <div className="bg-white p-8 rounded-xl shadow-sm border border-earth-brown/10 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg mb-2 text-earth-brown/70 font-label-lg uppercase tracking-wider text-xs">Total Sales</h3>
                    <p className="text-4xl font-bold text-ghee-gold">₹1,24,500</p>
                    <p className="text-xs text-green-600 mt-2 font-medium">↑ 12% from last month</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-earth-brown/10 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg mb-2 text-earth-brown/70 font-label-lg uppercase tracking-wider text-xs">Pending Orders</h3>
                    <p className="text-4xl font-bold text-earth-brown">12</p>
                    <p className="text-xs text-earth-brown/60 mt-2 font-medium">Requires fulfillment</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-earth-brown/10 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg mb-2 text-earth-brown/70 font-label-lg uppercase tracking-wider text-xs">Inventory Alert</h3>
                    <p className="text-2xl font-bold text-red-500 mt-2">200ml Ghee Low</p>
                    <p className="text-xs text-red-500/80 mt-1 font-medium">Only 5 units remaining in stock</p>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-10 bg-white p-8 rounded-xl shadow-sm border border-earth-brown/10"
            >
                <h3 className="font-bold text-xl mb-6 text-earth-brown font-display-md">Recent Orders</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-earth-brown/10 text-xs font-label-lg tracking-wider text-earth-brown/60 uppercase">
                                <th className="pb-3 pr-4">Order ID</th>
                                <th className="pb-3 pr-4">Customer</th>
                                <th className="pb-3 pr-4">Status</th>
                                <th className="pb-3">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-body-md text-earth-brown">
                            <tr className="border-b border-earth-brown/5 hover:bg-warm-cream/50 transition-colors">
                                <td className="py-4 pr-4 font-bold">#ORD-0012</td>
                                <td className="py-4 pr-4">Aarav Patel</td>
                                <td className="py-4 pr-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Processing</span></td>
                                <td className="py-4 font-bold">₹1,850</td>
                            </tr>
                            <tr className="border-b border-earth-brown/5 hover:bg-warm-cream/50 transition-colors">
                                <td className="py-4 pr-4 font-bold">#ORD-0011</td>
                                <td className="py-4 pr-4">Priya Sharma</td>
                                <td className="py-4 pr-4"><span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Shipped</span></td>
                                <td className="py-4 font-bold">₹3,450</td>
                            </tr>
                            <tr className="hover:bg-warm-cream/50 transition-colors">
                                <td className="py-4 pr-4 font-bold">#ORD-0010</td>
                                <td className="py-4 pr-4">Rahul Desai</td>
                                <td className="py-4 pr-4"><span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Delivered</span></td>
                                <td className="py-4 font-bold">₹820</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </div>
    );
}
