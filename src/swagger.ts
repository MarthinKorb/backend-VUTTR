export default {
    "swagger": "2.0",
    // "openapi": "3.0.0",
        "info": {
        "version": "1.0.0", 
        "title": "My Tools Project CRUD",
        "description": "Tool's CRUD API",
        "license": {
            "name": "MIT",
            "url": "https://opensource.org/licenses/MIT"
        }
        },
        "host": "localhost:3333",
        "basePath": "",
        "tags": [
        {
            "name": "Tools",
            "description": "API for users in the system"
        }
        ],
        "schemes": [
            "http", 
            "https"
        ],
        "consumes": [
            "application/json"
        ],
        "produces": [
            "application/json"
        ],
        "paths": {
            "/tools": {
                "get": {
                    "tags": ["Tools"],
                    "summary": "Get all tools in system",
                    "description": "",
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": ""
                            }
                        }
                    },
                    "parameters":{
                        "in": "body",
                        "name": "body",
                        "description": "Add a new tool in list",
                        "required": true,                        
                    }
                },
                "post": {
                    "tags": ["Tools"],
                    "summary": "Create a new Tool",
                    "responses": {
                        "201": {
                            "description": "Tool created",
                            "schema": {
                                "$ref": ""
                            }
                        }
                    }
                }
            }
        }, "definitions": {
                "Tool": {
                    // "required": [
                    // "title",
                    // "_id",
                    // "companies"
                    // ],
                    "properties": {
                        "id": {
                            "type": "integer",
                            "uniqueItems": true
                        },
                        "title": {
                            "type": "string"
                        },
                        "link": {
                            "type": "string"
                        },
                        "description": {
                            "type": "string",
                            },
                    }
                },
        }
}