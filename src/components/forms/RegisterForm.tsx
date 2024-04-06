import { Formik, Form, Field, ErrorMessage } from 'formik' 
import * as Yup from 'yup'
import { register } from '../../services/authService'
import { type AxiosResponse } from 'axios'

const RegisterForm = () => {

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    age: 18
  }

  // Yup Validation schema

  const registerSchema = Yup.object().shape(
    {
      name: Yup.string()
      .min(6, 'Username must have 6 letters minimun')
      .max(12, 'Username must have maximun 12 letter')
      .required('Username is required'),
      email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
      password: Yup.string()
      .min(8, 'Password too short')
      .required('Password is required'),
      confirm: Yup.string()
      .oneOf([Yup.ref('password')], 'Password must match')
      .required('You must confirm your password'),
      age: Yup.number()
      .min(18, 'You must be over 18 years old')
      .required('age is required')
    }
  )

  return (
    <Formik
      initialValues={ initialValues }
      validationSchema={ registerSchema }
      onSubmit={ async (values) => {
        const { name, email, password, age } = values
        // await new Promise((response) => setTimeout(response, 2000))
        // alert(JSON.stringify(values, null, 2))
        // console.table(values)
        try {
          const response: AxiosResponse = await register(name, email, password, age)
          if (response.status === 201) {
            console.log('User registered correctly')
            console.log(response.data) 
          } else {
            throw new Error('Error in registry')
          }
        } catch (error) {
          console.error(`[REGISTER ERROR]: Something went wrong: ${error}`)
        }

      } }
    >

      {
       ({values, touched, errors, isSubmitting, handleChange, handleBlur}) => 
       (
          <Form>

            {/* Name */}
            <label htmlFor='name'>Name</label>
            <Field id='name' type='text' name='name' placeholder='John Doe' />

            {/* Name Errors */}
            {
              errors.name && touched.name && (
                <ErrorMessage name='name'component='div'></ErrorMessage>
              )
            }

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
            <label htmlFor='password'>Password</label>
            <Field id='password' type='password' name='password' placeholder='password' />

            {/* Password Errors */}
            {
              errors.password && touched.password && (
                <ErrorMessage name='password'component='div'></ErrorMessage>
              )
            }

            {/* Confirm password */}
            <label htmlFor='confirm'>Confirm Password</label>
            <Field id='confirm' type='password' name='confirm' placeholder='Confirm your password' />

            {/* Confirm password Errors */}
            {
              errors.confirm && touched.confirm && (
                <ErrorMessage name='confirm'component='div'></ErrorMessage>
              )
            }

            {/* Age */}
            <label htmlFor='age'>Age</label>
            <Field id='age' type='number' name='age' placeholder='18' />

            {/* Age Errors */}
            {
              errors.age && touched.age && (
                <ErrorMessage name='age'component='div'></ErrorMessage>
              )
            }

            {/* Submit Form */}

            <button type='submit'>Register</button>

            {/* Message if the form is submitting */}
            {
              isSubmitting ? 
              (<p>Sending data ...</p>)
              : null
            }
          
          </Form>
       )
      }

    </Formik>
  )
}

export default RegisterForm