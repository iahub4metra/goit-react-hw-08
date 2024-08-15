import { Field, Form, Formik } from "formik";
import { useDispatch} from "react-redux";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup"
import { Box, TextField, Button } from "@mui/material";
import s from "./RegistrationForm.module.css"


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

    const handleSubmit = (values, actions) => {
        dispatch(register(values));
        actions.resetForm()
    }

    return (

        <Box component="section" sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p:3,
            
        }}>
            <h2 className={s.titleRegis}>Sign Up</h2>
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
                            sx={{width:"260px"}}
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