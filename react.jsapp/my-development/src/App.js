import React,{useEffect, useState}from 'react';
import Recipe from './Recipie';
import './App.css';


const App = () => {


  const APP_ID = "823315e9";
  const APP_KEY ="dd5699aa81719bb7ed420244b74e59b6";
  
  // const [counter, setCounter] = useState(0);
  
  const [recipes, setRecipies] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


  useEffect( () =>{
    getRecipes();
   
  }, [query]);
  
  const getRecipes = async () => {
    const response = await fetch( `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    
    const data = await response.json();

    // console.log(data.hits);
    setRecipies(data.hits);
    console.log(data.hits);

  };

  const updateSearch = e => {
    setSearch(e.target.value);
    // console.log(search);    
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className ="App">
      <form onSubmit={getSearch} className="search-form">
        <input className ="search-bar" type ="text" value={search} onChange={updateSearch}/>
        <button
         className ="search-button" 
         type ="submit"
         >
          {/* {counter} */}
          </button>
      </form>
      <div className="recipes">
     {recipes.map(recipe =>(
       <Recipe 
       key={recipe.recipe.label}
       title={recipe.recipe.label}
       calories={recipe.recipe.calories}
       image={recipe.recipe.image}
       ingredients={recipe.recipe.ingredients}
       />
    ))};
    </div>
  </div>
  );
};

export default App;
