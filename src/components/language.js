import React from "react";
import { Button, Dropdown, Menu } from "antd";
import { useTranslation } from "react-i18next";
import { DownOutlined } from "@ant-design/icons";
import "../App.css";

const Language = () => {
  const { t, i18n } = useTranslation();

  const handleSwitchLanguage = (language) => {
    setTimeout(() => {
      i18n.changeLanguage(language);
    }, 500);
  };

  const switchLabel = i18n.language === "en" ? "EN" : "ไทย";

  const dLanguage = (
    <Menu>
      <Menu.Item key="en" onClick={() => handleSwitchLanguage("en")}>
        {t("language_switch_EN")}
      </Menu.Item>
      <Menu.Item key="th" onClick={() => handleSwitchLanguage("th")}>
        {t("language_switch_TH")}
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={dLanguage} placement="bottomRight">
      <Button>
        {switchLabel}
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default Language;
