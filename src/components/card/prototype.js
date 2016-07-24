oem.Components = (function(Components, Core) {

    // Card component
    var Prototype = Core.Prototype(Core.Component, {
        type:"Card",
        selector:"oem-card"
    });

    // exports
    Components.Card.Prototype = Prototype;
    return Components;

})(oem.Components || {}, oem.Core);