(function(COMPONENTS, FIELD, PROTOTYPE) {

    var Prototype = PROTOTYPE(FIELD, {
        type: "Textarea"
    });

    Prototype.init = function(){
        this.super.init.call(this);
        this.setValue(this.getField().value);
        this.getField().addEventListener('input', this.handleInputChange.bind(this)); // get the input field
        this.getField().addEventListener('focus', this.getField().select);
    };

    Prototype.getField = function(){
        var field = this.getEl().querySelector('textarea');
        return field;
    };

    Prototype.handleInputChange = function(){
        var currValue = this.getField().value;
        this.setValue(currValue);
        oem.events.dispatch(this.getEvents().changed, this, currValue);
    };


    COMPONENTS.Textarea.Prototype = Prototype;
    return COMPONENTS;

})(oem.Components,
    oem.Components.Field.Prototype,
    oem.Core.Prototype
);