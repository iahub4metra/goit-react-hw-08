import {Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup"
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Box, TextField, Button } from "@mui/material";
import s from "./LoginForm.module.css"

const valuesSchema = Yup.object().shape({
    email: Yup.string().required("Required!"),
    password: Yup.string().required("Required!"),
})
const initialValue = {
    email: "",
    password: "",
}

const LoginForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = (values, actions) => {
        dispatch(login(values))
        actions.resetForm()
    }

    return (
        <Box component="section" sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p:3,
        }}>
            <h2 className={s.titleLog}>Log In</h2>
            <Formik initialValues={initialValue} validationSchema={valuesSchema} onSubmit={handleSubmit}>
                <Form>
                    <Box sx={{mb:2,}}>
                        <Field
                            type="email"
                            name="email"
                            as={TextField}
                            label='Email'
                            variant='outlined'
                            required
                            size="small"
                        />
                    </Box>
                    <Box sx={{mb:2,}}>
                        <Field
                            type="password"
                            name="password"
                            as={TextField}
                            label='Password'
                            variant="outlined"
                            required
                            autoComplete="current-password"
                            size="small"
                        />
                    </Box>
                    <Button variant="outlined" type="submit">Log In</Button>
                </Form>
            </Formik>
        </Box>
        
    );
}
 
export default LoginForm;