import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../features/customerSlice";

interface CustomerProps {
  id: string;
  name: string;
  food: string[];
}
export default function CustomerCard({ id, name, food }: CustomerProps) {
  const dispatch = useDispatch();
  const [customerFoodInput, setCustomerFoodInput] = useState("");
  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => {
            return <p>{food}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            value={customerFoodInput}
            onChange={(e) => setCustomerFoodInput(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch(
                addFoodToCustomer({
                  id: id,
                  food: customerFoodInput,
                })
              );
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
