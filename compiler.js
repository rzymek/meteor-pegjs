var PEG = Npm.require("pegjs");
var handler = function (compileStep) {
    try {
        var fileContents = compileStep.read().toString('utf8');
        var compiled = PEG.buildParser(fileContents, {
            output: "source"
        });
        var name = compileStep.inputPath.replace(/^.*[/]([^/]+).pegjs$/, '$1');
        compiled = "var " + name + " = " + compiled;
    } catch (e) {
        throw new Error(compileStep.inputPath + ':' + e.line + ':' + e.column
                + ': ' + e.name + ' - ' + e.message);
    }
    compileStep.addJavaScript({ 
        path: compileStep.inputPath + '.js',
        sourcePath: compileStep.inputPath,
        data: compiled,
        bare: true
    });
};
Plugin.registerSourceHandler("pegjs", handler);