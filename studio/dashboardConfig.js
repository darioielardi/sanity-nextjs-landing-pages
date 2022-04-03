export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '624974c89559c3541eeedc04',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3pgqy1bu',
                  apiId: '45c7105e-f27c-44bc-a6f1-3fc79adcc509'
                },
                {
                  buildHookId: '624974c9eba34b6e2a6252c4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9pnumth2',
                  apiId: '73f53826-80c7-4603-b70c-25c0dfd95a7d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/darioielardi/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9pnumth2.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
