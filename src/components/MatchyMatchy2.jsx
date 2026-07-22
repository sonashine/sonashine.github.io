import { useEffect, useRef } from "react";
import p5 from "p5";
import gameSketch from "./matchy-matchy-2.js";

export default function MatchyMatchy() {

  const canvasRef = useRef(null);

  useEffect(() => {

    const instance = new p5(gameSketch, canvasRef.current);

    return () => {
      instance.remove();
    };

  }, []);


  return (
    <div className="flex justify-center items-center">
      <div ref={canvasRef}></div>
    </div>
  );
}