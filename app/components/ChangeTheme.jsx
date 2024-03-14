"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function ChangeTheme() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;

//   function handleChangeTheme(){
//     if(theme === 'light'){
//         setTheme('dark')
//     }
//     if(theme === 'dark'){
//         setTheme('light')
//     }
//   }
  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <div
            className="h-5 w-5 absolute rounded-full top-0 z-50 cursor-pointer bg-white hover:bg-[#1ce783] "
            onClick={() => setTheme("light")}
          />
        ) : (
          <div
            className="h-5 w-5 absolute rounded-full top-0 z-50 cursor-pointer bg-black hover:bg-[#1ce783] "
            onClick={() => setTheme("dark")}
          />
        ))}

        {/* <div className="absolute top-0 w-[40px] p-[2px] z-50 bg-gray-700 rounded-full">
            <div onClick={() => handleChangeTheme()} className={`bg-black rounded-full w-5 h-5 transition-all duration-500 ease-in-out ${currentTheme === 'light' ? 'translate-x-0' : 'translate-x-[100%]'}`} />
        </div> */}
    </>
  );
}