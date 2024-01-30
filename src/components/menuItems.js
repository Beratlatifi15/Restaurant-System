import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MenuItem from "./menuItems/menuItem";
import { getMenuItems } from "../actions/MenuItemsActions";
import { Link, useParams } from "react-router-dom";
import Header from "./Layout/Header";

import CreateButton from "./menuItems/CreateButton";

const MenuItemList = () => {
  const dispatch = useDispatch();
  const { id, menu_id } = useParams();
  const menuItemList = useSelector((state) => state.menuItemReducerContent.menuItems);

  useEffect(() => {
    dispatch(getMenuItems(id, menu_id));
  }, [dispatch, id]); // Corrected the dependency array

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <CreateButton id={id} menu_id = {menu_id} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {menuItemList.map((menuItem) => (
            <MenuItem key={menuItem.id} menuItem={menuItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuItemList;
