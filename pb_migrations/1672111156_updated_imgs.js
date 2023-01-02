migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z8l5v2jskm8bf6a")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z8l5v2jskm8bf6a")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
})
