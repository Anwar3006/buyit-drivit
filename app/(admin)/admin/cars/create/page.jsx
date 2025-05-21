import React from "react";
import AddCarForm from "../_components/AddCarForm";

export const metadata = {
  title: "Add Car | BitDit Admin",
  description: "Add a car to your marketplace",
};

const CreateCarPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 font-quicksand">Add New Car</h1>

      <AddCarForm />
    </div>
  );
};

export default CreateCarPage;
