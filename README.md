## PEG.js ##
[PEG.js](https://github.com/pegjs/pegjs) is a simple parser generator for JavaScript that produces fast parsers
with excellent error reporting. You can use it to process complex data or
computer languages and build transformers, interpreters,
compilers and other tools easily.

Parsers can be generated on both the client and server.
Files ending with `.pegjs` are automatically compiled to JavaScript.

## Usage ##

Any file ending with a `.pegjs` will be compiled to JavaScript.
The [parser object](http://pegjs.org/documentation#using-the-parser) will be
available under a global variable named after the grammar filename.

For example, a parser for grammar definition placed in

    /client/myGrammar.pegjs

will be accessible on the client

    myGrammar.parse( ... );