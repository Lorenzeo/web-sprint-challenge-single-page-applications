import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('Name is required')
    .min(2, 'name must be at least 2 characters'),

    instructions: yup
    .string()
    .trim(),

    size: yup
    .string()
    .oneOf(['small', 'medium', 'large', 'x-large'], 'Pick a Size'),

    topping1: yup.boolean(),
    topping2: yup.boolean(),
    topping3: yup.boolean(),
    topping4: yup.boolean()


})

export default formSchema;