import React, { useEffect, useRef } from "react";

const Snow = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  const getRandomRadius = () => Math.random() * 2 + 1;
  const getRandomSpeed = () => Math.random() * 0.2 + 0.05;
  const getRandomDir = () => [-1, 1][Math.floor(Math.random() * 2)];

  const data = useRef([]);
  const canvasWidth = useRef(0);
  const canvasHeight = useRef(0);

  const init = () => {
    make();
    loop();
  };

  const loop = () => {
    move();
    draw();

    window.requestAnimationFrame(loop);
  };

  const make = () => {
    const newData = [];

    for (let i = 0; i < 100; i++) {
      const x = Math.random() * canvasWidth.current;
      const y = Math.random() * canvasHeight.current;

      const size = getRandomRadius();
      const speed = getRandomSpeed();
      const dir = getRandomDir();

      newData.push({ x, y, size, speed, dir });
    }

    data.current = newData;
  };

  const move = () => {
    data.current = data.current.map(item => {
      item.x += item.dir * item.speed;
      item.y += item.speed;

      const isMinOverPositionX = -item.size > item.x;
      const isMaxOverPositionX = item.x > canvasWidth.current;
      const isOverPositionY = item.y > canvasHeight.current;

      if (isMinOverPositionX || isMaxOverPositionX) {
        item.dir *= -1;
      }
      if (isOverPositionY) {
        item.y = -item.size;
      }

      return item;
    });
  };

  const draw = () => {
    const ctx = ctxRef.current;

    ctx.clearRect(0, 0, canvasWidth.current, canvasHeight.current);

    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    ctx.fillRect(0, 0, canvasWidth.current, canvasHeight.current);

    data.current.forEach(item => {
      ctx.beginPath();
      ctx.fillStyle = "rgba(255, 255, 255, .6)";
      ctx.arc(item.x, item.y, item.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // 캔버스 크기를 전체 화면 크기로 설정합니다.
    canvasWidth.current = window.innerWidth;
    canvasHeight.current = window.innerHeight;

    canvas.width = canvasWidth.current;
    canvas.height = canvasHeight.current;

    ctxRef.current = ctx;
    init();

    const handleResize = () => {
      canvasWidth.current = window.innerWidth;
      canvasHeight.current = window.innerHeight;

      canvas.width = canvasWidth.current;
      canvas.height = canvasHeight.current;

      make();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 눈 컴포넌트의 스타일 설정
  const canvasStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 100,
    pointerEvents: "none",
    width: "100%"
  };

  return <canvas ref={canvasRef} style={canvasStyle} />;
};

export default Snow;
