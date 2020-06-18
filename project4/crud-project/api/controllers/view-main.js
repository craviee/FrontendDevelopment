module.exports = {


  friendlyName: 'View main',


  description: 'Display "Main" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/main'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
