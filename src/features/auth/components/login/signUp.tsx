import { Button, Form, Input } from 'antd'
import api from 'common/axios/axios'
import { PAGES_PATHS } from 'common/constants/constant'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FormContainer } from '../form-container/form-container'
import style from './login.module.scss'
export const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const onFinish = async () => {
    const paylaod = {
      email: formData.email,
      password: formData.password,
    }
    const response = await api.post('accounts/register', paylaod)
    if (response.status === 200) {
      navigate(PAGES_PATHS.HOME)
    }
  }

  return (
    <FormContainer>
      <div className={style.register}>
        <h2 className={style.register_Title}>Sign Up</h2>
        <span className={style.register_Span}>Enter your account details below.</span>
        <Form name='basic' onFinish={onFinish} autoComplete='off'>
          <Form.Item
            name='email'
            rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input
              onChange={(values: any) => {
                setFormData({ ...formData, email: values.target.value })
              }}
            />
          </Form.Item>

          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password
              onChange={(values: any) => {
                setFormData({ ...formData, password: values.target.value })
              }}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
        <div className={style.register_Text}>
          <p>
            Do you have an account?
            <Link to={PAGES_PATHS.LOGIN} className={style.register_Link}>
              {' Login'}
            </Link>
          </p>
        </div>
      </div>
    </FormContainer>
  )
}
