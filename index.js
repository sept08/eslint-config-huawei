module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },

  env: {
    es6: true,
    node: true,
    commonjs: true,
    jquery: true,
    mocha: true
  },

  root: true,

  globals: {
    document: false,
    navigator: false,
    window: false
  },

  rules: {
    /**
     * Possible Errors
     * These rules relate to possible syntax or logic errors in JavaScript code
     */
    // enforce “for” loop update clause moving the counter in the right direction.
    'for-direction': 'error',
    // enforce return statements in getters, and disallow implicitly returning undefined with a return; statement
    'getter-return': 'error',
    // @off Too strict
    'no-await-in-loop': 'off',
    // disallow comparing against -0
    'no-compare-neg-zero': 'error',
    // disallow assignment operators in conditional expressions, until they are enclosed in parentheses
    'no-cond-assign': 'error',
    // @off Too strict
    'no-console': 'off',
    // disallow constant expressions in conditions, until in loop
    'no-constant-condition': [
      'error',
      {
        checkLoops: false
      }
    ],
    // disallow control characters in regular expressions
    'no-control-regex': 'error',
    // @autofix disallow the use of debugger
    'no-debugger': 'error',
    // disallow duplicate arguments in function definitions
    'no-dupe-args': 'error',
    // disallow duplicate keys in object literals
    'no-dupe-keys': 'error',
    // disallow duplicate case labels
    'no-duplicate-case': 'error',
    // disallow empty block statements
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true
      }
    ],
    // disallow empty character classes in regular expressions
    'no-empty-character-class': 'error',
    // disallow reassigning exceptions in catch clauses
    'no-ex-assign': 'error',
    // @autofix disallow unnecessary boolean casts
    'no-extra-boolean-cast': 'error',
    // @autofix disallow unnecessary parentheses
    'no-extra-parens': [
      "error",
      "functions"
    ],
    // @autofix disallow unnecessary semicolons
    'no-extra-semi': 'error',
    // disallow reassigning function declarations
    'no-func-assign': 'error',
    // disallow variable or function declarations in nested blocks
    'no-inner-declarations': 'error',
    // disallow invalid regular expression strings in RegExp constructors
    'no-invalid-regexp': 'error',
    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': [
      'error',
      {
        skipComments: false,
        skipRegExps: true,
        skipTemplates: true
      }
    ],
    // disallow calling global object properties as functions
    'no-obj-calls': 'error',
    // @ff 会用到 hasOwnProperty 来避免对于原型链的循环
    'no-prototype-builtins': 'off',
    // @autofix disallow multiple spaces in regular expressions
    'no-regex-spaces': 'error',
    // disallow sparse arrays
    'no-sparse-arrays': 'error',
    // disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 'error',
    // disallow confusing multiline expressions
    'no-unexpected-multiline': 'error',
    // disallow unreachable code after return, throw, continue, and break statements
    'no-unreachable': 'error',
    // disallow control flow statements in finally blocks
    'no-unsafe-finally': 'error',
    // @autofix disallow negating the left operand of relational operators(in/instanceof)
    'no-unsafe-negation': 'error',
    // require calls to isNaN() when checking for NaN
    'use-isnan': 'error',
    // enforce valid JSDoc comments
    'valid-jsdoc': [
      'warn',
      {
        requireReturn: false,
        requireReturnDescription: false
      }
    ],
    // enforce comparing typeof expressions against valid strings('undefined', 'object', 'boolean', 'number', 'string', 'function' and 'symbol')
    'valid-typeof': 'error',

    /**
     * Best Practices
     * These rules relate to better ways of doing things to help you avoid problems
     */
    // enforce setter pairs in objects, but maybe getter
    'accessor-pairs': 'error',
    // enforce return statements in callbacks of array methods
    'array-callback-return': 'error',
    // enforce the use of variables within the scope they are defined
    'block-scoped-var': 'error',
    // enforce that class methods utilize this
    'class-methods-use-this': 'error',
    // enforce a maximum cyclomatic complexity allowed in a program
    'complexity': [
      'error',
      {
        max: 20
      }
    ],
    // @ff Too strict
    'consistent-return': 'off',
    // @autofix enforce consistent brace style for all control statements
    'curly': [
      'error',
      'multi-line',
      'consistent'
    ],
    // @ff Too strict
    'default-case': 'off',
    // @autofix enforce consistent newlines before and after dots
    'dot-location': [
      'error',
      'property'
    ],
    // enforce dot notation whenever possible
    'dot-notation': 'error',
    // require the use of === and !==
    'eqeqeq': [
      'error',
      'always',
      {
        null: 'ignore'
      }
    ],
    // require for-in loops to include an if statement(至少需包含hasOwnProperty)
    'guard-for-in': 'error',
    // @off
    'no-alert': 'off',
    // disallow the use of arguments.caller or arguments.callee
    'no-caller': 'error',
    // disallow lexical declarations in case clauses
    'no-case-declarations': 'error',
    // @off no negative impact
    'no-div-regex': 'off',
    // @off
    'no-else-return': 'off',
    // disallow empty functions, until
    'no-empty-function': [
      'error',
      {
        allow: [
          'functions',
          'arrowFunctions'
        ]
      }
    ],
    // disallow empty destructuring patterns
    'no-empty-pattern': 'error',
    // @off
    'no-eq-null': 'off',
    // disallow the use of eval()
    'no-eval': 'error',
    // disallow extending native types
    'no-extend-native': 'error',
    // @autofix disallow unnecessary calls to .bind()
    'no-extra-bind': 'error',
    // @autofix	disallow unnecessary labels
    'no-extra-label': 'error',
    // disallow fallthrough of case statements
    'no-fallthrough': 'error',
    // @autofix disallow leading or trailing decimal points in numeric literals
    'no-floating-decimal': 'error',
    // disallow assignments to native objects or read-only global variables
    'no-global-assign': 'error',
    // disallow shorthand type conversions
    'no-implicit-coercion': [
      'error',
      {
        allow: [
          '!!'
        ]
      }
    ],
    // disallow variable and function declarations in the global scope
    'no-implicit-globals': 'error',
    // disallow the use of eval()-like methods(setTimeout 或 setInterval 中传入字符串)
    'no-implied-eval': 'error',
    // @off 什么鬼
    'no-invalid-this': 'off',
    // disallow the use of the __iterator__ property
    'no-iterator': 'error',
    // disallow labeled statements
    'no-labels': 'error',
    // disallow unnecessary nested blocks
    'no-lone-blocks': 'error',
    // disallow function declarations and expressions inside loop statements
    'no-loop-func': 'error',
    // @off
    'no-magic-numbers': 'off',
    // @autofix disallow multiple spaces
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
        exceptions: {
          Property: true,
          BinaryExpression: false,
          VariableDeclarator: true,
          ImportDeclaration: true
        }
      }
    ],
    // disallow multiline strings
    'no-multi-str': 'error',
    // disallow new operators outside of assignments or comparisons
    'no-new': 'error',
    // disallow new operators with the Function object
    'no-new-func': 'error',
    // disallow new operators with the String, Number, and Boolean objects
    'no-new-wrappers': 'error',
    // @autofix disallow octal literals
    'no-octal': 'error',
    // disallow octal escape sequences in string literals
    'no-octal-escape': 'error',
    // disallow reassigning function parameters
    'no-param-reassign': 'error',
    // disallow the use of the __proto__ property
    'no-proto': 'error',
    // @autofix disallow variable redeclaration
    'no-redeclare': 'error',
    // disallow certain properties on certain objects (用于限制某个具体api不能只用，请业务层自定义)
    'no-restricted-properties': 'off',
    // disallow assignment operators in return statements
    'no-return-assign': [
      'error',
      'always'
    ],
    // disallow unnecessary return await
    'no-return-await': 'error',
    // disallow javascript: urls
    'no-script-url': 'error',
    // @autofix disallow assignments where both sides are exactly the same
    'no-self-assign': 'error',
    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',
    // disallow comma operators
    'no-sequences': 'error',
    // disallow throwing literals as exceptions
    'no-throw-literal': 'error',
    // disallow unmodified loop conditions
    'no-unmodified-loop-condition': 'error',
    // Disallow Unused Expressions
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    // @autofix disallow unused labels
    'no-unused-labels': 'error',
    // disallow unnecessary calls to .call() and .apply()
    'no-useless-call': 'error',
    // disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': 'error',
    // disallow unnecessary escape characters
    'no-useless-escape': 'error',
    // @autofix disallow redundant return statements
    'no-useless-return': 'error',
    // disallow void operators
    'no-void': 'error',
    // warning specified warning terms in comments
    'no-warning-comments': 'warn',
    // disallow with statements
    'no-with': 'error',
    // require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': 'error',
    // enforce the consistent use of the radix argument when using parseInt()
    'radix': 'error',
    // @off 管的有点宽
    'require-await': 'off',
    // @off 什么鬼
    'vars-on-top': 'off',
    // require parentheses around immediate function invocations
    'wrap-iife': [
      'error',
      'inside',
      {
        functionPrototypeMethods: true
      }
    ],
    // require or disallow “Yoda” conditions
    'yoda': [
      'error',
      'never',
      {
        onlyEquality: true
      }
    ],

    /**
     * Strict Mode
     * These rules relate to strict mode directives
     */
    // @fixable disallow strict mode directives ("use strict")
    'strict': [
      'error',
      'never'
    ],

    /**
     * Variables
     * These rules relate to variable declarations
     */
    // require or disallow initialization in variable declarations. Too strict
    'init-declarations': 'off',
    // Disallow Shadowing of Variables Inside of catch. IE9+后无影响
    'no-catch-shadow': 'off',
    // disallow deleting variables
    'no-delete-var': 'error',
    // Disallow Labels That Are Variables Names
    'no-label-var': 'error',
    // Disallow specific global variables
    'no-restricted-globals': 'off',
    // disallow variable declarations from shadowing variables declared in the outer scope
    'no-shadow': 'off',
    // Disallow Shadowing of Restricted Names
    'no-shadow-restricted-names': 'error',
    // Disallow Undeclared Variables
    'no-undef': [
      'error',
      {
        typeof: false
      }
    ],
    // @fixable Disallow Initializing to undefined
    'no-undef-init': 'error',
    // Disallow Use of undefined Variable
    'no-undefined': 'error',
    // Disallow Unused Variables
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true
      }
    ],
    // Disallow Early Use
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: false
      }
    ],    
    
    /**
     * Node.js and CommonJS
     * These rules relate to code running in Node.js, or in browsers with CommonJS
     */
    // Enforce Return After Callback
    'callback-return': 'off',
    // Enforce require() on the top-level module scope , Too Strict
    'global-require': 'off',
    // Enforce Callback Error Handling
    'handle-callback-err': 'error',
    // Disallow use of the Buffer() constructor
    'no-buffer-constructor': 'error',
    // Disallow 'require' calls to be mixed with regular variable declarations
    'no-mixed-requires': 'off',
    // Disallow new require
    'no-new-require': 'error',
    // Disallow string concatenation when using __dirname and __filename
    'no-path-concat': 'error',
    // Disallow process.env
    'no-process-env': 'off',
    // Disallow process.exit()
    'no-process-exit': 'off',
    // Disallow Node.js modules
    'no-restricted-modules': 'off',
    // Disallow Synchronous Methods
    'no-sync': 'off',

    /**
     * Stylistic Issues
     * These rules relate to style guidelines, and are therefore quite subjective
     */


    /**
     * ECMAScript 6
     * These rules relate to ES6, also known as ES2015
     */
    //
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true
      }
    ]
  }
}
