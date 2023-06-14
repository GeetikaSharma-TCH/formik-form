import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
const initialValues = {
    username: '', 
    email: "",
    password: "",
    confirmPassword: ""
}

const onSubmit = values => {
    console.log('on Submit')
}

// in place of validate use validationSchema
const validationSchema = Yup.object({
    username : Yup.string().required('Required'),
    email: Yup.string().email('EMail is not valid').required('Required'),
    password: Yup.string().required('Required'),
    confrimPassword: Yup.string().required('Required'),

})

// const validate = values => {
//     console.log('values', values)
//     let errors = {}
//     if(!values.username){
//         errors.username = "Required"
//     }
//     if(!values.email){
//         errors.email = "Required"
//     }
//     if(!values.password){
//         errors.password = "Required"
//     }
//     if(!values.confirmPassword){
//         errors.confirmPassword = "Required"
//     }
//     return errors
// }

const UserForm = () => {
    // const formik = useFormik({
    //     initialValues,
    //     onSubmit, 
    //     validate
    // })
    console.log('formik')
    return ( 
        <Formik
            initialValues= {initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            >
                <Form>
                    <Field  
                        id="username"
                        type="text" 
                        name="username" 
                    />
                    <ErrorMessage name="username"/>                    
                    <Field  
                        id="email"
                        type="email" 
                        name="email" 
                    />
                    <ErrorMessage name="email"/>
                    <Field
                        id="password"  
                        type="password" 
                        name="password" 
                    />
                    <ErrorMessage name="password"/>
                    <Field  
                        id="confirmPasssword"
                        type="password" 
                        name="confirmPasssword" 
                    />
                    <ErrorMessage name="confirmPasssword"/>
                    <button type="submit">Register</button>
                </Form>
        </Formik>
    );
}
 
export default UserForm;