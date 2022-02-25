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

})

export default formSchema;