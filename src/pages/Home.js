import { Input, Table, Button } from "antd";
import React, { useState } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";

const { Column, } = Table;
const App = () => {
  const [listData, setListData] = useState(data);

  const handleSearch = (value) => {
    const filterData = listData.filter((e) =>
      e.name.toLowerCase().includes(value.toLowerCase())
    );
    setListData(filterData);
  };

  const refreshData = () => {
    setListData(data);
  };
  return (
    <>
      <Input.Search
        style={{ marginBottom: "20px", width: "30%" }}
        placeholder="Search Item"
        onChange={(e) => handleSearch(e.target.value)}
        onSearch={(value) => handleSearch(value)}
      />
      <Button onClick={refreshData}>refresh</Button>
      <Table dataSource={listData}>
        <Column title="Id" dataIndex="recipe_id" key="recipe_id" />
        <Column title="Menu" dataIndex="name" key="recipe_id" />
        <Column title="Category" dataIndex="category" key="recipe_id" />
        <Column
          title="Detail"
          dataIndex="recipe_id"
          key="recipe_id"
          render={(key) => (
            <Link to={`/detail/${key}`}>
              <Button className="button" type="primary">
                See Detail
              </Button>
            </Link>
          )}
        />
      </Table>
    </>
  );
};

export default App;
