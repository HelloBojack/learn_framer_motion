import { useState } from "react";
import "./App.css";
import MyFirstComponent from './components/MyFirstComponent'
import HoverComponent from './components/HoverComponent'
import ResponsiveComponent from './components/Responsive'
import MotionValueComponent from './components/MotionValue'
import DragComponent from './components/Drag'

const components = [
  null, // Index 0 is null because the showNumber starts from 1
  MyFirstComponent,
  HoverComponent,
  ResponsiveComponent,
  MotionValueComponent,
  DragComponent
];

export default function App() {
  const [showNumber, setShowNumber] = useState(0);
  const ComponentToRender = showNumber > 0 ? components[showNumber] : null;

  const incrementShowNumber = () => setShowNumber(prev => Math.min(prev + 1, components.length - 1));
  const decrementShowNumber = () => setShowNumber(prev => Math.max(prev - 1, 0));

  return (
    <div className="flex items-center justify-center w-full h-full ">
      <div className="absolute top-10">
        <button onClick={decrementShowNumber} className="mr-10">&lt;</button>
        {showNumber}
        <button onClick={incrementShowNumber} className="ml-10">&gt;</button>
      </div>
      {showNumber > 0 && <ComponentToRender />}
    </div>
  );
}
