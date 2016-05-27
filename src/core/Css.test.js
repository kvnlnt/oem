oem.Core = (function(Components, Core) {

    // Css component
    var CssTest = Object.create(Core.Test); // call super constructor
    CssTest.name = "CssTest";
    CssTest.testComponent = 'oem-core-css-test';

    var testCss = [
        {
            selector: "test-css",
            declaration: [
                "color: white",
            ]
        }
    ];

    CssTest.canTranslateJsToCss = function(){
        var renderedCss = Core.Css.translateCss(testCss);
        var cssOutputShouldBe = "test-css {\n";
            cssOutputShouldBe += "   color: white;\n";
            cssOutputShouldBe += "}";
        var test = renderedCss == cssOutputShouldBe;
        CssTest.assert("Can translate js to css", test, true);
    };

    CssTest.canRenderStyleTag = function(){
        Core.Css.render('random-style',testCss);
        var style = document.getElementById('random-style');
        var test = style != null;
        CssTest.assert("Can render style tags", test, true);
    };

    /**
     * Run tests
     */
    Core.Events.addEventListener(Core.EVENTS.DOCUMENT_READY, function(){
        CssTest.runTestSuite('Css', [
            CssTest.canTranslateJsToCss,
            CssTest.canRenderStyleTag
        ]);
    });

    // exports
    Core.CssTest = CssTest;
    return Core;

})(oem.Components || {}, oem.Core);