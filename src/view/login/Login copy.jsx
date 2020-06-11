import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import ReactDOM from 'react-dom'
import "./Login.less";
class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <header>React Admin管理后台</header>
        <div className="login-form-wrapper">
          <h1>用户登录信息</h1>
          <div className="form-content-wrapper">
            <Form name="normal_login">
              <Form.Item name="username">
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item name="password">
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
const WrapLogin=ReactDOM.render(<Login />, mountNode);
export default WrapLogin