import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const portfolioItems = [
    "/assets/portfolio/mockup_1_hamburgueria_1765933400698.png",
    "/assets/portfolio/mockup_2_loja_virtual_1765933418284.png",
    "/assets/portfolio/mockup_3_landing_page_dark_1765933434925.png",
    "/assets/portfolio/mockup_4_fit_academia_1765933451342.png",
    "/assets/portfolio/mockup_5_advocacia_1765933467710.png",
];

export function PortfolioSlider() {
    const [width, setWidth] = useState(0);

    // Using 2 sets of items is sufficient for the loop if we animate to -50%.
    // We use margin-right instead of gap to ensure the width calculation for -50% 
    // includes the spacing perfectly (TotalWidth = 2 * (ItemWidth + Margin)).
    const items = [...portfolioItems, ...portfolioItems];

    return (
        <div className="w-full relative overflow-hidden rounded-xl bg-white shadow-2xl border border-gray-100 p-2">
            {/* Overlay to catch clicks if needed, or just visual container */}
            <div className="flex overflow-hidden relative z-10 rounded-lg bg-gray-50">
                <motion.div
                    className="flex p-4" // Removed gap-4 to handle spacing via margins
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30, // Slower for smoother feel
                            ease: "linear",
                        },
                    }}
                    style={{ width: "max-content" }}
                >
                    {items.map((src, index) => (
                        <div
                            key={index}
                            className="relative w-[300px] md:w-[400px] shrink-0 rounded-lg overflow-hidden shadow-sm mr-4" // Added mr-4
                        >
                            <img
                                src={src}
                                alt={`Project Mockup ${index}`}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Decorative gradient overlays to soften edges */}
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>
        </div>
    );
}
