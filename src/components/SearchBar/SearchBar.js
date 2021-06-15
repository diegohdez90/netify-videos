import React, {useState} from 'react';

const SearchBar = ({
  onSubmit
}) => {

  const [term, setTerm] = useState('');

  const onSearch = (event) => {
    event.preventDefault();
    onSubmit(term)
  }

  return (
    <div className="ui segment">
      <form onSubmit={onSearch} className="ui form">
        <div className="field">
          <label>Type what do you want to search</label>
          <input 
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            type="text" 
            placeholder="Search a Video Here..."/>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
