export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f29cbc91522720258d6ba62',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-htxvwman',
                  apiId: 'b659c43e-3cb5-4d54-a339-6c2f74d079fb'
                },
                {
                  buildHookId: '5f29cbc9c8527101e65d2697',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-r46rt8w5',
                  apiId: 'b18f83df-1e7d-4a52-9282-e149a8393708'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kmylo/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-r46rt8w5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
