import { useState } from "react";
import "./App.css";
import MyFirstComponent from './components/MyFirstComponent'
import HoverComponent from './components/HoverComponent'
import ResponsiveComponent from './components/Responsive'

export default function App() {
  const [showNumber, setShowNumber] = useState(0);
  return (
    <div className="flex items-center justify-center w-full h-full ">
      <div className="absolute top-10">
        <button onClick={()=>setShowNumber(showNumber-1)} className="mr-10">&lt;</button>
        {showNumber}
        <button onClick={()=>setShowNumber(showNumber+1)} className="ml-10">&gt;</button>
      </div>
      {showNumber === 1 && <MyFirstComponent />}
      {showNumber === 2 && <HoverComponent />}
      {showNumber === 3 && <ResponsiveComponent />}
    </div>
  );
}
