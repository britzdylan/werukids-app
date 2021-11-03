import { extend } from "vee-validate";
import { required, email, alpha, numeric,phone } from "vee-validate/dist/rules";

extend("required", required);
extend("email", email);
extend("alpha", alpha);
extend("numeric", numeric);
extend('RSA_mobile', {
    getMessage: field => "Invalid ZA Mobile Number.",
    validate: value => {
        var textValue = value.split(" ").join("")
        var regex = new RegExp(/^((?:\+27|27)|0)[6-8][0-9]{8}$/);
        return regex.test(textValue);
    }
});
