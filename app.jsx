const { StyleSheet, css } = require('./lib/aphrodite.js');
const React = require('react');

const App = React.createClass({

    render: function() {

        return (<div>
            hello world
        </div>);
    }
});

const ST = StyleSheet.create({
    content: {
    },
});

module.exports = App;