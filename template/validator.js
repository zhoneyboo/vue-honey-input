import password from './validator/password.js'
let input = {
    type: '',
    message: {
        error: {
            'email': 'Not a valid email address',
            'number': 'Not a valid number',
            'password': 'Error in password'
        },
        success: {
            'email': 'You have entered a email address',
            'number': 'Valid number',
        },
    },
    validate: function (type, value, options){
        switch (type) {
            case 'email':
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ? this.result(true, type) : this.result(false, type);
                break;
            case 'number':
                return isNaN(value) ? this.result(true, type) : this.result(false, type);
                break;
            case 'password':
                let test_password = password.validate(options, value);
                return test_password;
                break;
            default:
                break;
        }
    },
    result: function(boolean, type)
    {
        if(boolean)
        {
            return {
                boolean: boolean,
                message: this.message.success[type]
            }
        }
        return {
            boolean: boolean,
            message: this.message.error[type]
        }
    },
};

export default input;