import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `https://rahati-in7.onrender.com/api/hotels?city=${destination}&min=${min || 0 }&max=${max || 999}`
  );

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
         
          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
          <div className="listSearch">
            <h1 className="lsTitle">البحث</h1>
            <div className="lsItem">
              <label>الوجهة</label>
              <input placeholder={destination} type="text" className="inputSearch" />
            </div>
            <div className="lsItem">
              <label>تاريخ الوصول</label>
              <span onClick={() => setOpenDate(!openDate)} >{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label>خيارات</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="lsOptionInput"
                  />
                  <span className="lsOptionText">
                  الحد الأدنى <small>لسعر الليلة الواحدة</small>
                  </span>
                  
                </div>
                <div className="lsOptionItem">
                <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="lsOptionInput"
                  />
                  <span className="lsOptionText">
                   الحد الأقصى <small>لسعر الليلة الواحدة</small>
                  </span>
                
                </div>
                <div className="lsOptionItem">
                <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                  <span className="lsOptionText">بالغين</span>
               
                </div>
                <div className="lsOptionItem">
                <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                  <span className="lsOptionText">أطفال</span>
                 
                </div>
                <div className="lsOptionItem">
                <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                  <span className="lsOptionText">الغرف</span>
                
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
