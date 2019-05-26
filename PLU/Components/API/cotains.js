

export const contains = ({first_name, last_name, email}, query) => {
    if (first_name.includes(query) || email.includes(query) || last_name.includes(query)) 
        return true;
};

export default contains;