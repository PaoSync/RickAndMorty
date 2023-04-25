import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

const SearchHeader = ({setPlanet}) => {
    const [filteredList, setFilteredList] = new useState([]);
    const searchChanged = (event) => {
        let searchText = event.target.value;
        // Get list of names with text included
        fetch(`https://rickandmortyapi.com/api/location/?name=${searchText}`)
        .then(res => res.json())
        .then(res => (res.results).slice(0, 5))
        .then(res => setFilteredList(res));
    };


    /*
        El evento de click lo pudiste hacer con la syntaxis de React onClick
    */

    /*
    * Display or Hide Planets' Search Box Drop Down Listener
    */
    document.addEventListener('click', function handleClickOutsideBox(event) {
        const clickableBox = document.getElementById('planetsearchbox');
        const dropDownBox = document.getElementById('dropDownPlanetsBox');
      
        if (!clickableBox.contains(event.target)) {
          dropDownBox.style.display = 'none';
        } else {
            dropDownBox.style.display = 'block';
        }
    });
    
    const loadPlanetPage = (planetId) => {
        setPlanet(planetId);
    }

    return (
        <div className="search-container">
            <img className="img-fluid w-100" alt="Rick_Morty_Banner" src="https://golden-phoenix-ea1456.netlify.app/static/media/banner_header.b1a07f3cb8c71d2a8025.png"/>
            
            <InputGroup className="search-block">
                <Form.Control
                type="text"
                name="planetsearch"
                id="planetsearchbox"
                placeholder="Search Planet"
                aria-label="Search Planet"
                onChange={(event) => searchChanged(event)}
                />
                <Button variant="outline-secondary" id="button-search-planet">
                Search
                </Button>
            </InputGroup>

            <ListGroup as="ul" className='drop-down-planets' id="dropDownPlanetsBox">
                {filteredList.map((planetInfo) => (
                    <ListGroup.Item as="li" action key={planetInfo?.id} className="d-flex justify-content-between align-items-start"
                    onClick={() => 
                    loadPlanetPage(planetInfo?.id)
                    }
                    >
                        {planetInfo?.name}
                        <Badge bg="primary" pill>
                            {planetInfo?.residents.length}
                        </Badge>
                    </ListGroup.Item>
                )   
                )}
            </ListGroup>

        </div>
    );
};

export default SearchHeader;