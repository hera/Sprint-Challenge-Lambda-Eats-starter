import * as yup from 'yup';

const orderFormSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .min(3, 'The username must be at least three characters long')
        .required('The username is a required field')
})

export default orderFormSchema;