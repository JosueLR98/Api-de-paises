import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if(isDark){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  }, [isDark]);

  return (
    <div className="App font-['Nunito_Sans'] text-[14px] bg-gray-400/20 dark:bg-slate-800 duration-200 min-h-screen">
      <Navbar setIsDark={setIsDark} />
      <Home />
    </div>
  );
}

export default App;
