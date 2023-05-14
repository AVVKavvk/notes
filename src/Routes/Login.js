import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import men from "../image/men.png";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div class="grid grid-cols-2 mx-72 items-center ">
      <div class="w-[580px]">
        <img src={men} alt="" height="500px" width="400px" />
        </div>
      <div class="flex justify-center items-center mx-auto h-[400px] p-10  border-2 max-w-[600px] rounded-lg mt-11  border-green-400">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              class=""
              placeholder="email"
              onChange={(e) => console.log(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              placeholder="password"
              onChange={(e) => console.log(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 1,
            }}
          >
           <Link to="/signup"> <Button htmlType="submit">Login</Button></Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
