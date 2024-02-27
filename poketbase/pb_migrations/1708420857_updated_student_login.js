/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ituf8nx1huagsjw")

  collection.name = "student_Registration"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ituf8nx1huagsjw")

  collection.name = "student_login"

  return dao.saveCollection(collection)
})
