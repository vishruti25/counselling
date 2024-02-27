/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ituf8nx1huagsjw")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_fmgom2P` ON `student_Registration` (`email`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ituf8nx1huagsjw")

  collection.indexes = []

  return dao.saveCollection(collection)
})
