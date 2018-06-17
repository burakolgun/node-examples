const path = require('path');

module.exports = (exampleNumber) => {
    switch (exampleNumber) {
        case 11: {
            return {
                "repositories": [
                    "git@github.com:burakolgun/goLang_examples.git",
                    "git@github.com:burakolgun/laravel-docker-pgsql-redis.git",
                    "git@github.com:burakolgun/chat-app-example.git"
                ]
            }
        }

        case 12: {
            return {
                "repository": {
                    "repoPath": path.join("~/Desktop/projects/Go/goLang_examples"),
                    "delivery": "git@github.com:burakolgun/goLang_examples.git",
                    "baseBranch": "master"
                }
            }
        }
    }
}