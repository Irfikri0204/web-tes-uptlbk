"use client";

import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import MainPage from "./components/MainPage";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }
  return <MainPage />;
}
