(function(Core) {

     var Responsifier = {};

     // default breakpoints
     Responsifier.BREAKPOINTS = [{
        "klass": "mobile",
         width: [0, 300]
     }, 
     {
        "klass": "short",
         height: [50, 300]
     },
     {
        "klass": "tablet",
         width: [301, 500]
     }, {
        "klass": "desktop",
        width: [501, '*']
     }];

     // initialize
     Responsifier.init = function() {
        Responsifier.responsify();
        return this;
     };

     /**
      * Loops and adds classes based on breakpoints
      *
      * @method     responsify
      * @return     {Object}  { description_of_the_return_value }
      */
     Responsifier.responsify = function(components) {

        var components = components || oem.list.all;

         // loop all components        
         for (var i in components) {

             var component = components[i]; // current component
             var el = component.getEl(); // current element
             var breakpoints = component.getBreakpoints(); // current breakpoints
             var width = el.offsetWidth; // element width
             var height = el.offsetHeight; // element height

             // calc current components classes based on it's breakpoints
             for (var b = 0; b < breakpoints.length; b++) {

                // current breakpoint
                 var breakpoint = breakpoints[b];

                 // reset application of current klass
                 el.classList.remove(breakpoint.klass);

                 // apply width ranges
                 if (breakpoint.hasOwnProperty('width') && 
                    width >= breakpoint.width[0] && 
                    (width <= breakpoint.width[1] || breakpoint.width[1] === '*')) {
                    el.classList.add(breakpoint.klass);
                 }

                 // apply height ranges
                 if (breakpoint.hasOwnProperty('height') && 
                    height >= breakpoint.height[0] && 
                    (height <= breakpoint.height[1] || breakpoint.height[1] === '*')) {
                    el.classList.add(breakpoint.klass);
                 }

             }

         }

         return this;
     };


     // run after all components have been collected
     Core.Modules.Events.addEventListener(Core.Modules.EVENTS.COMPONENTS_COLLECTED, Responsifier.init);
     Core.Modules.Events.addEventListener(Core.Modules.EVENTS.WINDOW_RESIZED, function(){
        Responsifier.responsify();
     });

     Core.Modules.Responsifier = Responsifier;
     return Core;

 })(oem.Core);