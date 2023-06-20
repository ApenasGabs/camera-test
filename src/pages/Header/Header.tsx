import { Select, Space } from "antd";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  // const { t } = useTranslation(["common"]);

  return (
    <>
      <h1>{t("has_support")}</h1>
      <Space wrap>
        <Select
          defaultValue={t("-")}
          style={{ width: 120 }}
          // onChange={handleChange}
          options={[
            { value: "en", label: t("en") },
            { value: "pt", label: t("pt") },
          ]}
        />
      </Space>
    </>
  );
};
export default Header;
