/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type MyPhrases_user = {|
  +phrases: ?{|
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
          "phrases"
        ]
      }
    ]
  },
  "name": "MyPhrases_user",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "phrases",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 500,
          "type": "Int"
        }
      ],
      "concreteType": "PhraseConnection",
      "name": "__MyPhrases_phrases_connection",
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
      "storageKey": "__MyPhrases_phrases_connection{\"first\":500}"
    }
  ],
  "type": "User"
};

module.exports = fragment;
