/**
 * @license Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
"use strict";

module.exports = {
  ci: {
    collect: {
      additive: true,
      isSinglePageApplication: true,
      numberOfRuns: 3,
      settings: {},
      // urls and/or staticDistDir to be provided in the individual environment configs
    },
    upload: {
      target: "temporary-public-storage",
      // githubAppToken: "",
    },
    assert: {
      preset: "lighthouse:no-pwa",
      includePassedAssertions: true,
      assertions: {
        // calculated budget values here: https://perf-budget-calculator.firebaseapp.com/
        // subject to change, set to warn right now but will be set to error once settled
        "resource-summary:document:size": [
          "warn",
          { maxNumericValue: 10000, aggregationMethod: "median" },
        ],
        "resource-summary:stylesheet:size": [
          "warn",
          { maxNumericValue: 10000, aggregationMethod: "median" },
        ],
        "resource-summary:font:size": [
          "warn",
          { maxNumericValue: 30000, aggregationMethod: "median" },
        ],
        "resource-summary:image:size": [
          "warn",
          { maxNumericValue: 300000, aggregationMethod: "median" },
        ],
        "resource-summary:script:size": [
          "warn",
          { maxNumericValue: 100000, aggregationMethod: "median" },
        ],
        "first-contentful-paint": [
          "error",
          { maxNumericValue: 2000, aggregationMethod: "median" },
        ],
        interactive: [
          "error",
          { maxNumericValue: 2500, aggregationMethod: "median" },
        ],

        // category minimum scores
        "categories:performance": [
          "error",
          { minScore: 0.98, aggregationMethod: "median" },
        ],
        "categories:accessibility": [
          "error",
          { minScore: 0.98, aggregationMethod: "median" },
        ],
        "categories:best-practices": [
          "error",
          { minScore: 0.98, aggregationMethod: "median" },
        ],
        "categories:seo": [
          "error",
          { minScore: 0.85, aggregationMethod: "median" },
        ],
      },
    },
  },
};
