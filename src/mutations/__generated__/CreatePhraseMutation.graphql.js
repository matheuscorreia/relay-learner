/**
 * @flow
 * @relayHash 204c97dcc40d7157fd06a1281fda3abf
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CreatePhraseMutationVariables = {|
  input: {
    text: string;
    userId?: ?string;
    clientMutationId: string;
  };
|};

export type CreatePhraseMutationResponse = {|
  +createPhrase: ?{|
    +phrase: ?{|
      +text: string;
    |};
    +user: ?{|
      +id: string;
      +nickname: string;
    |};
  |};
|};
*/


/*
mutation CreatePhraseMutation(
  $input: CreatePhraseInput!
) {
  createPhrase(input: $input) {
    phrase {
      text
      id
    }
    user {
      id
      nickname
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
        "type": "CreatePhraseInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreatePhraseMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreatePhraseInput!"
          }
        ],
        "concreteType": "CreatePhrasePayload",
        "name": "createPhrase",
        "plural": false,
        "selections": [
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
                "name": "text",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "User",
            "name": "user",
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
                "name": "nickname",
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
  "name": "CreatePhraseMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreatePhraseInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "CreatePhraseMutation",
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
            "type": "CreatePhraseInput!"
          }
        ],
        "concreteType": "CreatePhrasePayload",
        "name": "createPhrase",
        "plural": false,
        "selections": [
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
                "name": "text",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "User",
            "name": "user",
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
                "name": "nickname",
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
  "text": "mutation CreatePhraseMutation(\n  $input: CreatePhraseInput!\n) {\n  createPhrase(input: $input) {\n    phrase {\n      text\n      id\n    }\n    user {\n      id\n      nickname\n    }\n  }\n}\n"
};

module.exports = batch;
