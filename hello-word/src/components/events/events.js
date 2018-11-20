import React from "react";

class Event extends React.Component {

    render() {
        return (
            <a href="#" onClick={handleClick}>
                Click me
            </a>
        );
    }
}

function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
}

export default Event;