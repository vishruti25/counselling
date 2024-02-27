/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8x4qigzj22sqcpj");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "8x4qigzj22sqcpj",
    "created": "2024-02-26 06:14:26.397Z",
    "updated": "2024-02-26 06:15:01.868Z",
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
