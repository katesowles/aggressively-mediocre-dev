// /**
//  * @license Copyright 2019 Google Inc. All Rights Reserved.
//  * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
//  * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
//  */
"use strict";

module.exports = {
  ci: {
    collect: {
      url: "https://angry-kirby-8b4540.netlify.app",
      // staticDistDir: "./public",
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        "dom-size": ["error", { maxNumericValue: 3000 }],

        "uses-rel-preload": "off",
        "uses-responsive-images": "off",
        "uses-rel-preconnect": "off",
        "offscreen-images": "off",
        "unused-javascript": "off",

        label: "off",
        "content-width": "off",
        "color-contrast": "on",
        bypass: "off",
        "tap-targets": "off",

        "apple-touch-icon": "off",
        "maskable-icon": "off",
        "installable-manifest": "off",
        "offline-start-url": "off",
        "service-worker": "off",
        "splash-screen": "off",
        "themed-omnibox": "off",
        "works-offline": "off",
      },
    },
  },
};
