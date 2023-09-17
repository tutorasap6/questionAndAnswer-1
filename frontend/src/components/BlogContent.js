import React, { useEffect, useState } from "react";
import { Card } from "antd";
import axios from "axios";

const BlogContent = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get(
        "http://localhost:5000/api/posts/fetch/answeredPosts"
      );
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);
  return (
    <div>
      {blogs?.length
        ? blogs.map((blog) => {
            return (
              <Card
                style={{ height: "300px", padding: "5px", marginTop: "5px" }}
              >
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
                          <strong>University:</strong>
                        </span>
                        <span>{blog.universityName}</span>
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
                        <span>{blog.category}</span>
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
                        <span>{blog.courseCode}</span>
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
                        <span>{blog.courseName}</span>
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
                        <span>{blog.insertPrice}</span>
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
                      <a href={`/answer/${blog._id}`}>{blog.questionTitle}</a>
                    </h2>
                  </div>
                  <div style={{ marginTop: "-15px" }}>
                    <div>
                      <p>{blog.description}</p>
                    </div>
                    {/* <div
                      style={{
                        marginTop: "80px",
                        paddingLeft: "700px",
                        position: "absolute",
                      }}
                    >
                      <a href="/answer">
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
                      </a>
                    </div> */}
                  </div>
                </div>
              </Card>
            );
          })
        : null}
    </div>
  );
};

export default BlogContent;
