import React from "react"
import PropTypes from "prop-types"

const SearchLine = ({ text, onChangeSearch }) => {
    return (<form>
        <input type="text" placeholder="Search..." className="form-control" value={text} onChange={(e) => onChangeSearch(e)} />
    </form>)
}
SearchLine.propTypes = {
    text: PropTypes.string,
    onChangeSearch: PropTypes.func
}

export default SearchLine
