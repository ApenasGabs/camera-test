import React, { useState, useEffect, useRef } from "react";

const CameraAccess: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCameraAccessRequested, setIsCameraAccessRequested] = useState(false);

  useEffect(() => {
    const constraints = {
      video: {
        width: {
          min: 1280,
          ideal: 1920,
          max: 2560,
        },
        height: {
          min: 720,
          ideal: 1080,
          max: 1440,
        },
      },
    };

    const requestCameraAccess = async () => {
      try {
        const videoStream = await navigator.mediaDevices.getUserMedia(
          constraints
        );
        if (videoRef.current) {
          videoRef.current.srcObject = videoStream;
        }
      } catch (error) {
        // console.error("Could not access the camera:", error);
      }
    };

    if (isCameraAccessRequested) {
      requestCameraAccess();
    }
  }, [isCameraAccessRequested]);

  const takeScreenshot = () => {
    if (canvasRef.current && videoRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      if (context) {
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0);
        const img = document.createElement("img");
        img.src = canvas.toDataURL("image/png");
        document.getElementById("screenshots")?.prepend(img);
      }
    }
  };

  const handleCameraAccessRequest = () => {
    setIsCameraAccessRequested(true);
  };

  return (
    <div>
      <h1>How to Access Device Cameras with JavaScript (Front and Rear)</h1>
      {!isCameraAccessRequested && (
        <button type="button" onClick={handleCameraAccessRequest}>
          Request Camera Access
        </button>
      )}
      {isCameraAccessRequested && (
        <>
          <video ref={videoRef} autoPlay playsInline muted />
          <button type="button" onClick={takeScreenshot}>
            Take Screenshot
          </button>
        </>
      )}
      <div id="screenshots" />
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
};

export default CameraAccess;
