let password = {
    validate: function ({ password_type, min, max}, value)
    {   

        console.log(value)
        let pass_reg_expression = "";
        let message = {
            success: "",
            error: "",
        };
        switch (password_type) {
            case 'alphanumeric':
                var string = `^[A-Za-z0-9]{${min},${max}}$`
                pass_reg_expression = new RegExp(string, "g");
                message.success = "Your password is correct";
                message.error = `Password must be between ${min} to ${max} characters and must contain characters and numeric digits`;
                break;
            case 'alphanumeric_camelcase':
                var string = `^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{${min},${max}}$`
                pass_reg_expression = new RegExp(string, "g");
                message.success = "Your password is correct";
                message.error = `Password must be between ${min} to ${max} characters and must at least one numeric digit, one uppercase and one lowercase letter`;
                break;

            case 'alphanumeric_specialcharacter':
                var string = `^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{${min},${max}}$`
                pass_reg_expression = new RegExp(string, "g");
                message.success = "Your password is correct";
                message.error = `Password must be between ${min} to ${max} characters and must contain Alphanumeric characted and a special character`;
                break;

            case 'alphanumeric_specialcharacter_camelcase':
                var string = `^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{${min},${max}}$`
                pass_reg_expression = new RegExp(string, "g");
                message.success = "Your password is correct";
                message.error = `Password must be between ${min} to ${max} characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character`;
                break;
            default:
                break;
        }
        if (value.match(pass_reg_expression))
        {
            return {
                    boolean: true,
                    message: message.success
                }
        }else{
             return {
                boolean: false,
                message: message.error
            }
        }
    }
}
export default password;