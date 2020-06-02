/**
 * @license Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
"use strict";

const commonConfig = require("./lighthouse.common");

module.exports = {
  ...commonConfig,
  ci: {
    collect: {
      url: [
        `${steps.waitFor200.outputs.url}/`,
        `${steps.waitFor200.outputs.url}/about/`,
        `${steps.waitFor200.outputs.url}/browse/`,
        `${steps.waitFor200.outputs.url}/categories/`,
        `${steps.waitFor200.outputs.url}/tags/introduction/`,
        `${steps.waitFor200.outputs.url}/posts/001/`,
        `${steps.waitFor200.outputs.url}/posts/002/`,

        // "http://angry-kirby-8b4540.netlify.app/",
        // "http://angry-kirby-8b4540.netlify.app/about/",
        // "http://angry-kirby-8b4540.netlify.app/browse/",
        // "http://angry-kirby-8b4540.netlify.app/categories/",
        // // "http://angry-kirby-8b4540.netlify.app/categories/personal",
        // // "http://angry-kirby-8b4540.netlify.app/tags/",
        // // "http://angry-kirby-8b4540.netlify.app/tags/adhd",
        // // "http://angry-kirby-8b4540.netlify.app/tags/anxiety",
        // // "http://angry-kirby-8b4540.netlify.app/tags/career",
        // // "http://angry-kirby-8b4540.netlify.app/tags/depression",
        // "http://angry-kirby-8b4540.netlify.app/tags/introduction/",
        // // "http://angry-kirby-8b4540.netlify.app/tags/mental-health",
        // // "http://angry-kirby-8b4540.netlify.app/tags/nerodiversity",
        // // "http://angry-kirby-8b4540.netlify.app/tags/software-development"
        // // "http://angry-kirby-8b4540.netlify.app/posts/",
        // "http://angry-kirby-8b4540.netlify.app/posts/001/",
        // "http://angry-kirby-8b4540.netlify.app/posts/002/",
      ],
    },
  },
};
