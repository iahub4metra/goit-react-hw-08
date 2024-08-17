import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector} from "react-redux";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup"
import { Box, TextField, Button } from "@mui/material";
import s from "./RegistrationForm.module.css"
import { NavLink } from "react-router-dom";
import { selectError } from "../../redux/auth/selectors";
import { clearError } from "../../redux/auth/slice";


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
    const dispatch = useDispatch()
    const errorBoolean = useSelector(selectError)
    const handleSubmit = (values, actions) => {
        dispatch(clearError())
        dispatch(register(values));
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
            <h2 className={s.titleRegis}>Sign Up</h2>
            <p>Already have an account? <span><NavLink className={s.linkRegToLog} to="/login">Log in here</NavLink></span></p>
            <Formik initialValues={initialValue} onSubmit={handleSubmit} validationSchema={valuesSchema}>
                <Form>
                    <Box sx={{mb:2,}}>
                        <Field
                            as={TextField}
                            label='UserName'
                            type="text"
                            name="name"
                            variant='outlined'
                            required
                            size="small"
                            sx={{width:"260px"}}
                        />
                    </Box>
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
                            helperText={errorBoolean && 'This email is used by another user!'}
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
                            sx={{width:"260px"}}
                        />
                    </Box>
                    <Button variant="outlined" type="submit">Register</Button>
                </Form>
            </Formik>
        </Box>
        
    );
}
 
export default RegistrationForm;