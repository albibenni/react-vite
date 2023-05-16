import '../../App.css';
import React, { useRef, useState } from 'react';

function Search() {
  const [items, setItems] = useState<string[]>([]);
  const [query, setQuery] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const prefilled = () => {
    setItems((prevState) => [...prevState, 'John', 'Jane', 'Mike']);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputElement = inputRef.current;
    if (inputElement) {
      if (!inputElement.value) return;
      setItems((prevState) => [...prevState, inputElement.value]);
      inputRef.current.value = '';
    }
  };

  const filterItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="app">
      Search:{' '}
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        ref={inputRef}
        type="text"
      />
      <form onSubmit={onSubmit}>
        New Item: <input ref={inputRef} type="text" />
        <button type="submit">Add </button>
      </form>
      <input type="text" className="search" placeholder="Search" />
      <button type="submit" onClick={prefilled}>
        {' '}
        Prefilled{' '}
      </button>
      <ul className="List">
        {filterItems.map((item) => (
          <li className="listItem">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
