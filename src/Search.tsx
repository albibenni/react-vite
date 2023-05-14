import './App.css';

function Search() {
  return (
    <div className="app">
      <input type="text" className="search" placeholder="Search" />
      <ul className="List">
        <li className="listItem">John</li>
        <li className="listItem">Jane</li>
        <li className="listItem">Mike</li>
      </ul>
    </div>
  );
}

export default Search;
