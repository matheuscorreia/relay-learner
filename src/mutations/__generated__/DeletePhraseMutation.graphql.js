/**
 * @flow
 * @relayHash 1f6580cde51b4203e7b4548cb519a38d
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type DeletePhraseMutationVariables = {|
  input: {
    id: string;
    clientMutationId: string;
  };
|};

export type DeletePhraseMutationResponse = {|
  +deletePhrase: ?{|
    +deletedId: ?string;
    +phrase: ?{|
      +id: string;
      +text: string;
    |};
  |};
|};
*/


/*
mutation DeletePhraseMutation(
  $input: DeletePhraseInput!
) {
  deletePhrase(input: $input) {
    deletedId
    phrase {
      id
      text
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "DeletePhraseInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "DeletePhraseMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "DeletePhraseInput!"
          }
        ],
        "concreteType": "DeletePhrasePayload",
        "name": "deletePhrase",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "deletedId",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Phrase",
            "name": "phrase",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "text",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "DeletePhraseMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "DeletePhraseInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "DeletePhraseMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "DeletePhraseInput!"
          }
        ],
        "concreteType": "DeletePhrasePayload",
        "name": "deletePhrase",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "deletedId",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Phrase",
            "name": "phrase",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "text",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation DeletePhraseMutation(\n  $input: DeletePhraseInput!\n) {\n  deletePhrase(input: $input) {\n    deletedId\n    phrase {\n      id\n      text\n    }\n  }\n}\n"
};

module.exports = batch;
