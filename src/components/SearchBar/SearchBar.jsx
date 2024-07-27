const SearchBar = ({ handleChangeQuery, query }) => {
    
  return (
    <div><input placeholder='Search movies' type='search' onChange={e => 
    handleChangeQuery(e.target.value)} value={query} 
/></div>
  )
}

export default SearchBar