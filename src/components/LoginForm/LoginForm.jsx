import {Field, Form, Formik } from "formik";
import * as Yup from "yup"
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Box, TextField, Button } from "@mui/material";
import s from "./LoginForm.module.css"
import { NavLink } from "react-router-dom";
import { selectError } from "../../redux/auth/selectors";
import { clearError } from "../../redux/auth/slice";

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
    const errorBoolean = useSelector(selectError)
    const handleSubmit = (values, actions) => {
        dispatch(clearError())
        dispatch(login(values))
        if (errorBoolean) {
            actions.resetForm()
        }
        
    }
    return (
        <Box component="section" sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p:3,
        }}>
            <h2 className={s.titleLog}>Log In</h2>
            <p>Don't have an account? <span><NavLink className={s.linkLogToReg} to="/register">Sign Up here</NavLink></span></p>
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
                            sx={{ width: "260px" }}
                            error={errorBoolean}
                            helperText={errorBoolean && 'Incorrect entry'}
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
                            sx={{ width: "260px" }}
                            error={errorBoolean}
                            helperText={errorBoolean && 'Incorrect entry'}
                        />
                    </Box>
                    <Button variant="outlined" type="submit">Log In</Button>
                </Form>
            </Formik>
        </Box>
        
    );
}
 
export default LoginForm;