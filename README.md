# Marutham — A2 Desi Cow Ghee Storefront

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD627)](https://launchnext.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)

Marutham is a luxury, immersive digital storefront showcasing **Pure A2 Desi Cow Ghee**, traditionally crafted using the ancient Vedic Bilona method. This website combines premium editorial storytelling, smooth canvas parallax scroll dynamics, and conversion-optimized e-commerce widgets to create a premium checkout and brand experience.

---

## ✨ Key Features

### 1. Luxury Scrolling Storytelling (Hero Section)
*   **3D Parallax Walkthrough**: Track the journey of Ghee from pasture to clay pot through 4 synchronized visual cards.
*   **GSAP Canvas Timeline**: Integrates GSAP ScrollTrigger timeline states that dynamically rotate, scale, and translate the product jar while shifting the ambient background colors (from soft pastel sage to warm saffron).
*   **Cinematic Video Transition**: A parallax scroll banner featuring a custom looping background video showing the traditional bilona process.

### 2. E-Commerce Showcase & Optimization
*   **Dynamic Variant Selector**: Toggle between **200 ml** (₹820, Save 28%), **500 ml** (₹1,850, Save 12%), and **1 Litre** (₹3,450, Save 11%) with live quantity, price, and savings calculations.
*   **Shipping Progress Alert**: A real-time calculated status bar showing how much is left to unlock **FREE shipping** (threshold ₹2,000).
*   **Empty State Quick-Add Recommender**: Opened the cart bag while empty? Instant **Quick Add** card recommending our bestseller (500 ml) to maximize purchase conversions.

### 3. Interactive Lab & Purity Guide
*   **Live Chemical Simulator**: An interactive lab testing module inside the Purity Guide page. Users can drag and drop iodine or hydrochloric acid droplets onto milk and ghee cups to run real-time color changes testing for starch and coal tar dye.
*   **Detailed Heritage Guidelines**: Informative step-by-step guides on home tests, pregnancy wellness, and beauty/hair treatments using A2 ghee.

### 4. Tactile Micro-Interactions
*   **CTA Sweep Shimmer**: Button elements feature a soft, golden shimmer reflection that sweeps across the button face on hover.
*   **Spring Selector Physics**: Volume buttons scale and settle softly using Framer Motion springs for tactile button feedback.

---

## 🛠️ Technology Stack

*   **Framework**: [React](https://reactjs.org/) (JavaScript)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Vanilla Utility Engine)
*   **Animation**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://greensock.com/gsap/) (ScrollTrigger)
*   **Icons**: [Google Material Symbols](https://fonts.google.com/icons)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jaggureddy11/marutham-ghee.git
   cd marutham-ghee
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```
   *Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view the storefront.*

4. Build the project for production:
   ```bash
   npm run build
   ```
   *The built assets will be generated inside the `/dist` directory.*

---

## 📁 Directory Structure

```
├── public/                     # Static assets (images, loops, jar assets)
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Premium navigation and cart badges
│   │   ├── Footer.jsx          # Dark espresso links and newsletter subscription
│   │   ├── CartDrawer.jsx      # Shopping drawer with empty-state Quick-Add card
│   │   ├── InteractiveLab.jsx  # Purity guide dropdown testing simulator
│   │   └── TiltCard.jsx        # 3D interactive tilting container
│   ├── pages/
│   │   ├── Home.jsx            # GSAP parallax hero, marquees, gallery, and accordion
│   │   ├── VedicProcess.jsx    # Step-by-step Bilona churning timeline
│   │   ├── PurityGuide.jsx     # Chemical lab tests and lab report downloads
│   │   ├── PregnancyBenefits.jsx # Maternal nutrition guides
│   │   └── BeautyBenefits.jsx  # Skincare and hair treatment recipes
│   ├── App.jsx                 # Core routing, cart management, and loading curtain
│   ├── index.css               # Tailwind CSS base setup and custom btn-shimmer overrides
│   └── main.jsx                # Application root entry
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
