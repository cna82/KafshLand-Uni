import { useState } from "react";
import "./index.css";
const FilterSection = ({ onSetData, data, PRODUCTS }) => {
  const [inputValue, setInputValue] = useState("");
  const handlePrice = (option) => {
    if (option === "ascending") {
      const newList = [...data].sort((a, b) => a.price - b.price);
      onSetData(newList);
    } else if (option === "descending") {
      const newList = [...data].sort((a, b) => -a.price + b.price);
      onSetData(newList);
    } else {
      onSetData(PRODUCTS);
    }
  };
  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };
  const handleSearch = () => {
    const newList = [...data].filter(
      (item) => item.title.search(inputValue) > -1
    );
    onSetData(newList);
    setInputValue("");
  };
  const handleCancelSearch = () => {
    setInputValue("");
  };
  return (
    <>
      <div className={` col-12 row px-5 mb-4 bg-light  mt-3 p-2 filter-container `} dir="rtl">
        <div className="col-8   d-flex gap-3 flex-row align-items-center justify-content-cneter">
          <h5>
            <i className="bi bi-sliders"></i> فیلتر :{" "}
          </h5>
          <button className={`btn`} onClick={() => handlePrice("all")}>
            <i className="bi bi-segmented-nav"></i> {""}
            همه محصولات
          </button>
          <button className={`btn `} onClick={() => handlePrice("ascending")}>
            <i className="bi bi-sort-up fw-bold fs-5" /> {""}
            کمترین قیمت
          </button>
          <button className={`btn `} onClick={() => handlePrice("descending")}>
            <i class="bi bi-sort-down fw-bold fs-5" /> {""}
            بیشترین قیمت
          </button>
        </div>
        <div
          className={` col-4 row justify-content-center align-itams-center  `}
        >
          <div className="input-group" dir="ltr">
            <input
              type="text"
              className={`form-control `}
              aria-label="Dollar amount (with dot and two decimal places)"
              value={inputValue}
              onChange={handleChange}
              placeholder="...جستوجوی محصول"
            />
            <span
              className={`input-group-text text-primary search-icon `}
              onClick={handleSearch}
            >
              <i className="bi bi-search"></i>
            </span>
            {inputValue.length !== 0 && (
              <span
                className={`input-group-text text-danger search-icon`}
                onClick={handleCancelSearch}
              >
                <i className="fa fa-close" aria-hidden="true" />
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default FilterSection;
