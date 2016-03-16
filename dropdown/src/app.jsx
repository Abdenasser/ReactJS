var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a desert', // what should show up on the button to open/close the dropdown
  items: [ // list of items to show in the dropdown
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ]
};

var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.target'));
