import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation(["locales"]);

  return (
    <>
      <h1>{t("home")}</h1>
    </>
  );
};
export default Home;
