import React from 'react'
import { Outlet } from 'react-router-dom';

const RegisterLayout = () => {
  return (
    <div>
    <section>
        <Outlet/>
    </section>
    </div>
  )
}

export default RegisterLayout;