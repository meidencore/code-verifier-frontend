import axios from '../utils/config/axios.config'

/**
 * Login Method
 * @param {string} email Email to login a user
 * @param {string} password Password to login a User
 * @returns 
 */
export const login = (email: string, password: string) => {
  // Declare body to POST
  // TODO make the TYPE of this body
  const body = {
    email,
    password
  }

  // Send Post request to login endpoint (return a Promise, the component will handle this)
  return axios.post('/auth/login', body)
}

/**
 * Resgister Method
 * @param name Name to register a user 
 * @param email Email to register a user
 * @param password Password to register a user
 * @param age Age of User
 * @returns 
 */
export const register = (name: string, email: string, password: string, age: number) => {
  // Declare body to POST
  // TODO make the TYPE of this body
  const body = {
    name,
    email,
    password,
    age
  }

  // Send Post request to register endpoint (return a Promise, the component will handle this)
  return axios.post('/auth/register', body)
}