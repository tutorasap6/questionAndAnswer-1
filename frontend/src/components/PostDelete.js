import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "gatsby";
import { Card, Row, Col, Button } from "antd";

function PostDelete(props) {
  const [post, setPost] = useState({});
  function handleCancel() {
    navigate("/admin/admin");
  }

  useEffect(
    function () {
      async function deletePostById() {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/posts/${props.id}`
          );
          console.log(response);
          setPost(response.data);
        } catch (error) {
          console.log("error", error);
        }
      }
      deletePostById();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props]
  );

  async function handleDelete() {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${props.id}`);
      navigate("/admin/admin");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Card style={{ height: "100%", padding: "5px", marginTop: "5px" }}>
        <div
          style={{
            padding: "5px",
            paddingTop: "0px",
            fontFamily: "'Heebo', sans-serif",
            marginBottom: "15px",
          }}
        >
          <div style={{ marginBottom: "15px", marginTop: "-10px" }}>
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                borderTop: "0.2px solid rgba(0,0,0,0.2)",
                borderBottom: "0.2px solid rgba(0,0,0,0.2)",
                marginTop: "0.2px",
                marginBottom: "0px",
                paddingTop: "3px",
                height: "35px",
                paddingLeft: "10px",
              }}
            >
              <li
                style={{
                  marginRight: "10px",
                  borderRight: "1px solid rgba(0, 0, 0, 0.2)",
                  paddingRight: "5px",
                  margin: "5px",
                }}
              >
                <span>
                  <strong>ID</strong>: <span>{post._id}</span>
                </span>
                <span>
                  <strong>University:</strong>
                </span>
                <span>{post.universityName}</span>
              </li>
              <li
                style={{
                  borderRight: "1px solid rgba(0, 0, 0, 0.2)",
                  paddingRight: "5px",
                  margin: "5px",
                }}
              >
                <span>
                  <strong>Category:</strong>
                </span>
                <span>{post.category}</span>
              </li>

              <li
                style={{
                  paddingRight: "5px",
                  margin: "5px",
                }}
              >
                <span>
                  <strong>Tags:</strong>
                </span>
                <span>{post.insertTagsHere}</span>
              </li>
            </ul>
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                borderBottom: "0.2px solid rgba(0,0,0,0.2)",
                marginTop: "0.2px",
                paddingTop: "3px",
                height: "35px",
                paddingLeft: "10px",
              }}
            >
              <li
                style={{
                  marginRight: "10px",
                  borderRight: "1px solid rgba(0, 0, 0, 0.2)",
                  paddingRight: "5px",
                  margin: "5px",
                }}
              >
                <span>
                  <strong>Course code:</strong>
                </span>
                <span>{post.courseCode}</span>
              </li>
              <li
                style={{
                  borderRight: "1px solid rgba(0, 0, 0, 0.2)",
                  paddingRight: "5px",
                  margin: "5px",
                }}
              >
                <span>
                  <strong>Course name:</strong>
                </span>
                <span>{post.courseName}</span>
              </li>
              <li
                style={{
                  paddingRight: "5px",
                  margin: "5px",
                }}
              >
                <span>
                  <strong>Price:</strong>
                </span>
                <span>{post.insertPrice}</span>
              </li>
            </ul>
            <h2
              style={{
                marginTop: "-15px",
                fontFamily: "awesome",
                fontSize: "26px",
                // textAlign: "center",
              }}
            >
              {post.questionTitle}
            </h2>
          </div>
          <div style={{ marginTop: "-15px" }}>
            <div>
              <p>{post.description}</p>
            </div>
          </div>
        </div>
      </Card>
      <div style={{ marginTop: "15px" }}>
        <Row>
          <Col span={18}></Col>
          <Col span={3} style={{ paddingLeft: "70px", paddingBottom: "10px" }}>
            <Button
              type="primary"
              onClick={handleDelete}
              style={{
                // width: "70px",
                // height: "40px",
                // fontSize: "20px",
                fontFamily: "awesome",
              }}
            >
              Delete
            </Button>
          </Col>
          <Col span={3} style={{ paddingLeft: "25px" }}>
            <Button
              type="primary"
              onClick={handleCancel}
              style={{
                // width: "70px",
                // height: "40px",
                // fontSize: "20px",
                fontFamily: "awesome",
              }}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default PostDelete;
