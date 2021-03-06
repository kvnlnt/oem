/**
 *
 * @class   Component
 * @desc    Core prototype that all components should be prototyped from
 */

(function(CORE) {

    var Component = {};
    Component.el = null;
    Component.id = null;
    Component.type = "Component";
    Component.events = {};

    Component.init = function(){
        // overwrite in component prototype
    };

    // GETTERS

    Component.getId = function(){
        return this.id;
    };

    Component.getEl = function(){
        return this.el;
    };

    Component.getType = function(){
        return this.type;
    };

    Component.getEvents = function(){
        return this.events;
    };

    // SETTERS

    Component.setId = function(id){
        this.id = id || CORE.Modules.UTIL.guid();
        if(this.getEl()) this.getEl().dataset.oemId = id;            
        return this;
    };

    Component.setType = function(type){
        this.type = type;
        return this;
    };

    Component.setEl = function(el){
        this.el = el;
        return this;
    };

    Component.setEvents = function(events){
        this.events = events;
        return this;
    };

    CORE.Component = Component;
    return CORE;
    

})(oem.Core);

