import React from 'react'
import { doSocialLogin } from '../actions'



function LoginForm() {
  return (
    <form className='flex flex-col-2 gap-4 items-center justify-center' action={doSocialLogin}>
        <button className='bg-pink-600 p-3 rounded  text-white'  value="google" type="submit" name="action"> Sign in With Google</button>
        <button  className='bg-black p-3 rounded  text-white' value="github" type="submit" name="action">Sign in With Github</button>
    </form>
  )
}

export default LoginForm