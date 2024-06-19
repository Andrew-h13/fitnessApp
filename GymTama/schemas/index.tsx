import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Required'),
  username: yup
    .string()
    .min(2, 'Minimum 2 characters')
    .max(12, 'Maximum 12 characters')
    .required('Required'),
  password: yup
    .string()
    .min(5, 'Minimum 5 characters')
    .matches(
      passwordRules,
      'Password must be at least 5 characters long and contain at least one digit, one lowercase letter, and one uppercase letter',
    )
    .required('Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});
