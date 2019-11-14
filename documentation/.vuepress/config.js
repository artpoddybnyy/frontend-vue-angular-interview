module.exports = {
    title: 'Frontend Vue/Angular questions',
    plugins: [
        [
            'vuepress-plugin-container',
            {
                type: 'answer',
                defaultTitle: 'Answer',
                before: `<div class="answer"></div>`
              }
        ],
    ],
    themeConfig: {
        sidebar: [
            ['/js-questions/', 'JS questions'],
            ['/type-script-questions/', 'TypeScript questions'],
            ['/js-advanced-questions/', 'Advances JS questions'],
            ['/js-practice-tasks/', 'Practical JS tasks'],
            ['/vue-questions/', 'Vue questions'],
            ['/vue-router-questions/', 'Vue Router questions'],
            ['/vuex-questions/', 'Vuex questions'],
            ['/vue-advanced-questions/', 'Advances Vue questions'],
            ['/angular-questions/', 'Angular questions'],
            ['/angular-router-questions/', 'Angular router questions']
        ],

    },
    base: '/frontend-vue-interview/',
    head: [
        ['link', { rel: 'icon', href: '/vue_vs_angular.png' }]
    ]
}
