/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Navbar, Footer } from "./components/Navigation";
import Programs from "./pages/Programs";
import Membership from "./pages/Membership";
import Training from "./pages/Training";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import { ChatWidget } from "./components/ChatWidget";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeTab, setActiveTab] = useState("Programs");

  const renderPage = () => {
    switch (activeTab) {
      case "Programs": return <Programs />;
      case "Membership": return <Membership />;
      case "Training": return <Training />;
      case "Dashboard": return <Dashboard />;
      case "Contact": return <Contact />;
      default: return <Programs />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setActiveTab={setActiveTab} />
      <ChatWidget />
    </div>
  );
}
