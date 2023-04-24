import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchHeader = () => {
    // const itemList = [
    //     "Apple",
    //     "Orange",
    //     "Banana",
    //     "Cherry",
    //     "Milk",
    //     "Peanuts",
    //     "Butter",
    //     "Tomato"
    //   ];
    // const [filteredList, setFilteredList] = new useState(itemList);
    const searchChanged = (event) => {
        // alert('changed');
        //alert(event.target.value);
        let searchText = event.target.value;
        //get list of names with text included
        //https://rickandmortyapi.com/api/location/?name=eart
        fetch(`https://rickandmortyapi.com/api/location/?name=${searchText}`)
        .then(res => res.json())
        .then(res => {
            //setLocationData(res)
            console.log(res);
            //setFilteredList(res?.results);
        });

    };

    return (
        <div className="search-container">
            <img className="img-fluid w-100" alt="Rick_Morty_Banner" src="https://golden-phoenix-ea1456.netlify.app/static/media/banner_header.b1a07f3cb8c71d2a8025.png"/>
            
            <InputGroup className="search-block">
                <Form.Control
                type="text"
                name="planetsearch"
                placeholder="Search Planet"
                aria-label="Search Planet"
                onChange={(event) => searchChanged(event)}
                />
                <Button variant="outline-secondary" id="button-search-planet">
                Search
                </Button>
            </InputGroup>
            {/* <div id="item-list">
                <ol>
                    {filteredList.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ol>
            </div> */}

        </div>
    );
};

export default SearchHeader;