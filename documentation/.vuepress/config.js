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
    theme: 'default-prefers-color-scheme',
    themeConfig: {
        defaultTheme: 'dark',
        sidebar: [
            ['/js-questions/', 'JS questions'],
            ['/js-advanced-questions/', 'Advanced JS questions'],
            ['/js-practice-tasks/', 'Practical JS tasks'],
            ['/css-questions/', 'CSS questions'],
            ['/vue-questions/', 'Vue questions'],
            ['/vue-router-questions/', 'Vue Router questions'],
            ['/vuex-questions/', 'Vuex questions'],
            ['/vue-advanced-questions/', 'Advances Vue questions'],
            ['/type-script-questions/', 'TypeScript questions'],
            ['/rxjs-questions/', 'RXJS questions'],
            ['/angular-questions/', 'Angular questions'],
            ['/angular-router-questions/', 'Angular router questions'],
            ['/ng-rx-questions/', 'NgRx questions'],
            ['/angular-tips-approaches/', 'Angular approaches of developing']
        ],
    },
    base: '/frontend-vue-angular-interview/',
    head: [
        ['link', { rel: 'icon', href: 'https://i.imgur.com/oUGrUo9.jpg' }]
    ],
    postcss: {
        plugins: [
            require('css-prefers-color-scheme/postcss'),
            require('autoprefixer')
        ]
    }
}
