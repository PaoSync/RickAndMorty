import React, { useEffect, useState } from 'react';
import LocationHeader from './LocationHeader';
import Character from './Character';
import SearchHeader from './SearchHeader';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const Location = () => {  
    const [locationData, setLocationData] = useState({});
    const [locations, setLocations] = useState({});
    const [randomPage, setRandomPage] = useState(0);
    const [pageLocations, setPageLocations] = useState({});    
    const randPg = Math.floor(Math.random() * (126 - 1 + 1)) + 1;

    useEffect(() => {
        /*function setRandomLocation(locationsInfo){
            console.log('locations: ' + locationsInfo);
            //let pageLocations = {};
            if (locationsInfo?.results){
                let locationKeys = Object.keys(locationsInfo?.results);
                //console.log(locationKeys);
                console.log(locationsInfo?.info.pages);
                let randomPage = Math.floor(Math.random() * (locationsInfo?.info.pages - 1 + 1)) + 1;
                //console.log('randomPage: ' + randomPage);
                
                fetch(`https://rickandmortyapi.com/api/location/?page=${randomPage}`)
                .then(res => res.json())
                .then(res => console.log('res: ' + res))
                //console.log('pageLocations: '+pageLocations);
        
            } 
            //return pageLocations;
        }*/


        // Get Locations and select a random id
        /*fetch('https://rickandmortyapi.com/api/location')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            if (res?.results){
                //let locationKeys = Object.keys(res?.results);
                //console.log(locationKeys);
                console.log(res?.info.pages);
                setRandomPage( Math.floor(Math.random() * (res?.info.pages - 1 + 1)) + 1 );
                //console.log('randomPage: ' + randomPage);        
            }
        }).finally(ress => {
            console.log('randomPage: ' + randomPage);
            fetch(`https://rickandmortyapi.com/api/location/?page=2`)
                .then(response => response.json())
                .then(response => console.log('response: ' + response));
                //console.log('pageLocations: '+pageLocations);
        });*/
        
    
        // Get Location Data
        fetch(`https://rickandmortyapi.com/api/location/${randPg}`)
        .then(res => res.json())
        .then(res => setLocationData(res));
    }, []);    

    return (
        <div>
            <SearchHeader />
            <LocationHeader type={locationData.type} dimension={locationData.dimension} planet={locationData.name} residents={locationData.residents?.length} />
            <div className='characters-layout'>
                <Row lg={4}>
                {locationData.residents?.map((resident) => (
                    <Character character_url={resident} key={resident} />
                )   
                )}
                </Row>
            </div>
            
        </div>
    );
};

export default Location;