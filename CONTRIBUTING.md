# Contributing

## Getting set up

This project uses Node, Express, and Gulp to run a small webserver. For best results
you may want to have these installed before cloning this repo:

+ [Node](https://nodejs.org/)
+ [Gulp](http://gulpjs.com/)

Once you have the repo cloned, make sure you install the dependencies

`npm install -d`

Once the dependencies have install, you can run in "developement mode" with

`npm run dev`

## Development Mode

The "Dev mode" uses [nodemon](http://nodemon.io/) (as a [gulp plugin](https://www.npmjs.com/package/gulp-nodemon)) and gulp to do a few things, they are

+ watching and compiling less into css
+ watching and compiling handlebars templates into html
+ watching some files that Express needs and restarting the WebServer

The goal of running the gulp tasks is that you shouldn't have to touch the server once you start it.

## Project Structure

The project is broken into a series of pages called "tests", where we try to explore a concept or accomplish a goal. A test is an `.hbs` file with associated css (as a `.less` file) and potentially javascript. I'm using a layout file (`/assets/templates/layouts/default.hbs`) and individual tests will be partials.

So using an example test called `my-svg-test.hbs`, the `HTML` (`.hbs`) can be found in the assets folder under templates

```text
    assets
    └── templates
        ├── my-svg-test.hbs
        ├── index.hbs
        └── layouts
            └── default.hbs
```

and `CSS` (`.less`) can be found in the assets folder under less

```text
    assets
    └── less
        ├── my-svg-test.less
        └── src
            └── main.less
```

To include associated css or javascript, use an `extend` handlebars block. Like so:

```Handlebars
    {{#extend "stylesheets"}}
      <link rel="stylesheet" href="/css/some-test.css">
    {{/extend}}
```

or

```Handlebars
    {{#extend "javascript"}}
      <script src="/js/some-test.js"></script>
    {{/extend}}
```