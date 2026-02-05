import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Location, Qr, Setting, User, Wallet, Minus } from "../assets";

export const FloatingActions: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState("wallet");

  const actions = [
    { id: "wallet", icon: Wallet, label: "Wallet" },
    { id: "menu", icon: Qr, label: "Menu" },
    { id: "user", icon: User, label: "Profile" },
    { id: "location", icon: Location, label: "Location" },
    { id: "settings", icon: Setting, label: "Settings" },
  ];

  const sortedActions = [...actions].sort((a, b) => {
    if (a.id === selectedIcon) return -1;
    if (b.id === selectedIcon) return 1;
    return 0;
  });

  const getIconById = (id: string) => {
    const action = actions.find((a) => a.id === id);
    return action ? action.icon : Wallet;
  };

  return (
    <>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/55 z-51"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>

      <div className="fixed right-4 bottom-2 flex flex-col gap-3 z-99 items-center">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="flex flex-col gap-2.5"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
            >
              {sortedActions.map((action) => {
                const isSelected = action.id === selectedIcon;
                return (
                  <motion.button
                    key={action.id}
                    onClick={() => {
                      setSelectedIcon(action.id);
                      setIsExpanded(false);
                    }}
                    className={`w-17 h-17 rounded-full flex items-center justify-center text-white shadow-lg transition-all ${
                      isSelected
                        ? "bg-linear-to-tr from-[#06C9FB] to-[#AC22FC]"
                        : "bg-[#163051]/90 backdrop-blur-md"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.img
                      src={action.icon}
                      alt={action.id}
                      className="w-6 h-6 relative z-10"
                      animate={{
                        filter: isSelected
                          ? "brightness(0) invert(1)"
                          : "brightness(1) opacity(0.2)",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-17 h-17 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 ${
            isExpanded
              ? "bg-[#1e3a5f]/90 backdrop-blur-md"
              : "bg-linear-to-tr from-[#06C9FB] to-[#AC22FC]"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isExpanded ? (
            <motion.img src={Minus} alt="close" className="w-6 h-6" />
          ) : (
            <img
              src={getIconById(selectedIcon)}
              alt="trigger"
              className="w-6 h-6"
            />
          )}
        </motion.button>
      </div>
    </>
  );
};
