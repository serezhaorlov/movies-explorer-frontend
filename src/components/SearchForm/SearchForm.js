import React, { useState } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./SearchForm.css";
import useFormValidation from "../../hooks/useFormValidation";
import searchIcon from "../../images/icons/search-icon.svg";

function SearchForm({ handleSearch, setPreloader, setIsChecked, isLoading }) {
    const { values, errors, isValid, handleChange } =
        useFormValidation({});

    const [keyword, setKeyword] = useState("");
    const [isShortMovies, setIsShortMovies] = useState(false);

    function onCheckboxToggle(checked) {
        setIsShortMovies(checked);
        setIsChecked(!isShortMovies);
    }

    function handleKeyword(evt) {
        handleChange(evt);
        setKeyword(evt.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleSearch(keyword);
        setPreloader(true);
    }

    return (
        <section className="search">
            <div className="search__container">
                <form className="search__form" onSubmit={handleSubmit}>
                    <div className="search__container-input-box">
                    <img src={searchIcon} className="search__icon"></img>

                    <input
                        className="search__input"
                        name="keyword"
                        type="text"
                        placeholder="Фильм"
                        minLength="1"
                        maxLength="200"
                        required
                        autoComplete="off"
                        value={values.keyword || ""}
                        onChange={handleKeyword}
                        disabled={isLoading}
                    />
                    </div>
                    
                    <button
                        className={`search__button ${
                            !isValid && "search__button_disable"
                        }`}
                        disabled={!isValid}
                    >Найти</button>
                </form>
                <ToggleSwitch onCheckboxToggle={onCheckboxToggle} />
            </div>
            <span className="search__input-error">{errors.keyword}</span>
        </section>
    );
}

export default SearchForm;
