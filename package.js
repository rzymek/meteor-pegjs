Package.describe({
    name: 'rzymek:pegjs',
    version: '0.9.0',
    summary: 'PEG.js compiler',
    git: 'https://github.com/rzymek/meteor-pegjs.git'
});

Package.registerBuildPlugin({
    name: "pegjs",
    use: [],
    sources: ['compiler.js'],
    npmDependencies: {
        "pegjs": "0.9.0"
    }
});
