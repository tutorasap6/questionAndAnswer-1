// Step 1: Import React
import * as React from "react";
import MainLayout from "../components/MainLayout";
import BlogContent from "../components/BlogContent";
import QueInput from "../components/QueInput";
import { Layout } from "antd";
import { Col, Row } from "antd";

const { Content } = Layout;

const IndexPage = () => {
  return (
    <MainLayout pageTitle="Home">
      <Content
        style={{
          padding: "120px",
          paddingTop: "0px",
          paddingBottom: "3px",
          borderBottom: "0.2px solid rgba(111,111,110,.8)",
        }}
      >
        <Row
        // style={{ marginTop: "40px" }}
        >
          <Col
            span={4}
            // style={{ borderRight: "0.1px solid rgba(111,111,110,.8)" }}
          ></Col>
          <Col span={12}>
            <BlogContent></BlogContent>
          </Col>
          <Col span={4}></Col>
        </Row>
      </Content>
    </MainLayout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home</title>;

// Step 3: Export your component
export default IndexPage;
