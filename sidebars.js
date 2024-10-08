/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

//module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //Developer: [{type: 'autogenerated', dirName: '.'}],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
//};


module.exports = {
  about: [
    // 'intro', 
    'support',
    {
      type: 'category',
      label: 'Vacancies',
      collapsed: true,
      items: [
          'vacancies/developer',
          'vacancies/machinelearning',
          ],
    }, 
    // 'changelog',
  ], 
  buyer: [
    'buyer/introbuyer',
    {
      type: 'category',
      label: 'Step-by-step process',
      collapsed: false,
      items: [
          'buyer/register',
          'buyer/orderproducts',
          'buyer/paymentplan',
          'buyer/payinstalments',
          ],
        },
      'buyer/topup',
      'buyer/badgesbuyer',
      'buyer/creditlimit',
      'buyer/refresh',
      'buyer/version',
      'buyer/groups',
      'buyer/plans',
      'buyer/notifications',
      'buyer/faq',
      'buyer/cashback',
          ],
  seller: [
      'seller/start',
      'seller/paid',
      {
      type: 'category',
      label: 'Step-by-step agent process',
      collapsed: false,
      items: [
          'seller/register',
          'seller/orderproducts',
          'seller/paymentplan',
          'seller/delivery',
          'seller/payinstalments',
          ],
      },
      'seller/apply',
      'seller/segements/ecommerce',
      'seller/topup',
      'seller/badges',
      'seller/withdraw',
      'seller/addagent',
      'seller/registeragent',
      'seller/creditlimit',
      'seller/customersection',
      'seller/refresh',
      'seller/version',
      'seller/training',
      'seller/faq',
    ],
  developer: [
    'developer/intro',
    'developer/steps',
    'developer/authentication',
    {
      type: 'category',
      label: 'API',
      collapsed: false,
      items: [
          {
            type: 'category',
            label: 'Queries',
            collapsed: true,
            items: [
                'developer/API/queries/customerStatus',
                'developer/API/queries/paymentProposal',
                'developer/API/queries/transaction',
                ],
          },
          {
            type: 'category',
            label: 'Mutations',
            collapsed: true,
            items: [
              'developer/API/mutations/orderCreate', 
              'developer/API/mutations/orderDeliver', 
                ],
          },
       
          ],
    },
    {
      type: 'category',
      label: 'Webhooks',
      collapsed: true,
      items: [
          'developer/webhook/intro',
          'developer/webhook/orderPayment',
          'developer/webhook/transactions',
          'developer/webhook/whitelist',
          ],
    },
    'developer/testing',
    'developer/paymentLink',
    'developer/returnURL',
    'developer/WooCommerce',
    'developer/mobile'
  ],
};