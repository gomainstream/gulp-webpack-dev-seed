# gulp-webpack-dev-seed

A simple development environment using gulp, webpack, and the browsersync dev server; with support for ES2015, React, and SASS.

## Usage

Install Node.js and npm:

https://nodejs.org

Make a new repository:

http://github.com

Clone this repo:

```
$ git clone --bare https://github.com/gomainstream/gulp-webpack-dev-seed.git

$ cd gulp-webpack-dev-seed.git

$ git push --mirror https://github.com/exampleuser/new-repository.git

$ cd ..

$ rm -rf gulp-webpack-dev-seed.git
```
Now clone the new repository:

```
$ git clone https://github.com/exampleuser/new-repository.git

$ cd new-repository
```

Install the modules:

```
$ npm install
```

Start the BrowserSync Dev Server:

```
$ gulp serve
```

Open your browser:

http://localhost:7777

The server will watch for changes, injecting SASS or causing browser reload as needed.

Build site for deployment:

```
$ gulp build
```

The site will be built in `/test`.
