import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const ThemeToggler = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", theme);
  }, [theme]);

  const handleTheme = () => setTheme((prev) => !prev);

  return (
    <div className="dark:bg-[#222] flex items-center justify-center bg-white h-screen">
      <header className="flex fixed top-0 right-0 left-0 justify-between px-10 py-5 shadow-md dark:shadow-none bg-gray-50 dark:bg-[#111]">
        <h1 className="text-black text-3xl font-bold dark:text-amber-600">
          kissCraft
        </h1>
        <button onClick={handleTheme}>
          {theme ? (
            <MdLightMode size={25} className="text-white" />
          ) : (
            <MdOutlineDarkMode size={25} />
          )}
        </button>
      </header>
      <section>
        <h1 className="text-black text-[10rem] font-bold dark:text-amber-600 animate-bounce">
          KissCraft
        </h1>
      </section>
    </div>
  );
};

export default ThemeToggler;
