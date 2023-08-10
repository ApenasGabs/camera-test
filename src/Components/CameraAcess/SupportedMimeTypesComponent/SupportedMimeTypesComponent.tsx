import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const SupportedMimeTypesComponent: React.FC = () => {
  function getAllSupportedMimeTypes(...mediaTypes: string[]) {
    if (!mediaTypes.length) mediaTypes.push(...["video", "audio"]);
    const FILE_EXTENSIONS = ["webm", "ogg", "mp4", "x-matroska"];
    const CODECS = [
      "vp9",
      "vp9.0",
      "vp8",
      "vp8.0",
      "avc1",
      "av1",
      "h265",
      "h.265",
      "h264",
      "h.264",
      "opus",
    ];

    return [
      ...new Set(
        FILE_EXTENSIONS.flatMap((ext) =>
          CODECS.flatMap((codec) =>
            mediaTypes.flatMap((mediaType) => [
              `${mediaType}/${ext};codecs=${codec}`,
              `${mediaType}/${ext}`,
            ])
          )
        )
      ),
    ].filter((variation) => MediaRecorder.isTypeSupported(variation));
  }

  const [supportedMimeTypes, setSupportedMimeTypes] = useState<string[]>([]);

  useEffect(() => {
    const mimeTypes = getAllSupportedMimeTypes("video", "audio");
    setSupportedMimeTypes(mimeTypes);
  }, []);

  return (
    <div>
      <h1>Supported MIME Types</h1>
      <pre>
        {supportedMimeTypes.map((mimeType) => (
          <div key={uuidv4()}>{mimeType}</div>
        ))}
      </pre>
    </div>
  );
};

export default SupportedMimeTypesComponent;
