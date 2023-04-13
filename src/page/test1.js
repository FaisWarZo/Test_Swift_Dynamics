import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Row, Col, Card, Button, Divider } from "antd";
import { Layout } from "antd";
import "../App.css";
import Language from "../components/language";

const Test1 = () => {
  const { Content } = Layout;
  const { t } = useTranslation();
  const [shapeIndex, setShapeIndex] = useState(0);
  const [leftPosition, setLeftPosition] = useState("gridpositionL");
  const [rightPosition, setRightPosition] = useState("gridpositionR");
  const [shapesArray, setShapesArray] = useState([
    "square",
    "circle",
    "oval",
    "trapezoid",
    "rectangle",
    "parallelogram",
  ]);

  const handleMoveLeft = () => {
    setShapeIndex((shapeIndex + 1) % shapesArray.length);
  };

  const handleMoveRight = () => {
    setShapeIndex((shapeIndex + shapesArray.length - 1) % shapesArray.length);
  };

  const handleMovePosition = () => {
    setLeftPosition(rightPosition);
    setRightPosition(leftPosition);
  };

  const shuffleArray = () => {
    const shuffledArray = [...shapesArray];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    setShapesArray(shuffledArray);
  };

  return (
    <>
      <h1>{t("heading_test1")}</h1>
      <div className="contentStyle ">
        <Language />
        <div className="card-container ">
          <Card
            style={{
              width: 300,
              height: 150,
              position: "relative",
            }}
            className="change-card"
            onClick={handleMoveLeft}
          >
            <div className="triangleleft"></div>
            <div
              style={{
                position: "absolute",
                bottom: "25px",
                left: "72%",
              }}
            >
              <Button type="primary" shape="round" className="greenbtn">
                {t("Moveshape")}
              </Button>
            </div>
          </Card>
          <Card
            style={{
              width: 600,
              height: 150,
              position: "relative",
            }}
            className="change-card"
            onClick={handleMovePosition}
          >
            <div className="card-container">
              <div className="triangleup"></div>
              <div className="triangledown"></div>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "25px",
                left: "63%",
              }}
            >
              <Button type="primary" shape="round" className="greenbtn">
                {t("MovePosition")}
              </Button>
            </div>
          </Card>
          <Card
            style={{
              width: 300,
              height: 150,
            }}
            className="change-card"
            onClick={handleMoveRight}
          >
            <div className="triangleright"></div>
            <div
              style={{
                position: "absolute",
                bottom: "25px",
                left: "72%",
              }}
            >
              <Button type="primary" shape="round" className="greenbtn">
                {t("Moveshape")}
              </Button>
            </div>
          </Card>
        </div>

        <Divider />
      </div>
      <Content className="contentStyle">
        <Row gutter={[8, 16]}>
          {shapesArray.slice(0, 3).map((value, i) => (
            <Col span={8} key={i}>
              <Card
                className={`${leftPosition} change-card`}
                onClick={shuffleArray}
                style={{
                  width: 300,
                  height: 150,
                  position: "relative",
                }}
              >
                <div
                  className={`${
                    shapesArray[(shapeIndex + i) % shapesArray.length] ===
                    "circle"
                      ? "circle"
                      : ""
                  } 
                    ${
                      shapesArray[(shapeIndex + i) % shapesArray.length] ===
                      "square"
                        ? "square"
                        : ""
                    }
                    ${
                      shapesArray[(shapeIndex + i) % shapesArray.length] ===
                      "rectangle"
                        ? "rectangle"
                        : ""
                    }
                    ${
                      shapesArray[(shapeIndex + i) % shapesArray.length] ===
                      "parallelogram"
                        ? "parallelogram"
                        : ""
                    }
                    ${
                      shapesArray[(shapeIndex + i) % shapesArray.length] ===
                      "oval"
                        ? "oval"
                        : ""
                    }
                    ${
                      shapesArray[(shapeIndex + i) % shapesArray.length] ===
                      "trapezoid"
                        ? "trapezoid"
                        : ""
                    }
                    `}
                ></div>
              </Card>
            </Col>
          ))}

          {shapesArray.slice(3, 6).map((value, i) => (
            <Col span={8} key={i + 3}>
              <Card
                className={`${rightPosition} change-card`}
                onClick={shuffleArray}
                style={{
                  width: 300,
                  height: 150,
                  position: "relative",
                }}
              >
                <div
                  className={`${
                    shapesArray[(shapeIndex + i + 3) % shapesArray.length] ===
                    "circle"
                      ? "circle"
                      : ""
                  } 
                    ${
                      shapesArray[(shapeIndex + i + 3) % shapesArray.length] ===
                      "square"
                        ? "square"
                        : ""
                    }
                    ${
                      shapesArray[(shapeIndex + i + 3) % shapesArray.length] ===
                      "rectangle"
                        ? "rectangle"
                        : ""
                    }
                    ${
                      shapesArray[(shapeIndex + i + 3) % shapesArray.length] ===
                      "parallelogram"
                        ? "parallelogram"
                        : ""
                    }
                    ${
                      shapesArray[(shapeIndex + i + 3) % shapesArray.length] ===
                      "oval"
                        ? "oval"
                        : ""
                    }
                    ${
                      shapesArray[(shapeIndex + i + 3) % shapesArray.length] ===
                      "trapezoid"
                        ? "trapezoid"
                        : ""
                    }
                    `}
                ></div>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </>
  );
};

export default Test1;
