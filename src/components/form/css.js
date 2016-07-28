(function(COMPONENTS, THEME) {

    var Css = [

        {
            selector: ".oem-form .help",
            declaration: [
                "font-size:" + THEME.FONT.SIZE.MEDIUM + "px",
                "margin: 10px 0px",
                "opacity: 0.6"
            ]
        },

        {
            selector: ".oem-form .validations",
            declaration: [
                "display:none"
            ]
        },

        {
            selector: ".oem-form .errors",
            declaration: [
                "color:" + THEME.COLORS.ALERT,
                "font-size:" + THEME.FONT.SIZE.SMALL
            ]
        },

        {
            selector: ".oem-form input",
            declaration: [
                "width:100%",
                "font-size:" + THEME.FONT.SIZE.MEDIUM + "px",
                "padding:10px",
                "border:1px solid " + THEME.FORMS.FIELD_BORDER_COLOR,
                "border-radius: 2px"
            ]
        }

    ];


    COMPONENTS.Form.Css = Css;
    return COMPONENTS;

})(oem.Components, oem.Core.Modules.Theme);