define({ "api": [  {    "type": "post",    "url": "/list",    "title": "Create a new Gift/Wedding list",    "name": "NewList",    "group": "List",    "version": "0.0.1",    "error": {      "fields": {        "Error 400": [          {            "group": "Error 400",            "optional": false,            "field": "ValidationError",            "description": "<p>At least one field did not pass the validation.</p>"          }        ]      },      "examples": [        {          "title": "400 Error Example:",          "content": "{\n    \"result\": \"KO\",\n    \"code\": 400,\n    \"message\": \"\\\"ownerFirstName\\\" must only contain alpha-numeric characters\"\n}",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n     \"result\": \"OK\",\n     \"code\": 200\n}",          "type": "json"        }      ]    },    "parameter": {      "fields": {        "Identification": [          {            "group": "Identification",            "type": "Number",            "optional": false,            "field": "piva",            "description": "<p>Tax number of the agency who owns the wedding list</p>"          }        ],        "Owner Data": [          {            "group": "Owner Data",            "type": "String",            "size": "2..30",            "optional": true,            "field": "ownerFirstName",            "description": "<p>Owner First name</p>"          },          {            "group": "Owner Data",            "type": "String",            "size": "2..30",            "optional": true,            "field": "ownerLastName",            "description": "<p>Owner Last name</p>"          },          {            "group": "Owner Data",            "type": "String",            "optional": true,            "field": "ownerBirthday",            "description": "<p>Birth date in format DD/MM/YYYY</p>"          },          {            "group": "Owner Data",            "type": "String",            "optional": true,            "field": "ownerTaxCoe",            "description": "<p>Owner's tax code in Codice fiscale format.</p>"          },          {            "group": "Owner Data",            "type": "String",            "size": "2..30",            "optional": true,            "field": "ownerOccupation",            "description": "<p>Owner's occupation</p>"          },          {            "group": "Owner Data",            "type": "Email",            "optional": true,            "field": "ownerEmail",            "description": "<p>Owner's email</p>"          }        ],        "Travel Data": [          {            "group": "Travel Data",            "type": "String",            "size": "2..300",            "optional": true,            "field": "travelTitle",            "description": "<p>Title of the travel</p>"          },          {            "group": "Travel Data",            "type": "String",            "size": "2..10000",            "optional": true,            "field": "travelDescription",            "description": "<p>Description of the travel</p>"          },          {            "group": "Travel Data",            "type": "String[]",            "optional": true,            "field": "travelPictures",            "description": "<p>Url of an image (can be repeated 5 times)</p>"          }        ],        "Travel Stage": [          {            "group": "Travel Stage",            "type": "Object[]",            "optional": true,            "field": "travelStages",            "description": "<p>Stages of the travel</p>"          },          {            "group": "Travel Stage",            "type": "String",            "size": "2..300",            "optional": true,            "field": "travelStages.title",            "description": "<p>Title of the stage</p>"          },          {            "group": "Travel Stage",            "type": "Number",            "optional": true,            "field": "travelStages.amount",            "description": "<p>Cost in eurocents of the stage</p>"          },          {            "group": "Travel Stage",            "type": "Number",            "optional": true,            "field": "travelStages.quoteNumber",            "description": "<p>Amount of quotes available</p>"          }        ]      }    },    "filename": "src/doc-src.js",    "groupTitle": "List"  }] });
