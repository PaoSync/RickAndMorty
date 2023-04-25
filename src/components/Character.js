import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Character = ({character_url}) => {
    const [character, setCharacter] = useState({});
    useEffect(() => {
        fetch(character_url)
        .then(res => res.json())
        .then(res => setCharacter(res))
    }, []);
    
    /* Set isAlive: default, alive, and dead colors */
    let statusColor = 'gray';
    if (character?.status == 'Alive') {
        statusColor = 'green';
    } else if (character?.status == 'Dead') {
        statusColor = 'red';
    }

    return (
        <div>
            <div className='status-info'>
                <div className='status-info-circle' style={{backgroundColor: statusColor}}>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div className='status-info-text'> {character.status} </div>
                
            </div>
        <Col className="d-flex card-column">
            <Card className='flex-fill character-card' style={{ width: '18rem'}}>
                <Card.Img variant="top" src={character.image} />
                <Card.Body className='character-card'>
                    <Card.Title>{character.name}</Card.Title>
                    <Card.Text>
                        Gender: {character.gender} <br/>
                        Origin: {character.origin?.name} <br/>
                        Number of episodes appeared: {character.episode?.length}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        </div>
    );
};

export default Character;