
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import {login, reset} from '../../../src/features/auth/authSlice'


function Signup(props) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)

  useEffect(() => {
    if (isError) {

    }
    if (isSuccess || user) {
      navigate('/')
    }
    dispatch(reset())
  },[user,isError, isSuccess, message])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
      const userData = {
        email,
        password,
      }

      dispatch(login(userData))
  }

//   if (isLoading) {
//     return <Spinner />
//   }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Login
        </h1>
        <p>Login</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
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
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>


      <section>
      <Link to="/signup">
        <p>Click here to signup</p>
        </Link>
      </section>
    </>
  )
}

export default Signup