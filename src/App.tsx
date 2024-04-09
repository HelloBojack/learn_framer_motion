import { useState } from "react";
import "./App.css";
import MyFirstComponent from './components/MyFirstComponent'
import HoverComponent from './components/HoverComponent'

export default function App() {
  const [showNumber, setShowNumber] = useState(0);
  return (
    <div className="flex">
      <button onClick={()=>setShowNumber(showNumber+1)}>+</button>
      <button onClick={()=>setShowNumber(showNumber-1)}>-</button>
      {showNumber === 1 && <MyFirstComponent />}
      {showNumber === 2 && <HoverComponent />}
    </div>
  );
}
