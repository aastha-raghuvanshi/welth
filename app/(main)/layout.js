
  "use client";
  import React from "react";
import { Toaster } from "sonner";

const MainLayout = ({ children }) => {
  return (
    <div className="container mx-auto my-32">
      {children}
      {/* ✅ Mount toaster once, globally */}
      <Toaster position="top-right" richColors />
    </div>
  );
};

export default MainLayout;
