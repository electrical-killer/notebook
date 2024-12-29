import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */

    "project.docx": [
        "project.docx/project.docx",
        {
            label: "50projects50days",
            type: "category",
            link: { type: "generated-index" },
            items: [
                {
                    type: "autogenerated",
                    dirName: "project.docx/50projects50days",
                },
            ],
        },
        {
            label: "Docusaurus",
            type: "category",
            link: { type: "generated-index" },
            items: [
                /* 文件路径 + id == slug  路由上显示内容  */
                "project.docx/Docusaurus/Docusaurus",
                "project.docx/Docusaurus/1731504771",
                "project.docx/Docusaurus/1731504795",
                {
                    label: "部署",
                    type: "category",
                    link: { type: "generated-index" },
                    items: [
                        {
                            type: "autogenerated",
                            dirName: "project.docx/Docusaurus/deploy",
                        },
                    ],
                },
                {
                    label: "魔改",
                    type: "category",
                    link: { type: "generated-index" },
                    items: [
                        {
                            type: "autogenerated",
                            dirName: "project.docx/Docusaurus/custom",
                        },
                    ],
                },
            ],
        },
    ],

    basic_code: [
        "basic_code/basic_code",
        {
            label: "Bat",
            type: "category",
            link: { type: "generated-index" },
            items: [
                {
                    type: "autogenerated",
                    dirName: "basic_code/Bat",
                },
            ],
        },
        {
            label: "Python",
            type: "category",
            link: { type: "generated-index" },
            items: [
                {
                    type: "autogenerated",
                    dirName: "basic_code/Python",
                },
            ],
        },
        {
            label: "Css",
            type: "category",
            link: { type: "generated-index" },
            items: [
                {
                    type: "autogenerated",
                    dirName: "basic_code/Css",
                },
            ],
        },
        {
            label: "Html",
            type: "category",
            link: { type: "generated-index" },
            items: [
                {
                    type: "autogenerated",
                    dirName: "basic_code/Html",
                },
            ],
        },
        {
            label: "JavaScript",
            type: "category",
            link: { type: "generated-index" },
            items: [
                'basic_code/JavaScript/1734769219'
                // {
                //     type: "autogenerated",
                //     dirName: "basic_code/JavaScript",
                // },
            ],
        },
        {
            label: "Kconfig",
            type: "category",
            link: { type: "generated-index" },
            items: [
                {
                    type: "autogenerated",
                    dirName: "basic_code/Kconfig",
                },
            ],
        },
    ],

    subject_web: [
        "subject_web/subject_web",
        {
            label: "React",
            type: "category",
            link: { type: "generated-index" },
            items: [
                'subject_web/React/1734753716',
                'subject_web/React/1731505416',
                // {
                //     label: "基础学习",
                //     type: "category",
                //     link: { type: "generated-index" },
                //     items: [
                //         {
                //             type: "autogenerated",
                //             dirName: "subject_web/React/theory",
                //         },
                //     ],
                // },
            ],
        },
    ],

    basic_data: [{ type: "autogenerated", dirName: "basic_data" }],
    basic_algorithm: [{ type: "autogenerated", dirName: "basic_algorithm" }],
    basic_design_mode: [{ type: "autogenerated", dirName: "basic_design_mode" }],
    basic_computer: [{ type: "autogenerated", dirName: "basic_computer" }],
    subject_embedded: [{ type: "autogenerated", dirName: "subject_embedded" }],
    subject_linux: [{ type: "autogenerated", dirName: "subject_linux" }],
    subject_tcpip: [{ type: "autogenerated", dirName: "subject_tcpip" }],
    subject_tools: [{ type: "autogenerated", dirName: "subject_tools" }],
};

export default sidebars;
