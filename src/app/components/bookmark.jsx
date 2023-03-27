import React from "react";


const Bookmark = ({ status, id, onClick }) => {

    const statusLikeActive = () => {
        if (status) {
            return "bi bi-star-fill"
        } else {
            return "bi bi-star"
        }
    }

    return (


        <button onClick={() => onClick(id)}><i className={statusLikeActive()}></i></button>

        // {if (statusBookmark) {
        //     return <i className="bi bi-star-fill"></i>
        // }}

    )
}

export default Bookmark;


