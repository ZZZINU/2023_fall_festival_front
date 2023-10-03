import React, { useEffect, useRef } from "react";

const Snow = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const starImageRef = useRef(null); // 별 이미지를 로드하기 위한 참조

  const getRandomX = () => Math.random() * canvasWidth.current;
  const getRandomY = () => Math.random() * canvasHeight.current;
  const getRandomSpeed = () => Math.random() * 0.2 + 0.05;
  const getRandomScale = () => Math.random() * 0.4 + 0.1; // 이미지 크기를 조절하기 위한 랜덤 스케일
  const getRandomDirection = () => (Math.random() < 0.5 ? -1 : 1); // 랜덤 방향 설정

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

    for (let i = 0; i < 50; i++) {
      const x = getRandomX();
      const y = getRandomY();

      const speed = getRandomSpeed();
      const scale = getRandomScale();
      const direction = getRandomDirection(); // 랜덤 방향

      newData.push({ x, y, speed, scale, direction });
    }

    data.current = newData;
  };

  const move = () => {
    data.current = data.current.map(item => {
      item.y += item.speed;

      // 옆으로 이동
      item.x += item.speed * item.direction;

      // 화면 아래로 벗어나면 다시 위로 올리기
      if (item.y > canvasHeight.current) {
        item.y = -starImageRef.current.height * item.scale;
        item.x = getRandomX();
        item.speed = getRandomSpeed();
        item.scale = getRandomScale();
        item.direction = getRandomDirection(); // 랜덤 방향 설정
      }

      // 화면 옆으로 벗어나면 반대쪽으로 이동
      if (item.x > canvasWidth.current) {
        item.x = -starImageRef.current.width * item.scale;
      } else if (item.x < -starImageRef.current.width * item.scale) {
        item.x = canvasWidth.current;
      }

      return item;
    });
  };

  const draw = () => {
    const ctx = ctxRef.current;

    ctx.clearRect(0, 0, canvasWidth.current, canvasHeight.current);

    data.current.forEach(item => {
      const scaledWidth = starImageRef.current.width * item.scale;
      const scaledHeight = starImageRef.current.height * item.scale;
      ctx.drawImage(
        starImageRef.current,
        item.x,
        item.y,
        scaledWidth,
        scaledHeight
      );
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

    // 별 이미지 로드
    const starImage = new Image();
    starImage.src = "/Main/main_star.png"; // 별 이미지 파일 경로 설정
    starImage.onload = () => {
      starImageRef.current = starImage;
      init();
    };

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
