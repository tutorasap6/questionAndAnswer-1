// Step 1: Import React
import * as React from "react";
import MainLayout from "../components/MainLayout";
import { Breadcrumb, Layout } from "antd";
import { Col, Row } from "antd";
import PostBlog from "../components/PostBlog";

// Step 2: Define your component
const { Content } = Layout;
const PostPage = () => {
  return (
    <MainLayout pageTitle="PostPage">
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
              <p style={{ fontFamily: "awesome", marginTop: "0px" }}>post</p>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Row style={{ marginTop: "0px" }}>
          <Col span={4}></Col>
          <Col span={16}>
            <PostBlog></PostBlog>
          </Col>
          <Col span={4}></Col>
        </Row>
      </Content>
    </MainLayout>
  );
};

export const Head = () => (
  <>
    <title>PostPage</title>
    <meta name="description" content="Your description" />
  </>
);
export default PostPage;
