import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import css from "./ContactForm.module.css"
import { useDispatch } from "react-redux"
import { addContact } from "../../redux/contacts/operations"
import { TextField, Button, Box } from "@mui/material"

const valuesSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required!"),
    number: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required!"),
})

const initialValue = {
    name: "",
    number:"",
}

const ContactForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = (values, actions) => {
        dispatch(addContact(values))
        actions.resetForm()
    }

    return (
        <>
            <Formik initialValues={initialValue} onSubmit={handleSubmit} validationSchema={valuesSchema}>
                <Form className={css.formWrap}>
                    <Box sx={{mb:2,}}>
                        <Field
                            as={TextField}
                            variant="outlined"
                            type="text"
                            name="name"
                            label="Name"
                            sx={{ width: '260px' }}
                            size="small"
                        />
                        <ErrorMessage className={css.errorMsg} name="name" component="span"/>
                    </Box>
                    <Box sx={{mb:2,}}>
                        <Field
                            type="text"
                            size="small"
                            name="number"
                            as={TextField}
                            variant="outlined"
                            label="Number"
                            sx={{width:'260px'}}
                        />
                        <ErrorMessage className={css.errorMsg} name="number" component="span"/>
                    </Box>
                    <Button sx={{display:"block", width:"150px", mx:"auto"}} variant="contained"  type="submit">Add contact</Button>
                </Form>
            </Formik>
        </>
    )
}
export default ContactForm