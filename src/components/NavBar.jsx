import React, {useContext} from "react";
import { BookContext } from "../contexts/BookContext";

const NavBar = () => {
    const {books} = useContext(BookContext)
    return (
        <div>
            <h1>Books are here</h1>
            <p>You have for name {books.length} books to get through...</p>
        </div>
    )
}

export default NavBar