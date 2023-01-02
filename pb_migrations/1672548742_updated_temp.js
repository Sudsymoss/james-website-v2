migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9qwgl2h9l593lu8")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9qwgl2h9l593lu8")

  // remove
  collection.schema.removeField("b0qlpqgw")

  // remove
  collection.schema.removeField("ypy9z0sn")

  // remove
  collection.schema.removeField("jw9fvolw")

  // remove
  collection.schema.removeField("ogq6hrf3")

  // remove
  collection.schema.removeField("06badbz8")

  // remove
  collection.schema.removeField("mlyt5cq2")

  return dao.saveCollection(collection)
})
