var PEG = Npm.require("pegjs");
var path = Npm.require("path");
var handler = function (compileStep) {
    try {
        var fileContents = compileStep.read().toString('utf8');
        var compiled = PEG.buildParser(fileContents, {
            output: "source"
        });
        var name = path.basename(compileStep.inputPath, '.pegjs');
        compiled = name + " = " + compiled;
        compileStep.addJavaScript({
            path: compileStep.inputPath + '.js',
            sourcePath: compileStep.inputPath,
            data: compiled
        });
    } catch (e) {
        compileStep.error({
            sourcePath: compileStep.inputPath,
            message: e.name + ': ' + e.message,
            line: e.line,
            column: e.column
        });
    }

};
Plugin.registerSourceHandler("pegjs", handler);
