import React, { ReactNode } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen text-gray-400">
      <div className="container py-10">{children}</div>
    </main>
  );
};

export default layout;
