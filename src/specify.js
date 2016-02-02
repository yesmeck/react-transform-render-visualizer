module.exports = require('./renderWrapper')(function(ReactClass) {
  return !!ReactClass.rerenderViz;
});
