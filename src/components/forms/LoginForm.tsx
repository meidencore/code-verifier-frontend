import { Formik, Form, Field, ErrorMessage } from 'formik' 
import * as Yup from 'yup'
import { login } from '../../services/authService'
import { type AxiosResponse } from 'axios'

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
  return (
    <Formik
      initialValues={ initialCredentials }
      validationSchema={ loginSchema }
      onSubmit={ async (values) => {
        // await new Promise((response) => setTimeout(response, 2000))
        // alert(JSON.stringify(values, null, 2))
        // console.table(values)
        try {
          const response: AxiosResponse = await login(values.email, values.password)
          if (response.status === 200) {
            if (response.data.token) {
              sessionStorage.setItem('sessionJWTToken', response.data.token)
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