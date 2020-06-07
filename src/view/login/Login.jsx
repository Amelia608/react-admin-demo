import React from 'react'
import './Login.css'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const Item = Form.Item
export default class Login extends React.Component {
  render () {
    return (
      <div className="page-login">
        <header>
          React-Admin
        </header>
        <div className="form-wapper">
          <h1>用户登陆</h1>
          <Form
            name="normal_login"
            className="login-form"
          >
            <Form.Item
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
        </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}