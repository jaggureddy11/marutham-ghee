import React from 'react';
import { motion } from 'motion/react';

const PRODUCTS = {
    "ghee_gold_label_200ml": {
        id: "ghee_gold_label_200ml",
        name: "A2 Desi Cow Ghee (200 ml)",
        price: 820,
        originalPrice: 1150,
        img: "/product_jar_front.jpg",
        desc: "Bilona method crafted from free-grazing Hallikar cow milk."
    },
    "ghee_gold_label_500ml": {
        id: "ghee_gold_label_500ml",
        name: "A2 Desi Cow Ghee (500 ml)",
        price: 1850,
        originalPrice: 2100,
        img: "/product_jar_front.jpg",
        desc: "Bilona method crafted from free-grazing Hallikar cow milk."
    },
    "ghee_gold_label_1l": {
        id: "ghee_gold_label_1l",
        name: "A2 Desi Cow Ghee (1 Litre)",
        price: 3450,
        originalPrice: 3900,
        img: "/product_jar_front.jpg",
        desc: "Bilona method crafted from free-grazing Hallikar cow milk."
    },
    "ghee_gold_label": {
        id: "ghee_gold_label",
        name: "Gold Label Reserve A2 Desi Ghee",
        price: 1850,
        originalPrice: 2100,
        img: "/product_jar_front.jpg",
        desc: "Bilona method crafted from free-grazing Hallikar cow milk."
    }
};

export default function CartDrawer({ isOpen, onClose, cart, updateCartQty }) {
    // Calculate totals
    let subtotal = 0;
    cart.forEach(item => {
        const prod = PRODUCTS[item.id];
        if (prod) {
            subtotal += prod.price * item.qty;
        }
    });

    const freeShippingThreshold = 2000;
    const isFreeShipping = subtotal >= freeShippingThreshold;
    const diff = freeShippingThreshold - subtotal;
    const shippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

    return (
        <div className="relative">
            {/* Backdrop */}
            {isOpen && (
                <motion.div
                    id="cart-drawer-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-earth-brown/50 backdrop-blur-sm z-[100] cursor-pointer"
                />
            )}

            {/* Drawer Body */}
            {isOpen && (
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", damping: 30, stiffness: 300 }}
                    className="fixed top-0 right-0 w-full max-w-md h-full bg-warm-cream border-l border-earth-brown/10 p-6 md:p-8 flex flex-col justify-between shadow-2xl z-[101]"
                >
                    <div>
                        {/* Header */}
                        <div className="flex justify-between items-center pb-6 border-b border-earth-brown/10">
                            <h3 className="font-display-lg text-headline-md text-earth-brown font-bold">Shopping Cart</h3>
                            <button
                                id="cart-close-btn"
                                onClick={onClose}
                                className="p-2 hover:opacity-70 transition-opacity cursor-pointer flex items-center justify-center"
                            >
                                <span className="material-symbols-outlined text-2xl">close</span>
                            </button>
                        </div>

                        {/* Free Shipping Bar */}
                        <div className="py-4 border-b border-earth-brown/10">
                            <p className="font-label-sm text-xs text-earth-brown/80 mb-2">
                                {isFreeShipping ? (
                                    <span className="text-ghee-gold font-bold flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">check_circle</span>
                                        You've unlocked FREE shipping!
                                    </span>
                                ) : (
                                    `Add ₹${diff.toLocaleString('en-IN')} more to unlock FREE shipping!`
                                )}
                            </p>
                            <div className="w-full h-1.5 bg-earth-brown/10 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${shippingProgress}%` }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="h-full bg-ghee-gold"
                                />
                            </div>
                        </div>

                        {/* Cart Items List */}
                        <div className="py-6 overflow-y-auto max-h-[55vh] space-y-4">
                            {cart.length === 0 ? (
                                <div className="py-8 text-center flex flex-col items-center">
                                    <p className="font-body-md text-earth-brown/50 mb-6">
                                        Your shopping bag is empty.
                                    </p>
                                    <div className="bg-white/40 border border-earth-brown/10 p-5 rounded-2xl w-full max-w-[280px] flex flex-col items-center subtle-shadow">
                                        <img src="/product_jar_front.jpg" alt="Recommended Ghee" className="w-20 h-20 object-contain mb-3" />
                                        <h4 className="font-label-lg text-xs text-earth-brown font-bold mb-1">A2 Desi Cow Ghee (500 ml)</h4>
                                        <p className="text-[10px] text-ghee-gold font-bold mb-3">₹ 1,850.00</p>
                                        <button
                                            onClick={() => updateCartQty('ghee_gold_label_500ml', 1)}
                                            className="bg-earth-brown text-warm-cream px-5 py-2.5 text-[10px] font-label-lg font-bold rounded hover:bg-ghee-gold hover:text-earth-brown transition-colors cursor-pointer select-none btn-shimmer"
                                        >
                                            Quick Add to Bag
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                cart.map(item => {
                                    const prod = PRODUCTS[item.id];
                                    if (!prod) return null;
                                    return (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="flex items-center gap-4 py-4 border-b border-earth-brown/5"
                                        >
                                            <img src={prod.img} alt={prod.name} className="w-16 h-16 object-contain bg-white border border-earth-brown/10 p-1" />
                                            <div className="flex-1">
                                                <h5 className="font-label-lg text-sm text-earth-brown font-bold leading-snug">{prod.name}</h5>
                                                <p className="font-label-sm text-xs text-earth-brown/60 mb-2">₹ {prod.price.toLocaleString('en-IN')}</p>

                                                {/* Qty controls */}
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => updateCartQty(item.id, item.qty - 1)}
                                                        className="w-6 h-6 border border-earth-brown/20 flex items-center justify-center font-bold text-xs hover:bg-earth-brown hover:text-white transition-colors cursor-pointer"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="font-label-sm text-xs w-6 text-center">{item.qty}</span>
                                                    <button
                                                        onClick={() => updateCartQty(item.id, item.qty + 1)}
                                                        className="w-6 h-6 border border-earth-brown/20 flex items-center justify-center font-bold text-xs hover:bg-earth-brown hover:text-white transition-colors cursor-pointer"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <span className="font-label-lg text-sm text-earth-brown font-bold">
                                                    ₹ {(prod.price * item.qty).toLocaleString('en-IN')}
                                                </span>
                                                <button
                                                    onClick={() => updateCartQty(item.id, 0)}
                                                    className="block font-label-sm text-xs text-error mt-2 hover:underline cursor-pointer"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </motion.div>
                                    );
                                })
                            )}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-earth-brown/10 pt-6">
                        <div className="flex justify-between items-center mb-6">
                            <span className="font-label-lg text-label-lg text-earth-brown/80">Subtotal</span>
                            <span className="font-headline-md text-headline-md text-earth-brown font-bold">
                                ₹ {subtotal.toLocaleString('en-IN')}
                            </span>
                        </div>
                        <button
                            onClick={() => alert("Checkout initiated! Thank you for purchasing from Marutham.")}
                            className="w-full bg-earth-brown text-warm-cream py-5 font-label-lg text-label-lg uppercase tracking-wider hover:bg-earth-brown/90 hover:scale-[1.01] active:scale-100 transition-all duration-300 cursor-pointer"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
