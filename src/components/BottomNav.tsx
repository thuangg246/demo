import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, MoneyBag, People } from "../assets";

type NavItem = "home" | "earn" | "friends";

export const BottomNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavItem>();

  const navItems: { id: NavItem; icon: string; label: string }[] = [
    { id: "home", icon: Home, label: "Home" },
    { id: "earn", icon: MoneyBag, label: "Earn" },
    { id: "friends", icon: People, label: "Friends" },
  ];

  return (
    <div>
      <motion.div
        layout
        className="bg-[#1e3a5f]/90 backdrop-blur-lg rounded-full py-2 px-4 shadow-2xl w-fit mx-auto"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          layout: { type: "spring", stiffness: 380, damping: 30 },
          default: { type: "spring", stiffness: 260, damping: 20 },
        }}
      >
        <div className="flex items-center gap-4 relative">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={
                !activeTab
                  ? "relative flex items-center py-4 rounded-full z-10"
                  : "relative flex items-center gap-2 p-4 rounded-full z-10"
              }
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              {activeTab === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-[#00D1FE] to-[#B220FC] rounded-full"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
              <motion.img
                src={item.icon}
                alt={item.id}
                className="w-6 h-6 relative z-10"
                animate={{
                  filter:
                    activeTab === item.id
                      ? "brightness(0) invert(1)"
                      : "brightness(1) opacity(0.4)",
                }}
                transition={{ duration: 0.3 }}
              />
              <AnimatePresence mode="wait">
                {activeTab === item.id && (
                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                    className="font-medium text-sm text-white whitespace-nowrap relative z-10"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
