import React, {useEffect, useState} from 'react';
import CharacterCard from './CharacterCard'



export default function CharacterList() {
    const [CharacterList, SetCharacterList] = useState([]);
    
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/[1,22,28,85,13,215,7,8,9,356]')
        .then(res => res.json()) 
        .then((data => {
            console.log(data);
            SetCharacterList(data);
        })) 
        .catch(err => console.log(err))
        }, 
        [])
       
    return(
        <div>
            {CharacterList.map((chars, id) => {
                return <div className="call"> <CharacterCard key={id}
                chars={chars} />
                </div>
            })}
            
        </div>
    )
}
