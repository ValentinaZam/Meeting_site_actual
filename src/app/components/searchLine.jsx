import React, { useState } from "react"
// import PropTypes from "prop-types"

const SearchLine = () => {
    const [searchText, setSearchText] = useState("")
    // useEffect(() => {
    //     setSearchText()
    // }, [searchText])

    const handleChangeSearch = ({ target }) => {
        setSearchText(target.value)
        console.log(target.value)
    }

    return (<form>
        <input type="text" placeholder="Search..." className="form-control" value={searchText} onChange={handleChangeSearch} />
    </form>)
}
// SearchLine.propTypes = {
//     usersName: PropTypes.string
// }
export default SearchLine
