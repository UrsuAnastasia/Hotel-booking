import { PAGES_PATHS } from 'common/constants/constant'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FormContainer } from '../form-container/form-container'
import style from './login.module.scss'
export const Login = () => {
  const navigate = useNavigate()
  return (
    <FormContainer>
      <div className={style.register}>
        <h2 className={style.register_Title}>Log in</h2>
        <span className={style.register_Span}>Enter your account details below.</span>
        <Form className={style.register_Form}>
          <Form.Group className='mb-2' controlId='formBasicEmail'>
            <Form.Label className='text-center'>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>

          <Form.Group className='mb-2' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Form.Group className='mb-2' controlId='formBasicCheckbox'>
            <p className='small'>
              <a className='text-primary' href='#!'>
                Forgot password?
              </a>
            </p>
          </Form.Group>
          <div className='d-grid'>
            <Button
              onClick={() => navigate(PAGES_PATHS.HOME)}
              style={{ background: '#6345fa' }}
              type='submit'>
              Log in
            </Button>
          </div>
        </Form>
        <div className={style.register_Text}>
          <p>
            Don’t have an account?
            <Link className={style.register_Link} to={PAGES_PATHS.SIGN_UP}>
              {' Sign up'}
            </Link>
          </p>
        </div>
      </div>
    </FormContainer>
  )
}
