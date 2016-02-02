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
    "react-transform": {
      "transforms": [{
        "transform": "react-transform-render-visualizer"
      }]
    }
  }
}
```

This transform is enabled regardless of NODE_ENV. It's up to you to disable in
a production build.

## Usage
Components will show up with a helpful box when monitored. This will attach itself to all components.

### Select Components to Visualize
By default this transform will display the render visualizer on every component. If you'd like to specify the components you want to visualize perform the following steps

Use the following transform:
```js
        "transform": "react-transform-render-visualizer/lib/specify"
```

On any comnponent that you'd like the render visualizer to appear, set the static property rerenderViz to true;
```js
export class QueueMenu extends Component {
	static displayName = 'QueueMenu';
	static rerenderViz = true;
```


## License
MIT

This heavily relied on react-render-visualizer for inspiration, and their license is available at [LICENSE](https://github.com/redsunsoft/react-render-visualizer/blob/master/LICENSE)

## How it looks
![A react transform](http://i.imgur.com/wMJbq28.gif)
