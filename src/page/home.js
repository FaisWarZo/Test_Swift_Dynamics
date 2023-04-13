import { Card } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Language from "../components/language";
import "../App.css";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Language />
      <div className="container">
        <div className="card-container">
          <Link to={"/test1"} className="clearunderline">
            <Card
              title={t("test1")}
              bordered={false}
              style={{
                width: 300,
                margin: "8px",
              }}
            >
              {t("heading_test1")}
            </Card>
          </Link>

          <Card
            title={t("test2")}
            bordered={false}
            style={{
              width: 300,
              margin: "8px",
            }}
          >
            {t("heading_test2")}
          </Card>

          <Link to={"/test3"} className="clearunderline">
            <Card
              title={t("test3")}
              bordered={false}
              style={{
                width: 300,
                margin: "8px",
              }}
            >
              {t("heading_test3")}
            </Card>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
