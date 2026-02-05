
import "./SearchInput.css";



const SearchInput = () => {
    return (
        <div className="input-container">
            <input
                type="text"
                id="styled_input_bar"
                className="styled_input_bar"
                placeholder=" "
            />
            <label
                className="input-label"
                htmlFor="styled_input_bar"
            >
                Search by name...
            </label>
        </div>
    );
};

export default SearchInput;