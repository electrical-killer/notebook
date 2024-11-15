/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

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

  project_web: [{ type: 'autogenerated', dirName: 'project_web' }],
  project_iot: [{ type: 'autogenerated', dirName: 'project_iot' }],
  basic_code: [{ type: 'autogenerated', dirName: 'basic_code' }],
  basic_data: [{ type: 'autogenerated', dirName: 'basic_data' }],
  basic_algorithm: [{ type: 'autogenerated', dirName: 'basic_algorithm' }],
  basic_design_mode: [{ type: 'autogenerated', dirName: 'basic_design_mode' }],
  basic_computer: [{ type: 'autogenerated', dirName: 'basic_computer' }],
  subject_embedded: [{ type: 'autogenerated', dirName: 'subject_embedded' }],
  subject_linux: [{ type: 'autogenerated', dirName: 'subject_linux' }],
  subject_tcpip: [{ type: 'autogenerated', dirName: 'subject_tcpip' }],
  subject_web: [{ type: 'autogenerated', dirName: 'subject_web' }],
  subject_tools: [{ type: 'autogenerated', dirName: 'subject_tools' }],
};
