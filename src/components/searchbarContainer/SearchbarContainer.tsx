import React from "react";
import "../../css/Searchbar.css";
export default class SearchbarContainer extends React.Component<{},{}>{


    render(){
        return(
            <div className="searchbarContainer">
                <input type="text" placeholder="Buscas alguna película?"/>
            </div>
        )
    }
}