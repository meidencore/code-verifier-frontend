import { Formik, Form, Field, ErrorMessage } from 'formik' 
import * as Yup from 'yup'
import { login } from '../../services/authService'
import { type AxiosResponse } from 'axios'
import { useNavigate } from 'react-router-dom'

const loginSchema = Yup.object().shape(
  {
    email: Yup.string().email('Invalid Email format').required('Email is required'),
    password: Yup.string().required('Password is required')
  }
)

const LoginForm = () => {

  // Define the initial credentials
  const initialCredentials = {
    email: '',
    password: ''
  }

  const navigate = useNavigate()

  return (
    <Formik
      initialValues={ initialCredentials }
      validationSchema={ loginSchema }
      onSubmit={ async (values) => {
        try {
          const response: AxiosResponse = await login(values.email, values.password)
          if (response.status === 200) {
            if (response.data.token) {
              // Persits the JWT in sessionStorage
              sessionStorage.setItem('sessionJWTToken', response.data.token)
              // navigate to the root of the app after login
              navigate('/')
            } else {
              throw new Error('Error generating login token')
            }
          } else {
            throw new Error('Invalid Credentials')
          }
        } catch (error) {
          console.error(`[LOGIN ERROR]: Something went wrong: ${error}`)
        }

      } }
    >

      {
       ({values, touched, errors, isSubmitting, handleChange, handleBlur}) => 
       (
          <Form>

            {/* Email */}
            <label htmlFor='email'>Email</label>
            <Field id='email' type='email' name='email' placeholder='example@email.com' />

            {/* Email Errors */}
            {
              errors.email && touched.email && (
                <ErrorMessage name='email'component='div'></ErrorMessage>
              )
            }

            {/* Password */}
            <label htmlFor='password'>Email</label>
            <Field id='password' type='password' name='password' placeholder='example' />

            {/* Password Errors */}
            {
              errors.password && touched.password && (
                <ErrorMessage name='password'component='div'></ErrorMessage>
              )
            }

            {/* Submit Form */}

            <button type='submit'>Loggin</button>

            {/* Message if the form is submitting */}
            {
              isSubmitting ? 
              (<p>Checking Credentials</p>)
              : null
            }
          
          </Form>
       )
      }

    </Formik>
  )
}

export default LoginForm