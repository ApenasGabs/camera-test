import { Button } from "antd";
import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

const ImageCapture: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const [img, setImg] = useState<string | null>(null);
  const [isFacingUser, setIsFacingUser] = useState(false);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setImg(imageSrc || null);
  }, [webcamRef]);

  const videoConstraints = {
    aspectRatio: 0.66666,
    facingMode: isFacingUser ? "user" : "environment",
    width: { min: 480 },
    height: { min: 720 },
  };
  const switchCamera = useCallback(() => {
    setIsFacingUser((prev) => !prev);
  }, []);

  return (
    <div>
      {img === null ? (
        <>
          <Webcam
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            audio={false}
            ref={webcamRef}
            mirrored={isFacingUser}
          />
          <Button onClick={capture}>X</Button>
        </>
      ) : (
        <>
          <img src={img} alt="screenshot" />
          <Button onClick={() => setImg(null)}>Recapture</Button>
        </>
      )}
      <Button onClick={switchCamera}>Switch camera</Button>
    </div>
  );
};

export default ImageCapture;
