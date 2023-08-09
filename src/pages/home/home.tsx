import { useTranslation } from "react-i18next";
import VideoCapture from "../../Components/CameraAcess/VideoCapture";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <VideoCapture />
      <h1>{t("home")}</h1>
    </>
  );
};
export default Home;
