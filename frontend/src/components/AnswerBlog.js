import React from "react";
import { Card, Button } from "antd";
import screenimg from "../assets/images/default-answer.jpg";
import Checkout from "./Checkout";

const AnswerBlog = ({ post }) => (
  <div style={{ marginBottom: "50px" }}>
    <Card style={{ height: "300px", padding: "5px" }}>
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
                <strong>Date:</strong>
              </span>
              <span>03 May 2023</span>
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
          {/* <div style={{ marginTop: "-15px", paddingLeft: "680px" }}>
            <button
              type="submit"
              style={{
                width: "100%",
                height: "30px",
                fontSize: "20px",
                fontFamily: "awesome",
              }}
            >
              Answer
            </button>
          </div> */}
        </div>
      </div>
    </Card>
    <Card style={{ height: "300px", padding: "5px", marginTop: 16 }}>
      <div
        style={{
          padding: "5px",
          paddingTop: "10px",
          fontFamily: "'Heebo', sans-serif",
          marginBottom: "15px",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <h2
            style={{
              marginTop: "-20px",
              fontFamily: "awesome",
              fontSize: "26px",
              textAlign: "center",
            }}
          >
            Answer Details
          </h2>
        </div>
        <div style={{ marginTop: "-20px" }}>
          <div style={{ borderTop: "1px solid #dedede" }}>
            <img
              src={screenimg}
              alt="screenimage"
              width="100%"
              height="160px"
            />
          </div>
          <div>
            {/* <a href="/homework-solution-details/632507/accn-2010-quiz-1-tulane-university">
              Read more <i></i>
            </a> */}
            <Checkout post={post} />
            <div style={{ marginTop: "5px" }}>
              <Button block style={{ fontWeight: "bold" }}>
                Get a quote of a new original/Human generated paper
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
);

export default AnswerBlog;
