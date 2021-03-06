var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var Header = require('./header');
var List = require('./list');
var rootUrl = 'https://luminous-heat-5304.firebaseio.com/'

var App = React.createClass({
  mixins: [ ReactFire ],
  getInitialState: function(){
    return {
      items: {}
    }
  },
  componentWillMount: function() {
    this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
  },
  render: function() {
    return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          To-Do list
        </h2>
        <Header itemsStore={this.firebaseRefs.items} />
        <List items={this.state.items}/>
      </div>
    </div>
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
