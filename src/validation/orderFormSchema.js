import * as yup from 'yup';

const orderFormSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .min(3, 'The username must be at least three characters long')
        .required('The username is a required field'),
    size: yup.string(),
    toppingPepperoni: yup.string(),
    toppingSausage: yup.string(),
    toppingBacon: yup.string(),
    toppingOnions: yup.string(),
    toppingBellPepper: yup.string(),
    sauce: yup.string(),
    instructions: yup.string()
})

export default orderFormSchema;