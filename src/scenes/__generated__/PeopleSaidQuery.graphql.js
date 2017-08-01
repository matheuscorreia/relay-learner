/**
 * @flow
 * @relayHash e2cb1e7b8ee65bcb20ff666d6be0b272
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type PeopleSaidQueryResponse = {|
  +viewer: {| |};
|};
*/


/*
query PeopleSaidQuery {
  viewer {
    ...AllPhrases_viewer
    id
  }
}

fragment AllPhrases_viewer on Viewer {
  allPhrases(first: 500) {
    edges {
      node {
        ...Phrase_phrase
        id
      }
    }
    ... on PhraseConnection {
      edges {
        cursor
        node {
          __typename
          id
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
}

fragment Phrase_phrase on Phrase {
  createdAt
  id
  text
  user {
    id
    nickname
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PeopleSaidQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "AllPhrases_viewer",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "PeopleSaidQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "PeopleSaidQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
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
            "kind": "InlineFragment",
            "type": "Viewer",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 500,
                    "type": "Int"
                  }
                ],
                "concreteType": "PhraseConnection",
                "name": "allPhrases",
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
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "id",
                            "storageKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "Phrase",
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "createdAt",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "text",
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
                            ]
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "type": "PhraseConnection",
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
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "cursor",
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "args": null,
                            "concreteType": "Phrase",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "__typename",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "PageInfo",
                        "name": "pageInfo",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "endCursor",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "hasNextPage",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "hasPreviousPage",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "startCursor",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ]
                  }
                ],
                "storageKey": "allPhrases{\"first\":500}"
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 500,
                    "type": "Int"
                  }
                ],
                "handle": "connection",
                "name": "allPhrases",
                "key": "Phrases_allPhrases",
                "filters": [
                  "first"
                ]
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query PeopleSaidQuery {\n  viewer {\n    ...AllPhrases_viewer\n    id\n  }\n}\n\nfragment AllPhrases_viewer on Viewer {\n  allPhrases(first: 500) {\n    edges {\n      node {\n        ...Phrase_phrase\n        id\n      }\n    }\n    ... on PhraseConnection {\n      edges {\n        cursor\n        node {\n          __typename\n          id\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n}\n\nfragment Phrase_phrase on Phrase {\n  createdAt\n  id\n  text\n  user {\n    id\n    nickname\n  }\n}\n"
};

module.exports = batch;
