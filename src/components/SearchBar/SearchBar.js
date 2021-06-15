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
          <input 
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            type="text" 
            placeholder="Search"/>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
