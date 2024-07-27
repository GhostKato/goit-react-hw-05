import s from './SearchBar.module.css'

const SearchBar = ({ handleChangeQuery, query }) => {
    
  return (
    <div className={s.container}>
      <input className={s.input} placeholder='Search movies' type='search' onChange={e => 
    handleChangeQuery(e.target.value)} value={query} 
/></div>
  )
}

export default SearchBar