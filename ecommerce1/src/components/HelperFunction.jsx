export const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
        errors.username = 'Email is required!';
    } else if (!regex.test(values.username)) {
        errors.username = 'This is not a valid email format!';
    }
    return errors;
};