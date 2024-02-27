/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ituf8nx1huagsjw",
    "created": "2024-02-20 03:28:55.753Z",
    "updated": "2024-02-20 03:28:55.753Z",
    "name": "student_login",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4yiuglaw",
        "name": "student_email",
        "type": "email",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "dabwkdt6",
        "name": "password",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
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
  const collection = dao.findCollectionByNameOrId("ituf8nx1huagsjw");

  return dao.deleteCollection(collection);
})
