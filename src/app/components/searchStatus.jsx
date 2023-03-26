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

// ЭТО НЕ МОЙ КОД НЕ ПОНИМАЮ ОТКУДА ЭТО ВЗЯЛОСЬ
// const renderPhrase = (number) => {
//     const lastOne = Number(number.toString().slice(-1));
//     if (number > 4 && number < 15) return "человек тусанет";
//     if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
//     if (lastOne === 1) return "человек тусанет";
//     return "человек тусанет";
// };

// return (
//     <h2>
//         <span className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}>
//             {length > 0
//                 ? `${length + " " + renderPhrase(length)} с тобой сегодня`
//                 : "Никто с тобой не тусанет"}
//         </span>
//     </h2>
// )


export default SearchStatus;