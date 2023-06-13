import { Button, Icon } from "@tremor/react";
import { useEffect, useState } from "react";
import { SunIcon } from "@heroicons/react/outline";

const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <Button className="p-1" onClick={handleThemeToggle}>
        <Icon className="text-white dark:text-white" size="sm" icon={SunIcon} />
      </Button>
    </div>
  );
};

export default ThemeSwitch;
