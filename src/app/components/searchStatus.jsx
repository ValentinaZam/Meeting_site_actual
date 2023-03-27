import React from "react";

const SearchStatus = ({ length }) => {

    const changeColorSpan = (number) => {
        let badge = "badge m-2 "
        return badge += number === 0 ? "bg-danger" : "bg-primary"
    }

    const renderPhrase = (number) => {
        return number === 0 ? "Никто с тобой не тусанёт" :
            (number < 5 && number > 1) ?
                `${number} человека тусанёт с тобой сегодня` :
                `${number} человек тусанёт с тобой сегодня`
    }

    return (
        <h2><span className={changeColorSpan(length)}>{renderPhrase(length)}</span></h2>
    )
}

export default SearchStatus;