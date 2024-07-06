export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};
export const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
};
export const validateName = (name) => {
    const regex = /^[A-Za-z\s]{2,}$/;
    return regex.test(name);
};
export const getInitials = (name) => {
    let initials = "";
    const words = name.split(' ');
    for (const word of words) {
        if (word.length > 0) {
            initials += word[0].toUpperCase();
        }
    }

    return initials;
};
