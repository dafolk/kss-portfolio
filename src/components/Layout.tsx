import React from "react";
import NavigationHeader from "./NavigationHeader";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  ColorModeContext: React.Context<{ toggleColorMode: () => void }>;
}

export default function Layout({ children, ColorModeContext }: LayoutProps) {
  return (
    <>
      <NavigationHeader ColorModeContext={ColorModeContext} />
      {children}
      <Footer />
    </>
  );
}
