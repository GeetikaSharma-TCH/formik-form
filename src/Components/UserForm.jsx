import React from 'react';
import { useFormik } from 'formik';

const initialValues = {
    username: '', 
    email: "",
    password: "",
    confirmPassword: ""
}

const onSubmit = values => {
    console.log('on Submit')
}

const validate = values => {
    console.log('values', values)
    let errors = {}
    if(!values.username){
        errors.username = "Required"
    }
    if(!values.email){
        errors.email = "Required"
    }
    if(!values.password){
        errors.password = "Required"
    }
    if(!values.confirmPassword){
        errors.confirmPassword = "Required"
    }
    return errors
}

const UserForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit, 
        validate
    })
    console.log('formik', formik)
    return ( 
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input  
                    type="text" 
                    name="username" 
                    {...formik.getFieldProps('username')}>
                </input>
                {formik.touched.username && formik.errors.username ?  formik.errors.username : null}
                <input 
                    type="text" 
                    name="email" 
                    {...formik.getFieldProps('email')}></input>
                {formik.touched.email && formik.errors.email ?  formik.errors.email : null}
                <input 
                    type="password" 
                    name="password" 
                    {...formik.getFieldProps('password')}></input>
                    {formik.touched.password && formik.errors.password ?  formik.errors.password : null}
                <input  
                    type="password"
                    name="confirmPassword"
                    {...formik.getFieldProps('confirmPassword')}></input>
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ?  formik.errors.confirmPassword : null}
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
 
export default UserForm;