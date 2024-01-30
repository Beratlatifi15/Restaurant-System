import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createMenuItem } from "../../actions/MenuItemsActions";
import Header from "../Layout/Header";

const AddMenuItem    = () => {
  const dispatch = useDispatch();
  const { id, menu_id } = useParams();

  const [state, setState] = useState({
    name: "",
    price: 0.0,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newMenuItem = {
      name: state.name,
      price: state.price
    };

    // Dispatch the create action
    dispatch(createMenuItem(id,menu_id, newMenuItem));

    // Reset the form after submission
    setState({
      name: "",
      price: 0.0,
    });
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-6">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h4 className="text-2xl text-center mb-6">Add Menu Item Form</h4>
          <hr className="my-4" />
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="mb-4">
              <input
                type="text"
                className={`w-full p-3 border border-gray-300 rounded-md `}
                placeholder="Menu Item Name"
                name="name"
                value={state.name}
                onChange={onChange}
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                className={`w-full p-3 border border-gray-300 rounded-md`}
                placeholder="Menu item price"
                name="price"
                value={state.price}
                onChange={onChange}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
            >
              Add Menu Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMenuItem;
