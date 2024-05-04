import React from "react";
import DataGrid from "./DataGrid";
import { useEffect } from "react";
import { CATEGORIES } from "../utils/constants";
import Header from "./Header";

const CategoriesPage = () => {
  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "company",
      label: "Company",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "city",
      label: "City",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "state",
      label: "State",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const data = [
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    {
      name: "James Houston",
      company: "Test Corp",
      city: "Dallas",
      state: "TX",
    },
  ];
  useEffect(() => {
    async function dummyjson() {
      const data = await fetch("https://dummyjson.com/users");
      const json = await data.json();
    }
    dummyjson();
  }, []);
  return (
    <>
    <Header />
    <div>
      <h1 className="m-2 p-2 font-bold text-4xl text-blue-900 items-center">Categories</h1>
      {CATEGORIES.map((e, i) => {
        return (
          <div key={i} className="m-3 p-2 bg-blue-200 rounded-lg" >
            <div className="flex justify-between items-center shadow-xl">
              <h1 className="font-bold text-xl text-blue-900 capitalize">
                {e}
              </h1>
              <button className="p-2 px-4 m-3 bg-blue-400 rounded-lg shadow-lg">Add Item</button>
            </div>
            <DataGrid columns={columns} data={data} key={i} />
          </div>
        );
      })}
    </div>
    </>
  );
};

export default CategoriesPage;
