module.exports = {
    "options": {
        "data": {
            "message": "Hello world!"
        }
    },
    "build": {
        "files": [
            {
                "expand": true,
                "cwd": "./build/",
                "src": ["*.html"],
                "dest": "./build/"
            }
        ]
    }
}