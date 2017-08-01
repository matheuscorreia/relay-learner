/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type AllPhrases_viewer = {|
  +allPhrases: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: {| |};
    |}>;
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "allPhrases"
        ]
      }
    ]
  },
  "name": "AllPhrases_viewer",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "allPhrases",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 500,
          "type": "Int"
        }
      ],
      "concreteType": "PhraseConnection",
      "name": "__Phrases_allPhrases_connection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "PhraseEdge",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "Phrase",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "Phrase_phrase",
                  "args": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "__Phrases_allPhrases_connection{\"first\":500}"
    }
  ],
  "type": "Viewer"
};

module.exports = fragment;
