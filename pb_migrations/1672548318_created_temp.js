migrate((db) => {
  const collection = new Collection({
    "id": "9qwgl2h9l593lu8",
    "created": "2023-01-01 04:45:18.255Z",
    "updated": "2023-01-01 04:45:18.255Z",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9qwgl2h9l593lu8");

  return dao.deleteCollection(collection);
})
