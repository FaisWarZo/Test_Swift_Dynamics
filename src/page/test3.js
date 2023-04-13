import React, { useEffect, useState } from "react";
import {
  Col,
  Input,
  Form,
  Row,
  Select,
  DatePicker,
  Radio,
  InputNumber,
  Button,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import nationalitiesData from "../nationalities.json";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "../App.css";

const { Content } = Layout;
const { Option } = Select;

const Test3 = () => {
  const [form] = Form.useForm();
  const [nationalities, setNationalities] = useState([]);
  const [citizenNumber, setCitizenNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [expectedSalary, setExpectedSalary] = useState("");
  const [data, setData] = useState("");

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    setCitizenNumber((prev) => {
      const arr = prev.split("-");
      arr[index] = value;
      return arr.join("-");
    });
  };

  const handleExpectedSalaryChange = (value) => {
    setExpectedSalary(value);
  };

  const onSubmit = (values) => {
    const formData = {
      Title: values.title,
      Firstname: values.firstName,
      Lastname: values.lastName,
      Birthday: values.birthday,
      Nationality: values.Nationality,
      CitizenNumber: citizenNumber,
      Radio: values.Radio,
      PhoneNumber: values.phoneNumber,
      PassportNumber: values.passportNumber,
      ExpectedSalary: expectedSalary,
    };

    setData(formData);
    console.log("Form data:", formData);
  };

  useEffect(() => {
    setNationalities(nationalitiesData);
  }, []);

  return (
    <div className="app">
      <Content className="contentStyle">
        <div className="app">
          <Content>
            <Form form={form} onFinish={onSubmit}>
              <Row gutter={[40, 40]} flex justify="center" align="middle">
                <Col span={3}>
                  <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                      { required: true, message: "Please select your title" },
                    ]}
                  >
                    <Select>
                      <Option value="mr">Mr.</Option>
                      <Option value="mrs">Mrs.</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={9}>
                  <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: "Please select your Firstname",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={9}>
                  <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: "Please select your Lastname",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[40, 40]} flex justify="center" align="middle">
                <Col span={5}>
                  <Form.Item name="birthday" label="Birthday">
                    <DatePicker
                      suffixIcon={<DownOutlined />}
                      format="MM/DD/YYYY"
                      placeholder="MM/DD/YYYY"
                      dateRender={(current) => {
                        const today = new Date();
                        return current && current > today ? (
                          <div>{current.date()}</div>
                        ) : (
                          current.date()
                        );
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col span={16}>
                  <Form.Item label="Nationality" name="Nationality">
                    <Select placeholder="-- Please Select --">
                      {nationalities.map((item) => (
                        <Option key={item.nationality} value={item.nationality}>
                          {item.nationality}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[40, 40]} flex justify="center" align="middle">
                <Col span={21}>
                  <Form.Item
                    label="Citizen Number"
                    name="citizenNumber"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Input
                      type="tel"
                      maxLength={1}
                      style={{ width: 50, marginRight: 10 }}
                      onChange={(e) => handleInputChange(e, 0)}
                    />
                    -
                    <Input
                      type="tel"
                      maxLength={4}
                      style={{ width: 80, marginLeft: 10, marginRight: 10 }}
                      onChange={(e) => handleInputChange(e, 1)}
                    />
                    -
                    <Input
                      type="tel"
                      maxLength={5}
                      style={{ width: 100, marginLeft: 10, marginRight: 10 }}
                      onChange={(e) => handleInputChange(e, 2)}
                    />
                    -
                    <Input
                      type="tel"
                      maxLength={2}
                      style={{ width: 50, marginLeft: 10, marginRight: 10 }}
                      onChange={(e) => handleInputChange(e, 3)}
                    />
                    -
                    <Input
                      type="tel"
                      maxLength={1}
                      style={{ width: 50, marginLeft: 10 }}
                      onChange={(e) => handleInputChange(e, 4)}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[40, 40]} flex justify="center" align="middle">
                <Col span={21}>
                  <Form.Item label="Radio" name="Radio">
                    <Radio.Group>
                      <Radio value="Male"> Male </Radio>
                      <Radio value="Female"> Female </Radio>
                      <Radio value="Unisex"> Unisex </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[40, 40]} flex justify="center" align="middle">
                <Col span={21}>
                  <Form.Item label="Mobie Phone" name="phoneNumber">
                    <PhoneInput
                      className="phoneinput"
                      value={phoneNumber}
                      onChange={setPhoneNumber}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[40, 40]} flex justify="center" align="middle">
                <Col span={21}>
                  <Form.Item
                    label="Passport Number"
                    name="passportNumber"
                    style={{ width: 500 }}
                    rules={[
                      {
                        required: true,
                        message: "Please input your passport number",
                      },
                    ]}
                  >
                    <Input maxLength={9} placeholder="AB1234567" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[40, 40]} flex justify="center" align="middle">
                <Col span={21}>
                  <Form.Item
                    label="Expected Salary"
                    name="Salary"
                    style={{ width: 500, paddingRight: 10 }}
                  >
                    <InputNumber
                      min={1}
                      max={1000000}
                      style={{ width: 350 }}
                      formatter={(value) =>
                        `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }
                      parser={(value) => value.replace(/฿\s?|(,*)/g, "")}
                      onChange={handleExpectedSalaryChange}
                    />
                    {"      "}THB
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Content>
        </div>
      </Content>
    </div>
  );
};
export default Test3;
