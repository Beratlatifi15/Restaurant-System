import React from "react";
import { deleteMenu } from "../../actions/MenuActions";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

function MenuItem(props) {
  console.log(props);
  const dispatch = useDispatch();

  const onDeleteClick = (id, menu_id, menu_item_id) => {
    dispatch(deleteMenu(id, menu_id,menu_item_id));
  };

  const { menuItem } = props;
  const { id, menu_id } = useParams();

  return (
    <div className="bg-white p-3 mb-3 rounded-md shadow-md">
      <div className="container">
        <div className="p-3 bg-white shadow-md rounded-md">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-center">
                {menuItem.id}
              </h3>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {menuItem.name}
              </h3>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {menuItem.price}
              </h3>
            </div>
            <div className="lg:block hidden">
              <ul className="space-y-4">
                <li>
                  <Link
                    to={`/updateMenuItem/${id}/${menu_id}/${menuItem.id}`}
                    className="text-white hover:text-white focus:outline-none bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 block w-full text-center"
                  >
                    Update Menu Item
                  </Link>
                </li>
                <li>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 block w-full text-center"
                    onClick={() => onDeleteClick(id, menu_id, menuItem.id)}
                  >
                    Delete Menu Item
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
