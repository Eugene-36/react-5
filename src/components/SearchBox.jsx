import css from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onChange(e.target.elements.search.value);
  };
  return (
    <div className={css.wrapper}>
      {/* <HiSearch className={css.icon} /> */}
      <form action='' onSubmit={handleSubmit}>
        <input name='search' className={css.input} type='text' value={value} />
        <button type='submit'>submit</button>
      </form>
    </div>
  );
};

export default SearchBox;
