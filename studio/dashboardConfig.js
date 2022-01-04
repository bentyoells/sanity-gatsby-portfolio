export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '61d4775770354940eb10d314',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-qzcigzbo',
                  apiId: '7230ce14-9a93-4a02-aca0-03e7c11a3bae'
                },
                {
                  buildHookId: '61d477570327744a86ae848f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-r6zqttyb',
                  apiId: '17266f2f-1c61-415d-8599-c2285c2ba8a5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bentyoells/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-r6zqttyb.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
