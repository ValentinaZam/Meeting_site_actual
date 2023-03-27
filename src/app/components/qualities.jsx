import React, { useState } from "react";


const Qualities = ({ color, id, name }) => {
    return (<span key={id} className={"badge m-1 bg-" + color}> {name}
    </span>)
}

export default Qualities



