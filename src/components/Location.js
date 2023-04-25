import React, { useEffect, useState } from 'react';
import LocationHeader from './LocationHeader';
import Character from './Character';
import SearchHeader from './SearchHeader';
import Row from 'react-bootstrap/Row';

/*
    Las importaciones innecesarias, estados y variables que no usemos es mejor eliminarlas 
    para tener un codigo mas limpio y optimo.
*/

const Location = () => {  
    const [locationData, setLocationData] = useState({});
    const [planet, setPlanet] = useState(Math.floor(Math.random() * (126 - 1 + 1)) + 1); 

    useEffect(() => {        
        // Get Location Data
        fetch(`https://rickandmortyapi.com/api/location/${planet}`)
        .then(res => res.json())
        .then(res => setLocationData(res));
    }, [planet]);

    return (
        <div>
            <SearchHeader setPlanet={setPlanet} />
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