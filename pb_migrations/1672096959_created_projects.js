migrate((db) => {
  const collection = new Collection({
    "id": "0b892akl94fbwfr",
    "created": "2022-12-26 23:22:39.856Z",
    "updated": "2022-12-26 23:22:39.856Z",
    "name": "projects",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zxfjrymz",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": 1,
          "max": null,
          "pattern": "[^\\s]+"
        }
      },
      {
        "system": false,
        "id": "elorar58",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 15,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "vr5aejvq",
        "name": "desc",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 200,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "b3z9pzkm",
        "name": "dislink",
        "type": "text",
        "required": true,
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
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0b892akl94fbwfr");

  return dao.deleteCollection(collection);
})
