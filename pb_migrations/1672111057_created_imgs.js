migrate((db) => {
  const collection = new Collection({
    "id": "z8l5v2jskm8bf6a",
    "created": "2022-12-27 03:17:37.343Z",
    "updated": "2022-12-27 03:17:37.343Z",
    "name": "imgs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vqsrcvgp",
        "name": "img",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpg",
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif"
          ],
          "thumbs": [
            "50x50"
          ]
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("z8l5v2jskm8bf6a");

  return dao.deleteCollection(collection);
})
