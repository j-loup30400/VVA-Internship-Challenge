import React, {useEffect, useState} from 'react';
import CharacterCard from './CharacterCard'



export default function CharacterList() {
    const [CharacterList, SetCharacterList] = useState([]);

    
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10]')
        .then(res => res.json()) 
        .then((data => SetCharacterList(data)))
        
        .catch(err => console.log(err))
        
        }, 
        [])
       
    return(
        <div>
            {CharacterList.map((chars, id) => {
                return <CharacterCard key={id}
                chars={chars} />
            
            })}
            
            
        </div>
    )
}
