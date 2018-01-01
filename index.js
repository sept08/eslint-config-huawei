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
    // 禁止 for 循环出现方向错误的循环
    'for-direction': 'error',
    // getter 必须有返回值，并且禁止返回空
    'getter-return': 'error',
    // @off Too strict
    'no-await-in-loop': 'off',
    // disallow comparing against -0
    'no-compare-neg-zero': 'error',
    // 禁止在 if, for, while 里使用赋值语句，除非这个赋值语句被括号包起来了
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
      'error',
      'functions'
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
    // @off Too strict
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
    // @autofix disallow unnecessary labels
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
    // 配置数组的中括号内前后的换行格式
    'array-bracket-newline': 'off',
    // 数组的括号前后禁止有空格
    'array-bracket-spacing': 'error',
    // 数组里面的元素强制换行有点严格
    'array-element-newline': 'off',
    // 代码块如果在一行，则大括号内的首尾必须有空格
    'block-spacing': 'error',
    // 大括号的用法要求
    'brace-style': 'error',
    // 变量命名需要以驼峰命名法，对属性字段不做限制
    'camelcase': 'error',
    // 注释的首字母必须大写，对此不做限制
    'capitalized-comments': 'off',
    // 默认不允许尾随逗号
    'comma-dangle': 'error',
    // 逗号后面强制要求加空格
    'comma-spacing': 'error',
    // 逗号必须写在最后面
    'comma-style': 'error',
    // 用作对象的计算属性时，中括号内的首尾禁止有空格
    'computed-property-spacing': 'error',
    // 没必要限制 this 的别名
    'consistent-this': 'off',
    // 文件最后一行必须有一个空行
    'eol-last': 'off',
    // 函数名和执行它的括号之间禁止有空格
    'func-call-spacing': 'error',
    // 函数赋值给变量的时候，函数名必须与变量名一致
    'func-name-matching': 'error',
    // 没必要限制函数必须有名字
    'func-names': 'off',
    // 没必要限制必须只使用函数申明或只使用函数表达式
    'func-style': 'off',
    // 禁止使用指定的标识符，用户侧自行定义
    'id-blacklist': 'off',
    // 没必要限制变量名长度
    'id-length': 'off',
    // 没必要限制变量名必须匹配指定的正则表达式
    'id-match': 'off',
    // 函数参数换行策略
    'function-paren-newline': 'error',
    // 箭头函数体的位置
    'implicit-arrow-linebreak': 'error',
    // 一个缩进必须用两个空格替代, switch语句里面的case 2个空格
    'indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true
      }
    ],
    // jsx 中的属性必须用双引号
    'jsx-quotes': [
      'error',
      'prefer-double'
    ],
    // 对象字面量中冒号前面禁止有空格，后面必须有空格
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict'
      }
    ],
    // 关键字前后必须有空格
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    // 没必要限制单行注释必须写在上一行
    'line-comment-position': 'off',
    // 没必要限制换行符为 LF 或 CRLF
    'linebreak-style': 'off',
    // 没必要限制注释前后必须有空行
    'lines-around-comment': 'off',
    // 两个class成员之间需要空行
    'lines-between-class-members': 'error',
    // 代码块嵌套的深度禁止超过 5 层
    'max-depth': [
      'error',
      5
    ],
    // 单行最多允许80个字符, 对包含url的行不进行此限制
    'max-len': [
      'error',
      {
        ignoreComments: true
      }
    ],
    // 没必要限制一个文件最多的行数
    'max-lines': 'off',
    // 回调函数嵌套禁止超过 3 层，多了请用 async await 替代
    'max-nested-callbacks': [
      'error',
      3
    ],
    // 函数的参数禁止超过 7 个
    'max-params': [
      'error',
      7
    ],
    // 没必要限制函数块中的语句数量
    'max-statements': 'off',
    // 没必要限制一行中的语句数量
    'max-statements-per-line': 'off',
    // 多行注释写法
    'multiline-comment-style': 'error',
    // 三元表达式必须得换行
    'multiline-ternary': 'off',
    // new 后面的类名必须首字母大写
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
        properties: true
      }
    ],
    // new 后面的类必须有小括号
    'new-parens': 'error',
    // 没必要限制链式调用必须换行
    'newline-per-chained-call': 'off',
    // 禁止使用 Array 构造函数
    'no-array-constructor': 'error',
    // 没必要禁止使用位运算
    'no-bitwise': 'off',
    // 没必要禁止使用 continue
    'no-continue': 'off',
    // 没必要禁止在代码后添加内联注释
    'no-inline-comments': 'off',
    // 没必要禁止 else 中只有一个单独的 if
    'no-lonely-if': 'off',
    // 没必要禁止混用不同的操作符，比如 let foo = a && b < 0 || c > 0 || d + 1 === 0
    'no-mixed-operators': 'off',
    // 禁止混用空格和缩进
    'no-mixed-spaces-and-tabs': 'error',
    // 没必要限制禁止连续赋值，比如 a = b = c = 5
    'no-multi-assign': 'off',
    // 禁止出现超过三行的连续空行
    'no-multiple-empty-lines': [
      'error',
      {
        max: 3,
        maxEOF: 1,
        maxBOF: 1
      }
    ],
    // 否定的表达式可以把逻辑表达的更清楚，不限制if里面不允许出现否定表达式
    'no-negated-condition': 'off',
    // 没必要限制禁止使用嵌套的三元表达式，比如 a ? b : c ? d : e
    'no-nested-ternary': 'off',
    // 禁止直接 new Object
    'no-new-object': 'error',
    // 没必要限制禁止使用 ++ 或 --
    'no-plusplus': 'off',
    // 禁止使用特定的语法，用户侧自行定义
    'no-restricted-syntax': 'off',
    // 禁止使用 tabs
    'no-tabs': 'error',
    // 不禁止使用三元表达式
    'no-ternary': 'off',
    // 禁止行尾有空格
    'no-trailing-spaces': 'error',
    // 不禁止变量名出现下划线，下划线在变量名中很常用
    'no-underscore-dangle': 'off',
    // 必须使用 !a 替代 a ? false : true
    'no-unneeded-ternary': 'error',
    // 禁止属性前有空格，比如 foo. bar()
    'no-whitespace-before-property': 'error',
    // 禁止 if 后面不加大括号而写两行代码
    'nonblock-statement-body-position': 'error',
    // 大括号内的首尾必须有换行
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true
      }
    ],
    // 对象字面量只有一行时，大括号内的首尾必须有空格
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: false
      }
    ],
    // 没必要限制对象字面量内的属性每行必须只有一个
    'object-property-newline': 'off',
    // 禁止变量申明时用逗号一次申明多个
    'one-var': [
      'error',
      'never'
    ],
    // 变量申明必须每行一个
    'one-var-declaration-per-line': [
      'error',
      'always'
    ],
    // 没必要限制必须使用 x = x + y 而不是 x += y
    'operator-assignment': 'off',
    // 不需要换行的时候，操作符必须放在行末，
    'operator-linebreak': 'off',
    // 没必要限制代码块首尾必须要空行
    'padded-blocks': 'off',
    // 没必要限制语句之间的空行规则，比如变量定义完之后必须要空行
    'padding-line-between-statements': 'off',
    // 没必要限制对象字面量的键名禁止用引号括起来
    'quote-props': 'off',
    // 必须使用单引号，禁止使用双引号
    'quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    // 结尾必须有分号
    'semi': [
      'error',
      'never'
    ],
    // 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    // 分号必须写在行尾，禁止在行首出现
    'semi-style': [
      'error',
      'last'
    ],
    // 没必要限制对象字面量的键名必须排好序
    'sort-keys': 'off',
    // 没必要限制变量申明必须排好序
    'sort-vars': 'off',
    // if, function 等的大括号之前必须要有空格，比如 if (a) {
    'space-before-blocks': [
      'error',
      'always'
    ],
    // function 的小括号之前必须要有空格
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'ignore',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    // 小括号内的首尾禁止有空格
    'space-in-parens': [
      'error',
      'never'
    ],
    // 必须使用 jsdoc 风格的注释
    'require-jsdoc': [
      'warn',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: false
        }
      }
    ],
    // 操作符左右必须有空格
    'space-infix-ops': 'error',
    // new, typeof 等后面必须有空格，++, -- 等禁止有空格
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false
      }
    ],
    // 注释的斜线或 * 后必须有空格
    'spaced-comment': [
      'error',
      'always',
      {
        'line': { 'markers': ['*package', '!', '/', ',', '='] },
        'block': {
          'balanced': true,
          'markers': ['*package', '!', ',', ':', '::', 'flow-include'],
          'exceptions': ['*']
        }
      }
    ],
    // case 的冒号前禁止有空格，冒号后必须有空格
    'switch-colon-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],
    // 模版字符串的 tag 之后禁止有空格，比如 tag`Hello World`
    'template-tag-spacing': [
      'error',
      'never'
    ],
    // 文件开头禁止有 BOM
    'unicode-bom': [
      'error',
      'never'
    ],
    // 没必要限制正则表达式必须有括号包起来
    'wrap-regex': 'off',

    /**
     * ECMAScript 6
     * These rules relate to ES6, also known as ES2015
     */
    // 箭头函数返回值可以只是一个值，没必须一定用大括号写成多条语句.
    'arrow-body-style': 'off',
    // 箭头函数的参数必须用括号包裹起来，限制去掉。当只有一个参数时，没必要使用括号
    'arrow-parens': 'off',
    // 箭头函数的箭头前后必须有空格
    'arrow-spacing': 'error',
    // constructor 中必须有 super
    'constructor-super': 'error',
    // generator 的 * 前面禁止有空格，后面必须有空格
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    // 禁止对定义过的 class 重新赋值
    'no-class-assign': 'error',
    // 禁止出现难以理解的箭头函数
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true
      }
    ],
    // 禁止对使用 const 定义的常量重新赋值
    'no-const-assign': 'error',
    // 禁止重复定义类
    'no-dupe-class-members': 'error',
    // 禁止import重复模块
    'no-duplicate-imports': 'error',
    // 禁止使用 new 来生成 Symbol
    'no-new-symbol': 'error',
    // 禁止 import 指定的模块，继承规则后自行定义
    'no-restricted-imports': 'off',
    // 禁止在 super 被调用之前使用 this 或 super
    'no-this-before-super': 'error',
    // 禁止出现没必要的计算键名
    'no-useless-computed-key': 'error',
    // 禁止出现没必要的 constructor
    'no-useless-constructor': 'error',
    // 禁止解构时出现同样名字的的重命名
    'no-useless-rename': 'error',
    // 禁止出现 var
    'no-var': 'error',
    // 对象简写形式，太过严格
    'object-shorthand': 'off',
    // 必须使用箭头函数作为回调，太过严格
    'prefer-arrow-callback': 'off',
    // 申明后不再被修改的变量必须使用 const 来申明
    'prefer-const': 'error',
    // 必须使用解构，太过严格
    'prefer-destructuring': 'off',
    // 不严格要求使用预设数字字面量
    'prefer-numeric-literals': 'off',
    // 不严格要求必须使用 ...args 而不是 arguments
    'prefer-rest-params': 'off',
    // 不严格要求必须使用 ... 而不是 apply，比如 foo(...args)
    'prefer-spread': 'off',
    // 不强制使用模板字符串，字符串拼接也是可取的
    'prefer-template': 'off',
    // generator 函数内必须有 yield
    'require-yield': 'error',
    // ... 的后面禁止有空格
    'rest-spread-spacing': 'error',
    // import 排序不用限制
    'sort-imports': 'off',
    // 创建 Symbol 时必须传入参数
    'symbol-description': 'error',
    // 模板字符串内的首尾禁止有空格，比如${test}不要写成${ test }
    'template-curly-spacing': 'error',
    // yield* 后面必须加空格
    'yield-star-spacing': 'error'
  }
}
