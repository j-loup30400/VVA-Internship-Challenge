import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard'

export default function CharacterList() {
    const [CharacterList, SetCharacterList] = useState(null);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/1,10')
        .then(response => {
            console.log('hello',response.data.results);
            SetCharacterList(response.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    
}