// import { useTranslation } from "react-i18next";
import CustomCard from "../../Components/CustomCard";
import {
  GridLayout,
  Nav,
  Main,
  AsideLeft,
  AsideRight,
  Footer,
} from "./Home.styles";

const Home = () => {
  // const { t } = useTranslation();

  return (
    <GridLayout>
      <Nav>Nav Area</Nav>
      <AsideLeft>Aside left</AsideLeft>
      <Main>
        Main area
        <CustomCard img=" " />
      </Main>
      <AsideRight>Aside Right</AsideRight>
      <Footer>Footer area</Footer>
    </GridLayout>
  );
};
export default Home;
