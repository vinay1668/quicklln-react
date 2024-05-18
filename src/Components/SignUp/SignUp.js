
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import {register, reset} from '../../../src/features/auth/authSlice'
 
function Signup(props) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: "",
    phone: "",
    email: '',
    password: '',
    employeeType: 'ADMIN',
    password2: '',
  })

  const { firstName, lastName, phone, employeeType, email, password, password2 } = formData

  const [isRegister, setIsRegister] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)

  useEffect(() => {
    if (isError) {
      // Handle error
    }
    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      //toast.error('Passwords do not match')
    } else {
      const userData = {
        firstName,
        lastName,
        phone,
        employeeType,
        email,
        password,
      }

      if (dispatch(register(userData))) {
        setIsRegister(true)
      }
    }
  }

  return (
    <div>
      {isRegister ? (
        <Navigate to="/login" />
      ) : (
        <div>
          <section className='heading'>
            <h1>
              <FaUser /> Register
            </h1>
            <p>Please create an account</p>
          </section>

          <section className='form'>
            <form onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='firstName'
                  name='firstName'
                  value={firstName}
                  placeholder='Enter your first name'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='lastName'
                  name='lastName'
                  value={lastName}
                  placeholder='Enter your last name'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  name='email'
                  value={email}
                  placeholder='Enter your email'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='phone'
                  name='phone'
                  value={phone}
                  placeholder='Enter your phone number'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='employeeType'
                  name='employeeType'
                  value={employeeType}
                  placeholder='Enter your employee type'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  name='password'
                  value={password}
                  placeholder='Enter password'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  id='password2'
                  name='password2'
                  value={password2}
                  placeholder='Confirm password'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <button type='submit' className='btn btn-block'>
                  Submit
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </div>
  )
}

export default Signup