# HTML5 input components for Vue JS Developer

## Components

* **Password**
    Input password help you to validate user's input
    * Options
      1. type = string | "password"
      2. password = string | default = alphanumeric
        * alphanumeric - which contain only characters, numeric digits, underscore and first character must be a letter
        * alphanumeric_camelcase - which contain at least one numeric digit, one uppercase and one lowercase letter
        * alphanumeric_specialcharacter - which contain at least one numeric digit, one uppercase and one lowercase letter
        * alphanumeric_specialcharacter_camelcase - which contain at least one numeric digit and a special character
        Reference - https://www.w3resource.com/javascript/form/password-validation.php - automatic!
        
      3. min = integer | default = 0
      4. max = integer | default = 255
    * Example `<VueHoneyInput type="password" password="alphanumeric" min="5" max="20"></VueHoneyInput>`
