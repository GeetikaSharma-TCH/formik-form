import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import TextError from './ErrorComponent/textError';
const initialValues = {
    username: '', 
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    confirm_address: ""
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
    address: Yup.string().required('Required'), 
    confirm_address: Yup.string().required('Required')
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
                    <label>Username: </label>
                    <Field  
                        id="username"
                        type="text" 
                        name="username" 
                    />
                    <ErrorMessage name="username" component={TextError}/><br/>
                    <label>EMail: </label>
                    <Field  
                        id="email"
                        type="email" 
                        name="email" 
                    />
                    <ErrorMessage name="email" component={TextError}/><br/>
                    <label>Password: </label>
                    <Field
                        id="password"  
                        type="password" 
                        name="password" 
                    />
                    <ErrorMessage name="password" component={TextError}/><br/>
                    <label>Address: </label>
                    <Field
                        id="address"
                        name="address"
                        as="textarea" // component="textarea"
                    ></Field>
                    <ErrorMessage name="address" component={TextError}></ErrorMessage><br/>

                    {/* use as attribute and componenet */}
                    {/* <label>ConfirmPassword: </label>
                    <Field  
                        id="confirmPasssword"
                        type="password" 
                        name="confirmPasssword" 
                        as="textarea"
                    />
                    <ErrorMessage name="confirmPasssword" component={TextError}/><br/> */}
                    
                    {/* Using render props pattern*/}
                    <label>Confirm Address: </label>
                    <Field name="confirm_address">
                    {(props) => {
                        console.log('props===', props)
                        const {field} = props // const {field, form, meta}
                        return (
                            <div>
                                <input id="confirm_address" type="textarea" {...field}/>
                                {/* {meta.touched && meta.error ? meta.error : null}      */}
                            </div>
                        )
                    }}</Field>
                    <ErrorMessage name="confirm_address" component={TextError}></ErrorMessage><br/>
                    <button type="submit">Register</button>
                </Form>
        </Formik>
    );
}
 
export default UserForm;