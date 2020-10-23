export default {
    "swagger": "2.0",
    "info": {
        "description": "",
        "version": "1.0.0",
        "title": "Swagger VUTTR Very Usefull Tools to Remember",
        "termsOfService": "http://swagger.io/terms/",
        "contact": {
            "email": "marthinkorb@gmail.com"
        },
        "license": {
            "name": "Apache 2.0",
            "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
        }
    },
    "host": "localhost:3333",
    "basePath": "",
    "tags": [
        // {
        //     "name": "DDA",
        //     "description": "DDA para boletos de clientes"
        // },
        {
            "name": "CRUD of tools",
            "description": "You can create, read, update and delete the tools from your list."
        }
    ],
    "schemes": [
        "http",
        "https"
    ],
    "paths": {
        "/tools": {
            "get": {
                "tags": [
                    "CRUD of tools"
                ],
                "summary": "List all tools in system",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Response"
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "CRUD of tools"
                ],
                "summary": "Create a new tool",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "required": true,
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/Request"
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "Created",
                        "schema": {
                            "$ref": "#/definitions/Response"
                        }
                    },
                    "404": {
                        "description": "Bad request",
                        "schema": {
                            "$ref": "#/definitions/BadRequest"
                        }
                    },
                    "500": {
                        "description": "Internal server error"
                    }
                }
            },
        },
        "/tools/{id}": {
            "put": {
                "tags": [
                    "CRUD of tools"
                ],
                "summary": "Update a tool",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "id",
                        "required": true,
                        "description": "ID of tool to be updated",
                        "schema": {
                            "$ref": "#/definitions/Request"
                        },
                    },
                    {
                        "in": "body",
                        "name": "body",
                        "required": true,
                        "description": "ID of tool to be updated",
                        "schema": {
                            "$ref": "#/definitions/Request"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Response"
                        }
                    },
                    "404": {
                        "description": "Failed. DDA not found."
                    }
                }
            },
            "delete": {
                "tags": [
                    "CRUD of tools"
                ],
                "summary": "Delete a tool",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "id",
                        "required": true,
                        "description": "ID of tool to be updated",
                        "schema": {
                            "$ref": "#/definitions/Request"
                        },
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Tool deleted",
                        "schema": {
                            "$ref": "#/definitions/Response"
                        }
                    },
                    "404": {
                        "description": "Tool not found."
                    }
                }
            }
        },
        // "/tools/{id}": {
            
        // }
    },
    "securityDefinitions": {
        "tools_auth": {
            "type": "oauth2",
            "authorizationUrl": "",
            "flow": "implicit",
            "scopes": {
                "write:tools": "",
                "read:tools": ""
            }
        },
        "api_key": {
            "type": "apiKey",
            "name": "api_key",
            "in": "header"
        }
    },
    "definitions": {
        "Update": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "number"
                }
            }
        },
        "Request": {
            "type": "object",
            "properties": {
                "title": {
                    "type": "string"
                },
                "link": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
            }
        },
        "Response": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "number"
                },
                "title": {
                    "type": "string"
                },
                "link": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
            }
        },
        "BadRequest": {
            "type": "object",
            "properties": {
                "message": {
                    "type": "string"
                },
                "errors": {
                    "type": "object",
                    "properties": {
                        "description": {
                            "type": "string"
                        }
                    }
                },

            }
        }
    },
    "externalDocs": {
        "description": "Find out more about Swagger",
        "url": "http://swagger.io"
    }
};