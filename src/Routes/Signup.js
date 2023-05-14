import React from "react";
import men from "../image/men.png";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div class="grid   items-center mx-auto">
      <div class="flex flex-col justify-center items-center mx-auto h-[400px] p-10  border-2 max-w-[600px] rounded-lg mt-11  border-green-400">
    <h1 class="text-xl  font-mullish p-2 m-3 text-red-500">SignUp for accessing website</h1>
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
            label="Phone Number"
            name="phNo"
            rules={[
              {
                required: true,
                message: "Please input your Number!",
              },
            ]}
          >
             <Input.Password
              placeholder="810709...."
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
          ></Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 1,
            }}
          >
            <Link to="/login">
              {" "}
              <Button htmlType="submit">Sign-Up</Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
