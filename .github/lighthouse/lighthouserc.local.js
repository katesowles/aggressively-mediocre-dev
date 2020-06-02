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
      staticDistDir: "./public",
      url: [
        "http://localhost/",
        "http://localhost/about/",
        "http://localhost/browse/",
        "http://localhost/categories/",
        // "http://localhost/categories/personal",
        // "http://localhost/tags/",
        // "http://localhost/tags/adhd",
        // "http://localhost/tags/anxiety",
        // "http://localhost/tags/career",
        // "http://localhost/tags/depression",
        "http://localhost/tags/introduction",
        // "http://localhost/tags/mental-health",
        // "http://localhost/tags/nerodiversity",
        // "http://localhost/tags/software-development"
        // "http://localhost/posts",
        "http://localhost/posts/001",
        "http://localhost/posts/002",
      ],
    },
    assert: {
      preset: "lighthouse:no-pwa",
      budgetsFile: "/budgets.json",
      includePassedAssertions: true,
      assertions: {
        "performance-budget": "error",
        "categories:performance": [
          "error",
          { minScore: 0.98, aggregationMethod: "pessimistic" },
        ],
        "categories:accessibility": [
          "error",
          { minScore: 0.98, aggregationMethod: "pessimistic" },
        ],
        "categories:best-practices": [
          "error",
          { minScore: 0.98, aggregationMethod: "pessimistic" },
        ],
        "categories:seo": [
          "error",
          { minScore: 0.85, aggregationMethod: "pessimistic" },
        ],
        "first-contentful-paint": [
          "error",
          { maxNumericValue: 2000, aggregationMethod: "pessimistic" },
        ],
        interactive: [
          "error",
          { maxNumericValue: 2500, aggregationMethod: "pessimistic" },
        ],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
