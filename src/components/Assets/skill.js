// Importing images
import html from './skills/html.png';
import css from './skills/css (1).png';
import js from './skills/javascript.png';
import python from './skills/python (1).png';
import react from './skills/react.png';
import mysql from './skills/mysql.png';
import sqlite from './skills/sqlite.png';
import mongo from './skills/mongo-db.png';
import git from './skills/git.png';
import github from './skills/github.png';
import bootstrap from './skills/bootstrap.png';
import swagger from './skills/swagger-.jpg';
import django from './skills/django.png';
import responsive from './skills/res.png';
import api from './skills/api.png';
import go from './skills/go.png';
import flask from './skills/flask.png';
import auth from './skills/auth.png';

// Skills data
let skills_data = [
  {
    id: 1,
    name: 'HTML',
    image: html,
    example: '<!DOCTYPE html>\n<html>\n<head>\n<title>Example HTML</title>\n</head>\n<body>\n<h1>Hello, World!</h1>\n<p>This is an example of HTML code.</p>\n</body>\n</html>'
  },
  {
    id: 2,
    name: 'CSS',
    image: css,
    example: 'body {\n  font-family: Arial, sans-serif;\n}\nh1 {\n  color: blue;\n}'
  },
  {
    id: 3,
    name: 'JavaScript',
    image: js,
    example: 'console.log("Hello, World!");\nfunction add(a, b) {\n  return a + b;\n}'
  },
  {
    id: 4,
    name: 'Python',
    image: python,
    example: 'print("Hello, World!")\ndef add(a, b):\n  return a + b'
  },
  {
    id: 5,
    name: 'React',
    image: react,
    example: 'import React from "react";\nconst App = () => (\n  <div>\n    <h1>Hello, World!</h1>\n  </div>\n);\nexport default App;'
  },
  {
    id: 6,
    name: 'MySQL',
    image: mysql,
    example: 'CREATE DATABASE mydatabase;\nUSE mydatabase;\nCREATE TABLE users (\n  id INT AUTO_INCREMENT,\n  name VARCHAR(100),\n  PRIMARY KEY(id)\n);\nINSERT INTO users (name) VALUES ("John Doe");'
  },
  {
    id: 7,
    name: 'SQLite',
    image: sqlite,
    example: 'import sqlite3\nconn = sqlite3.connect("example.db")\nc = conn.cursor()\nc.execute("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)")\nc.execute("INSERT INTO users (name) VALUES (\'John Doe\')")\nconn.commit()\nconn.close()'
  },
  {
    id: 8,
    name: 'MongoDB',
    image: mongo,
    example: 'const { MongoClient } = require("mongodb");\nconst uri = "your_mongodb_uri";\nconst client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });\nclient.connect(err => {\n  const collection = client.db("test").collection("devices");\n  collection.insertOne({ name: "John Doe" }, (err, result) => {\n    console.log("Inserted document:", result.ops);\n    client.close();\n  });\n});'
  },
  {
    id: 9,
    name: 'Git',
    image: git,
    example: 'git init\ngit add .\ngit commit -m "Initial commit"\ngit remote add origin https://github.com/your-repo.git\ngit push -u origin master'
  },
  {
    id: 10,
    name: 'GitHub',
    image: github,
    example: '1. Go to https://github.com and sign up.\n2. Create a new repository.\n3. Follow the instructions to push your local repository to GitHub.'
  },
  {
    id: 11,
    name: 'Bootstrap',
    image: bootstrap,
    example: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">\n<div class="container">\n  <div class="row">\n    <div class="col">\n      <h1>Hello, World!</h1>\n      <button class="btn btn-primary">Click me</button>\n    </div>\n  </div>\n</div>'
  },
  {
    id: 12,
    name: 'Swagger',
    image: swagger,
    example: 'openapi: 3.0.0\ninfo:\n  title: Sample API\n  description: API description in Markdown.\n  version: 1.0.0\npaths:\n  /users:\n    get:\n      summary: Returns a list of users.\n      responses:\n        "200":\n          description: A JSON array of user names\n          content:\n            application/json:\n              schema:\n                type: array\n                items:\n                  type: string'
  },
  {
    id: 13,
    name: 'Django',
    image: django,
    example: 'from django.http import HttpResponse\n\n def index(request):\n    return HttpResponse("Hello, World!")\n\n# In urls.py\nfrom django.urls import path\nfrom . import views\n\nurlpatterns = [\n    path("", views.index, name="index"),\n]'
  },
  {
    id: 14,
    name: 'Responsive Design',
    image: responsive,
    example: '@media only screen and (max-width: 600px) {\n  body {\n    background-color: lightblue;\n  }\n}\n@media only screen and (min-width: 600px) {\n  body {\n    background-color: lightgreen;\n  }\n}'
  },
  {
    id: 15,
    name: 'API',
    image: api,
    example: 'const express = require("express");\nconst app = express();\n\napp.get("/api", (req, res) => {\n  res.json({ message: "Hello, World!" });\n});\n\napp.listen(3000, () => {\n  console.log("Server running on port 3000");\n});'
  },
  {
    id: 16,
    name: 'Go',
    image: go,
    example: 'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}\n\nfunc add(a int, b int) int {\n    return a + b\n}'
  },
  {
    id: 17,
    name: 'Flask',
    image: flask,
    example: 'from flask import Flask\napp = Flask(__name__)\n\n@app.route("/")\ndef hello():\n    return "Hello, World!"\n\nif __name__ == "__main__":\n    app.run()'
  },
  {
    id: 18,
    name: 'Authentication',
    image: auth,
    example: 'const passport = require("passport");\nconst LocalStrategy = require("passport-local").Strategy;\n\npassport.use(new LocalStrategy((username, password, done) => {\n  // Here, you would typically check the username and password against your database\n  if (username === "user" && password === "pass") {\n    return done(null, { username: "user" });\n  }\n  return done(null, false, { message: "Incorrect credentials" });\n}));\n\n// Express middleware to initialize Passport\napp.use(passport.initialize());\napp.use(passport.session());'
  }
];

export default skills_data;
