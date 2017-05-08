npm ERR! Darwin 15.6.0
npm ERR! argv "/usr/local/Cellar/node/7.6.0/bin/node" "/usr/local/bin/npm" "install" "body-parser"
npm ERR! node v7.6.0
npm ERR! npm  v4.1.2
npm ERR! file /Users/fahimbokhari/GA/projects/unit02/project_2/package.json
npm ERR! code EJSONPARSE

npm ERR! Failed to parse json
npm ERR! Trailing comma in object at 10:3
npm ERR!   },
npm ERR!   ^
npm ERR! File: /Users/fahimbokhari/GA/projects/unit02/project_2/package.json
npm ERR! Failed to parse package.json data.
npm ERR! package.json must be actual JSON, not just JavaScript.
npm ERR! 
npm ERR! This is not a bug in npm.
npm ERR! Tell the package author to fix their package.json file. JSON.parse

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/fahimbokhari/GA/projects/unit02/project_2/npm-debug.log


I was missing a comma in my script section.

Hero was supposed to be called not hero data