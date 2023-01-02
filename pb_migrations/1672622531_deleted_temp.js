migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9qwgl2h9l593lu8");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "9qwgl2h9l593lu8",
    "created": "2023-01-01 04:45:18.255Z",
    "updated": "2023-01-01 04:52:22.737Z",
    "name": "temp",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8dlemxhh",
        "name": "provider",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "b0qlpqgw",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ypy9z0sn",
        "name": "state",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "jw9fvolw",
        "name": "codeVerifier",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ogq6hrf3",
        "name": "codeChallenge",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "06badbz8",
        "name": "codeChallengeMethod",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "mlyt5cq2",
        "name": "authUrl",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
