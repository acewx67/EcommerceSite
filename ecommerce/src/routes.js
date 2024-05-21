import React from 'react'

const SignUp = React.lazy (() => import('./Pages/SignUp/SignUp'))

const routes = [
    {
        path : "/",
        strict : true,
        exact : true,
        name : "SignUp",
        component : <SignUp/>
    }
]

export default routes;