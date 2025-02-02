import React, { useState, useEffect } from "react";
import { get, patch } from "axios";
import { navigate } from "gatsby";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Layout, Dropdown } from "antd";
import { Link } from "gatsby";
import { Menu } from "antd";
import { Col, Row } from "antd";
import logocom from "../../../../assets/images/Logocom.png";
import { CaretDownOutlined } from '@ant-design/icons';
import { Button, Input } from "antd";

const { TextArea } = Input;

const { Header } = Layout;
function PostEdit(params) {
  const { id } = params;
  console.log(id);
  const [post, setPost] = useState({});
  const [temp, setTemp] = useState({}); 

  useEffect(
    function () {
      async function updatePost() {
        try {
          const response = await get(`${process.env.api_url}/api/posts/${id}`);
          setTemp(response.data);
          setPost(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      updatePost();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  function handleSubmit(event) {
    event.preventDefault();
    async function updatePost() {
      try {
        await patch(`${process.env.api_url}/api/posts/${id}`, post);
        toast.success("Updated Successfully", {
          position: "top-right",
          autoClose: 1000,
          theme: "colored",
          hideProgressBar: true,
        });
        setTimeout(() => {
          navigate("/admin/admin");
        }, 1500);
      } catch (error) {
        console.log(error);
        navigate('/404')
      }
    }
    updatePost();
  }

  function handleChange(e) {
    setPost((post) => {
      return { ...post, [e.target.name]: e.target.value };
    });
  }

  function handleCancel() {
    navigate("/admin/admin");
  }
  const array = [
    {name: "Admin", url: "/admin/admin"},
    { name: "Home", url: "/" },
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

            lg={{ span: 3 }}
            style={{
              display: "flex",
              paddingTop: "10px",
            }}
          >
            <a href="/" style={{ margin: '0 auto' }}>
              <img src={logocom} alt="logo" height="40%" />
            </a>
          </Col>
          <Col md={{ span: 0 }} xl={{ span: 21 }} style={{ paddingTop: "30px" }}>
              <Menu
                theme="white"
                mode="horizontal"
                style={{ minWidth: 0, flex: "auto", justifyContent: "flex-end" }}
                md={{ gap: '3px' }}
                items={array.map((item, index) => {
                  const key = index + 1;
                  return {
                    key,
                    label: (
                      <Link to={item.url}>
                        <span
                          style={{
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
          <Col md={{ span: 3, offset: 10 }} lg={{offset: 17}} xl={{ span: 0 }} style={{ paddingTop: "30px" }}>
              <Dropdown
                trigger={['click']}
                menu={{items: array.map((item, index) => ({
                  key: index + 1, label: <Link to={item.url}>
                    <span
                      style={{
                        fontFamily: "awesome",
                        color: "black",
                        fontSize: "16px",
                      }}
                    >
                      {item.name}
                    </span>
                  </Link>
                }))}}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <CaretDownOutlined />
                </a>
              </Dropdown>
            
          </Col>
          <Col span={2}></Col>
        </Row>
      </Header>
      <div>
        <ToastContainer />
        <h1 style={{ textAlign: "center" }}>Edit </h1>
        <hr />
        <form
          onSubmit={handleSubmit}
          style={{
            marginLeft: "400px",
            marginRight: "400px",
            marginTop: "30px",
          }}
        >
          <div>
            <label>CourseCode:</label>

            <Input
              name="courseCode"
              type="text"
              value={post.courseCode}
              onChange={handleChange}
            />
          </div>

          <div style={{ marginTop: "15px" }}>
            <label>courseName:</label>

            <Input
              name="courseName"
              value={post.courseName}
              required
              onChange={handleChange}
            />
          </div>

          <div style={{ marginTop: "15px" }}>
            <label>University:</label>

            <Input
              name="universityName"
              value={post.universityName}
              required
              onChange={handleChange}
            />
          </div>

          <div style={{ marginTop: "15px" }}>
            <label>Category:</label>

            <Input
              name="category"
              value={post.category}
              type="text"
              required
              onChange={handleChange}
            />
          </div>

          <div style={{ marginTop: "15px" }}>
            <label>Price:</label>

            <Input
              name="insertPrice"
              type="number"
              value={post.insertPrice}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div style={{ marginTop: "15px" }}>
            <label>Tag:</label>

            <Input
              name="insertTagsHere"
              value={post.insertTagsHere}
              type="url"
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div style={{ marginTop: "15px" }}>
            <label>Description:</label>

            <TextArea
              style={{ height: "400px" }}
              name="description"
              value={post.description}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div style={{ marginTop: "15px" }}>
            <Button type="primary" onClick={handleSubmit}>
              Update
            </Button>
            <Button
              type="primary"
              onClick={handleCancel}
              style={{ marginLeft: "15px" }}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PostEdit;
