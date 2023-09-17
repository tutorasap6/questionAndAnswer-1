// Step 1: Import React
import React, { useState } from "react";
import MainLayout from "../../components/MainLayout";
import { Breadcrumb, Layout } from "antd";
import AnswerBlog from "../../components/AnswerBlog";
import { Col, Row } from "antd";
import QueInput from "../../components/QueInput";
import { useEffect } from "react";
import axios from "axios";

// Step 2: Define your component
const { Content } = Layout;
const AnswerPage = (params) => {
  const { id } = params;
  console.log(id);
  const [post, setPost] = useState({});

  useEffect(() => {
    try {
      const getPostById = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/posts/${id}`
          );
          setPost(response.data);
        } catch (error) {
          console.log("error", error);
        }
      };
      getPostById();
    } catch (e) {
      throw e;
    }
  }, []);
  return (
    <MainLayout pageTitle="Answer">
      <Content
        style={{
          padding: "120px",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <div
          style={{
            height: "40px",
            // background: "rgb(52,120,255)",
            width: "100%",
            // borderBottom: "0.2px solid rgba(255,255,255,.8)",
            //   borderBottom: "0.2px solid rgba(52,120,255,.8)",
            borderBottom: "0.2px solid rgba(111,111,110,.8)",
          }}
        >
          <Breadcrumb
            style={{
              //   margin: "16px 0",
              paddingLeft: "200px",
              paddingTop: "10px",
            }}
          >
            <Breadcrumb.Item>
              <p style={{ fontFamily: "awesome", marginTop: "0px" }}>Home</p>
            </Breadcrumb.Item>
            {/* <Breadcrumb.Item>list</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item> */}

            <Breadcrumb.Item>
              <p style={{ fontFamily: "awesome", marginTop: "0px" }}>answer</p>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Row style={{ marginTop: "10px" }}>
          <Col span={4}></Col>
          <Col span={11}>
            <AnswerBlog post={post}></AnswerBlog>
          </Col>
          <Col span={4}></Col>
        </Row>
      </Content>
    </MainLayout>
  );
};

export const Head = () => (
  <>
    <title>Answer</title>
    <meta name="description" content="Your description" />
  </>
);
export default AnswerPage;
