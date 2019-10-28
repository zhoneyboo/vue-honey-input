import __vue_normalize__ from 'D:sample_plugin
ode_modulesollup-plugin-vueuntime
ormalize.js';

var password = {
    validate: function (ref, value)
    {
        var password_type = ref.password_type;
        var min = ref.min;
        var max = ref.max;
   

        console.log(value);
        var pass_reg_expression = "";
        var message = {
            success: "",
            error: "",
        };
        switch (password_type) {
            case 'alphanumeric':
                var string = "^[A-Za-z0-9]{" + min + "," + max + "}$";
                pass_reg_expression = new RegExp(string, "g");
                message.success = "Your password is correct";
                message.error = "Password must be between " + min + " to " + max + " characters and must contain characters and numeric digits";
                break;
            case 'alphanumeric_camelcase':
                var string = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{" + min + "," + max + "}$";
                pass_reg_expression = new RegExp(string, "g");
                message.success = "Your password is correct";
                message.error = "Password must be between " + min + " to " + max + " characters and must at least one numeric digit, one uppercase and one lowercase letter";
                break;

            case 'alphanumeric_specialcharacter':
                var string = "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{" + min + "," + max + "}$";
                pass_reg_expression = new RegExp(string, "g");
                message.success = "Your password is correct";
                message.error = "Password must be between " + min + " to " + max + " characters and must contain Alphanumeric characted and a special character";
                break;

            case 'alphanumeric_specialcharacter_camelcase':
                var string = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{" + min + "," + max + "}$";
                pass_reg_expression = new RegExp(string, "g");
                message.success = "Your password is correct";
                message.error = "Password must be between " + min + " to " + max + " characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character";
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
};

var input = {
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
            case 'number':
                return isNaN(value) ? this.result(true, type) : this.result(false, type);
            case 'password':
                var test_password = password.validate(options, value);
                return test_password;
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

//
var script = {
    props: ["type", 'password', 'min', 'max'],
    computed: {
        inputType: function(){
            return typeof this.type === "undefined" ? "text" : this.type;
        },
        validate: function(){
            var options = {
                min: typeof this.min === "undefined" ? 0 : this.min,
                max: typeof this.max === "undefined" ? 255 : this.max,
                password_type: typeof this.password === "undefined" ? "" : this.password
            };
            return typeof this.value === "undefined" || this.value == "" ? "" : input.validate(this.inputType, this.value, options); 
        },
        ValidateErrorMessage: function(){
            return input.message;
        }
    },
    data: function data() {
        return {
            value: ""
        }
    },
};

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [
    _vm.inputType === "checkbox"
      ? _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.value,
              expression: "value"
            }
          ],
          attrs: { type: "checkbox" },
          domProps: {
            checked: Array.isArray(_vm.value)
              ? _vm._i(_vm.value, null) > -1
              : _vm.value
          },
          on: {
            change: function($event) {
              var $$a = _vm.value,
                $$el = $event.target,
                $$c = $$el.checked ? true : false;
              if (Array.isArray($$a)) {
                var $$v = null,
                  $$i = _vm._i($$a, $$v);
                if ($$el.checked) {
                  $$i < 0 && (_vm.value = $$a.concat([$$v]));
                } else {
                  $$i > -1 &&
                    (_vm.value = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                }
              } else {
                _vm.value = $$c;
              }
            }
          }
        })
      : _vm.inputType === "radio"
      ? _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.value,
              expression: "value"
            }
          ],
          attrs: { type: "radio" },
          domProps: { checked: _vm._q(_vm.value, null) },
          on: {
            change: function($event) {
              _vm.value = null;
            }
          }
        })
      : _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.value,
              expression: "value"
            }
          ],
          attrs: { type: _vm.inputType },
          domProps: { value: _vm.value },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.value = $event.target.value;
            }
          }
        }),
    _vm._v(" "),
    _c("small", [_vm._v(_vm._s(_vm.validate))])
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var VueHoneyInput = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

// Import vue component

// Declare install function executed by Vue.use()
function install(Vue) {
    if (install.installed) { return; }
    install.installed = true;
    Vue.component('MyComponent', VueHoneyInput);
}

// Create module definition for Vue.use()
var plugin = {
    install: install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
var GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}n;
if (GlobalVue) {
    GlobalVue.use(plugin);
}

export default VueHoneyInput;
export { install };
