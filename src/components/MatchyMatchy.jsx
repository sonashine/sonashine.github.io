import { useEffect, useRef } from "react";
import p5 from "p5";
import sketch from "./matchy-matchy-sketch.js";

export default function MatchyMatchy() {

  const canvasRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {

    if (instanceRef.current) return;

    instanceRef.current = new p5(
      sketch,
      canvasRef.current
    );

    return () => {

      instanceRef.current?.remove();

      instanceRef.current = null;

    };

  }, []);


  return (
    <div className="flex justify-center items-center">
      <div ref={canvasRef}></div>
    </div>
  );
}