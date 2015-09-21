# react-transform-render-visualizer

A [React Transform](https://github.com/gaearon/babel-plugin-react-transform) equivalent to [React Render Visualizer](https://github.com/redsunsoft/react-render-visualizer).

## Requirements
* React - 0.14-rc1+
* ReactDOM - 0.14-rc1+
* A browser that supports [element.animate](http://caniuse.com/#feat=web-animation)

## Installation

First, install the [Babel plugin](https://github.com/gaearon/babel-plugin-react-transform):

```sh
npm install --save-dev babel-plugin-react-transform
```

Then, install the transform:

```sh
npm install --save-dev react-transform-render-visualizer
```

Then edit your `.babelrc` to include `extra.babel-plugin-react-transform`.  
It must be an array of the transforms you want to use:

```js
{
  "stage": 0,
  "plugins": [
    "react-transform"
  ],
  "extra": {
    "react-transform": [{
      "target": "react-transform-render-visualizer"
    }]
  }
}
```

This transform is enabled regardless of NODE_ENV. It's up to you to disable in
a production build.

## Usage
Components will show up with a helpful box when monitored. This will attach itself to all components.

## License
MIT

This heavily relied on react-render-visualizer for inspiration, and their license is available at [LICENSE](https://github.com/redsunsoft/react-render-visualizer/blob/master/LICENSE)

## How it looks
![A react transform](http://i.imgur.com/wMJbq28.gif)
