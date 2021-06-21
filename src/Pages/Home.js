import React from "react";
import CharacterList from "../Components/Api/CharacterList";
import title from "../Images/title.png";
import listview from "../Images/listview.png";
import gridview from "../Images/gridview.png";

//  const charsList = document.getElementById('listChars');
//  const searchBar = document.getElementById('searchId');
//  let rmCharacters = [];
//  searchBar.addEventListener('keyup', (e) => {
//     const searchString = e.target.value;
//    const filteredCharacter = rmCharacters.filter(character => {
//         return character.name.contain(searchString)
//     });
//     console.log(filteredCharacter)
//  })

const Home = () => {
  // const [search, setSearch] = useState("")
  return (
    <>
      <div className="rickTitle">
        <img className="homeTitle" src={title} alt="title"></img>
      </div>
      <input
        id="searchId"
        className="search"
        type="text"
        placeholder="Search a character ..."
      ></input>

      <div className="view">
        <input
          className="newOld"
          type="choice"
          placeholder="Newest-Oldest"
        ></input>
        <img src={listview} alt="list"></img>
        <img src={gridview} alt="list"></img>
      </div>
      <div className="line"></div>
      <div className="container">
        <CharacterList />
      </div>
    </>
  );
};

export default Home;
