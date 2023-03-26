import React, { useState } from "react";
import api from "../api"

const Qualities = ({ color, id, name }) => {
    return (<span className={"badge m-1 bg-" + color} key={id}>
        {name}
    </span>)
}

export default Qualities