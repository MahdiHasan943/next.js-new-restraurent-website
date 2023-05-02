import Link from "next/link";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import '../styles/Home.module.css'

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
  
    <div className="grid place-items-center h-screen">
    <div>
      <h1 className="text-7xl font-bold dark:text-[red] text-purple-600  text-center">
        {currentTheme === 'dark' ? 'Dark' : 'Light'}
        <span className="text-purple-600 ">Mode</span>
      </h1>
      <p className="dark:text-purple-600 text-black my-8 text-center">
        Click the button below to switch mode
      </p>
     
    </div>
  </div>
  )
}

