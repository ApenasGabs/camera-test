import { Card, Button } from "antd";

// https://www.webdevdrops.com/como-acessar-camera-com-javascript/
const { Meta } = Card;
const hasCameraSuport =
  "mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices;

const videoStreamTest = async () => {
  const videoStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });
  return videoStream;
};
console.log("videoStream: ", videoStreamTest);
const CustomCard = (props: { img: string }) => {
  const { img } = props;
  const constraints = {
    audio: true,
    video: { width: 1280, height: 720 },
  };
  console.log("constraints: ", constraints);

  const finalCard = hasCameraSuport ? (
    <Card
      style={{ width: 240 }}
      cover={<img alt="example" src={img} className="App-logo" />}
    >
      <Button title="Tem suporte" type="primary">
        tem suporte
      </Button>
    </Card>
  ) : (
    <Card
      style={{ width: 240 }}
      cover={<img src={img} className="App-logo" alt="logo" />}
    >
      <Meta title="nao tem suporte" description="Componente de teste" />
    </Card>
  );
  return finalCard;
};

export default CustomCard;
