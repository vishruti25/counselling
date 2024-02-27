/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8x4qigzj22sqcpj",
    "created": "2024-02-26 06:14:26.397Z",
    "updated": "2024-02-26 06:14:26.397Z",
    "name": "stu_login",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8aohlivw",
        "name": "email",
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
        "id": "e8rjmkdy",
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
  const collection = dao.findCollectionByNameOrId("8x4qigzj22sqcpj");

  return dao.deleteCollection(collection);
})
