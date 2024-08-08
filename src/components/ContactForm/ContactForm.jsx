import { Formik, Form, Field, ErrorMessage } from "formik"
import { useId } from "react"
import * as Yup from "yup"
import css from "./ContactForm.module.css"
import { useDispatch } from "react-redux"
import { addContact } from "../../redux/contactsOps"

const valuesSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required!"),
    number: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required!"),
})

const initialValue = {
    name: "",
    number:"",
}

const ContactForm = () => {
    const nameInputId = useId();
    const numberInputId = useId();
    const dispatch = useDispatch()

    const handleSubmit = (values, actions) => {
        dispatch(addContact(values))
        actions.resetForm()
    }

    return (
        <>
            <Formik initialValues={initialValue} onSubmit={handleSubmit} validationSchema={valuesSchema}>
                <Form className={css.formWrap}>
                    <div>
                        <label htmlFor={nameInputId}>Name</label>
                        <Field className={css.inputElement} type="text" name="name" id={nameInputId} />
                        <ErrorMessage className={css.errorMsg} name="name" component="span"/>
                    </div>
                    <div>
                        <label htmlFor={numberInputId}>Number</label>
                        <Field className={css.inputElement} type="text" name="number" id={numberInputId} />
                        <ErrorMessage className={css.errorMsg} name="number" component="span"/>
                    </div>
                    <button className={css.btnSubmit} type="submit">Add contact</button>
                </Form>
            </Formik>
        </>
    )
}
export default ContactForm