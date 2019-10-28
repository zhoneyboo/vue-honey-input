# HTML5 input components for Vue JS Developer

## Components

* **Password** <br />
    Input password help you to validate user's input.
    * Example `<VueHoneyInput type="password" password="alphanumeric" min="5" max="20"></VueHoneyInput>`
    * Password component allowed accepted options <br />
    
    
Options  |  Type   | Default | Value |
-------- | ------- | ------- | ----- |
type | string | "password"| none
password | string | "alphanumeric" | "alphanumeric", "alphanumeric_camelcase", "alphanumeric_specialcharacter", "alphanumeric_specialcharacter_camelcase"
min | integer | 0 | 0 - 255
max | integer | 255 | 0 - 255

* Password <br />

Value | Description
----- | ------------
alphanumeric | which contain only characters, numeric digits, underscore and first character must be a letter.
alphanumeric_camelcase | which contain at least one numeric digit, one uppercase and one lowercase letter.
alphanumeric_specialcharacter | which contain at least one numeric digit, one uppercase and one lowercase letter.
alphanumeric_specialcharacter_camelcase | which contain at least one numeric digit and a special character.
<br />
Reference - https://www.w3resource.com/javascript/form/password-validation.php
