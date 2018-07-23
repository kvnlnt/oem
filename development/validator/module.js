(function (COMPONENTS) {

    // Main component namespace
    var Validator = {

        // validation methods

        /**
         * Validate field exists
         * @method     required
         */
        required: function (args) {
            if (args === null) return false;
            var isValid = args.val != null && args.val != void 0 && args.val.length != 0 && args.val != false;
            return isValid;
        },

        /**
         * Validate string is an email and return Validator
         * @method     email
         */
        email: function (val) {
            var re = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
            var isValid = re.test(val);
            return isValid;
        },

        /**
         * Validate string is a password and return Validator
         * @method     password
         */
        password: function (val) {
            var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,}$/;
            var isValid = re.test(val);
            return isValid;
        },

        /**
         * Validate that two strings match and return Validator
         * @method     match
         */
        match: function (val1, val2) {
            var isValid = val1 === val2;
            return isValid;
        },

        /**
         * Validate a string is mixed case and return Validator
         * @method     mixedCase
         */
        mixedCase: function (val) {
            var re = /(?:[a-z].+[A-Z])|(?:[A-Z].+[a-z])/g;
            var isValid = re.test(val);
            return isValid;
        },

        /**
         * Validate stirng contains a number and return Validator
         * @method     containsNumber
         */
        containsNumber: function (val) {
            var re = /[0-9]/g;
            var isValid = re.test(val);
            return isValid;
        },

        /**
         * Validate string has minimum length and return validator
         * @method     minLength
         */
        minLength: function (args) {
            var val = args.val;
            var len = args.len;
            var val = val === null ? '' : val;
            var isValid = val.length >= len;
            return isValid;
        },

        /**
         * Validate string has maxiumum length and return validator
         * @method     maxLength
         */
        maxLength: function (args) {
            var val = args.val;
            var len = args.len;
            var val = val === null ? '' : val;
            var isValid = val.length < len;
            return isValid;
        },

        /**
         * Validate value exists in options list and return Validator
         * @method     option
         */
        optionInList: function (args) {
            var val = args.val;
            var list = args.list;
            var isValid = list.indexOf(val) > -1;
            return isValid;
        },

        /**
         * Validate against regex value
         * @method     option
         */
        regex: function (args) {
            var val = args.val;
            var regex = new RegExp(args.pattern);
            var isValid = regex.test(val);
            return isValid;
        }

    };

    // exports
    COMPONENTS.Validator = Validator;
    return COMPONENTS;

})(oem.Components);