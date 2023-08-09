import { Button } from "antd";
import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

const VideoCapture: React.FC = () => {
  const webCamRef = useRef<Webcam | null>(null);
  const mediaRef = useRef<MediaRecorder | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);

  const handleStopRecording = useCallback(() => {
    mediaRef.current?.stop();
    setIsRecording(false);
  }, [mediaRef]);

  const handleHasData = useCallback((event: BlobEvent) => {
    const { data } = event;
    if (data.size > 0) {
      setRecordedChunks((prev) => prev.concat(data));
    }
  }, []);
  const handleStartRecording = useCallback(() => {
    setIsRecording(true);
    if (webCamRef?.current && webCamRef.current.stream) {
      mediaRef.current = new MediaRecorder(webCamRef.current.stream, {
        mimeType: "video/webm",
      });
      mediaRef.current.addEventListener("dataavailable", handleHasData);
    }
    mediaRef.current?.start();
  }, [handleHasData]);

  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style.display = "none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  return (
    <>
      <Webcam audio ref={webCamRef} />
      {isRecording ? (
        <Button onClick={handleStopRecording}>Stop Recording</Button>
      ) : (
        <Button onClick={handleStartRecording}>Start Recording</Button>
      )}
      {recordedChunks.length > 0 && (
        <Button onClick={handleDownload}>Download</Button>
      )}
    </>
  );
};

export default VideoCapture;
