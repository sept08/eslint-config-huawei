module.exports = {
  extends: [
    './index.js'
  ],
  parser: 'vue-eslint-parser',
  plugins: [
    'vue'
  ],
  rules: {

    /** ********* Enforce ***********/

    // computed属性异步可能导致不确定行为
    'vue/no-async-in-computed-properties': 'error',
    // props/data/computed/methods不要同名, 易造成混淆
    'vue/no-dupe-keys': 'error',
    // 重复属性只有最后一个是有效的
    'vue/no-duplicate-attributes': 'error',
    // 禁止出现语法错误
    'vue/no-parsing-error': 'error',
    // 禁止用vue关键字做名称
    'vue/no-reserved-keys': 'error',
    // 计算属性中禁止改变其他属性
    'vue/no-side-effects-in-computed-properties': 'error',
    // 禁止在 <textarea> 中出现 {{message}}
    'vue/no-textarea-mustache': 'error',
    // 禁止出现未使用的变量
    'vue/no-unused-vars': 'error',
    // Dynamic Components必须加上:is/v-bind:is
    'vue/require-component-is': 'error',
    // render 函数必须有返回值
    'vue/require-render-return': 'error',
    // 必须合法指令
    'vue/valid-template-root': 'error',
    'vue/valid-v-bind': 'error',
    'vue/valid-v-cloak': 'error',
    'vue/valid-v-else-if': 'error',
    'vue/valid-v-else': 'error',
    'vue/valid-v-for': 'error',
    'vue/valid-v-html': 'error',
    'vue/valid-v-if': 'error',
    'vue/valid-v-model': 'error',
    'vue/valid-v-on': 'error',
    'vue/valid-v-once': 'error',
    'vue/valid-v-pre': 'error',
    'vue/valid-v-show': 'error',
    'vue/valid-v-text': 'error',
    // @fixable {{}}中空格限制always限制为1个
    'vue/mustache-interpolation-spacing': 'error',
    // @fixable 禁止出现连续空格
    'vue/no-multi-spaces': 'error',


    /** ********* Strongly Recommended ***********/

    // v-for加上key高效更新DOM
    'vue/require-v-for-key': 'error',
    // props添加类型便于识别
    'vue/require-prop-types': 'error',
    // @fixable v-bind简写
    'vue/v-bind-style': 'error',
    // @fixable v-on简写
    'vue/v-on-style': 'error',
    // @fixable html属性值单引号
    'vue/html-quotes': [
      'error',
      'single'
    ],
    // 禁止出现难以理解的 v-if 和 v-for
    'vue/no-confusing-v-for-v-if': 'error',
    // 组件DOM中不加this
    'vue/this-in-template': 'error',
    // 组件中官方推荐的option顺序
    'vue/order-in-components': ['error', {
      order: [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'], // 中括号中同等顺序等级
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ]
    }
    ],


    /** ********* Ignore ***********/

    // 不限制组件data一定要有return
    'vue/no-shared-component-data': 'off',
    // <template>元素不要求不能加key
    'vue/no-template-key': 'off',
    // 不严格要求prop默认值格式
    'vue/require-valid-default-prop': 'off',
    // @off 没必要限制属性名称格式
    'vue/attribute-hyphenation': 'off',
    // @off 有的标签不必严格符合规定，如 <br> 或 <br/> 都应该是合法的
    'vue/html-end-tags': 'off',
    // @off 没必要限制
    'vue/html-indent': 'off',
    'vue/html-self-closing': 'off',
    // 不限制每行属性
    'vue/max-attributes-per-line': 'off',
    // 不限制组件名称样式
    'vue/name-property-casing': 'off',
    // props不限制是否有默认值
    'vue/require-default-prop': 'off'

  }
}
