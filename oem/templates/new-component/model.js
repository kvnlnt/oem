oem.Components = (function(Components, Core) {

    // Card component
    var %CLASS% = Core.Prototype(Core.Component, {
        name: "%CLASS%",
        selector: "%SELECTOR%"
    });
    
    // exports
    Components.%CLASS% = %CLASS%;
    return Components;

})(oem.Components || {}, oem.Core);