import React from "react";

class Event extends React.Component {

    render() {
        return (
            <a href="#" onClick={handleClick}>
                Click
            </a>
        );
    }
}

function handleClick(e) {
    e.preventDefault();
    console.log(e + 'The link was clicked.');
}

export default Event;