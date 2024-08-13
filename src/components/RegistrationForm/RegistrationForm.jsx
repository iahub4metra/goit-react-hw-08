import { Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch} from "react-redux";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup"


const valuesSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required!"),
    password: Yup.string().required("Required!"),
})

const initialValue = {
    name: "",
    email: "",
    password:"",
}

const RegistrationForm = () => {
    const usernameInputId = useId()
    const emailInputId = useId()
    const pwdInputId = useId()
    const dispatch = useDispatch()

    const handleSubmit = (values, actions) => {
        dispatch(register(values));
        actions.resetForm()
    }

    return (
        <Formik initialValues={initialValue} onSubmit={handleSubmit} validationSchema={valuesSchema}>
            <Form>
                <div>
                    <label htmlFor={usernameInputId}>UserName</label>
                    <Field type="text" name="name" id={usernameInputId} />
                </div>
                <div>
                    <label htmlFor={emailInputId}>Email</label>
                    <Field type="email" name="email" id={emailInputId} />
                </div>
                <div>
                    <label htmlFor={pwdInputId}>Password</label>
                    <Field type="password" name="password" id={pwdInputId} />
                </div>
                <button type="submit">Register</button>
            </Form>
        </Formik>
    );
}
 
export default RegistrationForm;