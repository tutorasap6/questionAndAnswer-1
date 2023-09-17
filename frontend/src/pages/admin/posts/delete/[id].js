import React from "react";
import { Layout } from "antd";
import { Link } from "gatsby";
import { Menu } from "antd";
import { Col, Row } from "antd";
import logocom from "../../../../assets/images/Logocom.png";
import PostDelete from "../../../../components/PostDelete";

const { Header, Content } = Layout;

const DeletePage = (params) => {
  const { id } = params;
  console.log(id);
  const array = [
    { name: "Solutions", url: "/" },
    { name: "Post Questions", url: "/post" },
    { name: "About Us", url: "/about" },
    { name: "How it works", url: "/how" },
    { name: "Services", url: "/service" },
    { name: "Pricing", url: "/pricing" },
    { name: "Terms and Conditions", url: "/terms" },
  ];
  return (
    <>
      <Header
        style={{
          padding: "0",
          height: "96px",
          background: "#272930",
          margin: "-8px",
        }}
      >
        <Row>
          <Col
            span={6}
            style={{
              paddingLeft: "300px",
              paddingTop: "15px",
            }}
          >
            <img src={logocom} alt="logo" width="60%" height="65%" />
          </Col>
          <Col
            span={6}
            style={{
              padding: "30px",
              paddingLeft: "20px",
              paddingRight: "60px",
            }}
          ></Col>
          <Col span={12} style={{ paddingTop: "16px" }}>
            <Menu
              theme="white"
              mode="horizontal"
              items={array.map((item, index) => {
                const key = index + 1;
                return {
                  key,
                  label: (
                    <Link to={item.url}>
                      <span
                        style={{
                          marginLeft: "5px",
                          fontFamily: "awesome",
                          color: "white",
                          fontSize: "16px",
                        }}
                      >
                        {item.name}
                      </span>
                    </Link>
                  ),
                };
              })}
            />
          </Col>
        </Row>
      </Header>
      <Content
        style={{
          padding: "120px",
        }}
      >
        <Row>
          <Col span={4}></Col>
          <Col span={16}>
            <PostDelete id={id}></PostDelete>
          </Col>
          <Col span={4}></Col>
        </Row>
      </Content>
    </>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>delete</title>;

// Step 3: Export your component
export default DeletePage;
