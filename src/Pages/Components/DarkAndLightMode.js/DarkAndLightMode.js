import React, { useEffect, useState } from 'react';
import { MdModeNight, MdLightMode } from "react-icons/md";

const DarkAndLightMode = () => {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div>
            <button onClick={handleThemeSwitch} className="text-white p-1 border rounded-full">
                {theme === 'dark' ? <MdModeNight  size={30}/> : <MdLightMode size={30} />}
            </button>
        </div>
    );
};

export default DarkAndLightMode;