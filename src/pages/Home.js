import { Input, Space, Table, Tag, Button } from "antd";
import React, { useState } from "react";
import data from "../data.json";
import {Link} from "react-router-dom"
const { Column, ColumnGroup } = Table;
const App = () => {
  const [listData, setListData] = useState(data);

  const handleSearch = (value) => {
    const filterData = listData.filter((e) =>
      e.title.toLowerCase().includes(value.toLowerCase())
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
        <Column title="First Name" dataIndex="userId" key="id" />
        <Column title="Age" dataIndex="id" key="id" />
        <Column title="Address" dataIndex="title" key="id" />
        <Column
          title="Detail"
          dataIndex="id"
          key="id"
          render={(id) => (
            <Link to={`/detail/${id}`}>
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
