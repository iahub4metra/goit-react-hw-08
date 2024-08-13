import {Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup"
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";


const valuesSchema = Yup.object().shape({
    email: Yup.string().required("Required!"),
    password: Yup.string().required("Required!"),
})
const initialValue = {
    email: "",
    password: "",
}

const LoginForm = () => {
    const emailInputId = useId()
    const pwdInputId = useId()
    const dispatch = useDispatch()

    const handleSubmit = (values, actions) => {
        dispatch(login(values))
        actions.resetForm()
    }

    return (
        <Formik initialValues={initialValue} validationSchema={valuesSchema} onSubmit={handleSubmit}>
            <Form>
                <div>
                    <label htmlFor={emailInputId}>Email</label>
                    <Field type="email" name="email" id={emailInputId} />
                </div>
                <div>
                    <label htmlFor={pwdInputId}>Password</label>
                    <Field type="password" name="password" id={pwdInputId} />
                </div>
                <button type="submit">Log In</button>
            </Form>
        </Formik>
    );
}
 
export default LoginForm;