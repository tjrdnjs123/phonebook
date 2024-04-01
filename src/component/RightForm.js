import React from "react";
import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import SearchBox from "./SearchBox";
import { useState } from "react";
import { useEffect } from "react";

const RightForm = () => {
  const itemList = useSelector((state) => state.itemList); // itemList 속성을 가져옴
  const keyword = useSelector((state) => state.keyword); // keyword 속성을 가져옴
  let [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (keyword !== "") {
      let list = itemList.filter((item) => item.name.includes(keyword));

      setFilteredList(list);
      console.log(list)
    } else {
      setFilteredList(itemList);
      console.log(itemList)
    }
  }, [keyword, itemList]);

  return (
    <div>
      <SearchBox />
      <div className="item-list">
        num:{filteredList.length}
        {filteredList.map((item, index) => (
          <ItemList item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RightForm;
