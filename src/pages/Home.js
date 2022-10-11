import { Input, Table, Button, Modal, Form, Popconfirm } from "antd";
import React, { useContext, useEffect, useRef, useState } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";
// import ContentModal from "../components/modal"
const { Column } = Table;
const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

const App = () => {
  const [open, setOpen] = useState(false);
  const [listData, setListData] = useState([]);
  const [dataSource, setDataSource] = useState([
    {
      key: "type no ref",
      name: "type name",
      category: "type category",
    },
  ]);

  const handleSearch = (value) => {
    const filterData = listData.filter((e) =>
      e.name.toLowerCase().includes(value.toLowerCase())
    );
    setListData(filterData);
  };

  const refreshData = () => {
    setListData(data);
  };


  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const defaultColumns = [
    {
      title: "name",
      dataIndex: "name",
      width: "30%",
      editable: true,
    },
    {
      title: "category",
      dataIndex: "category",
      editable: true,
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const handleAdd = () => {
    const newData = {
      key: parseInt(Math.random() * 1000),
      name: `type name`,
      category: "type category",
    };
    setDataSource([...dataSource, newData]);
  };

  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    setDataSource(newData);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  const handleSubmit = () => {
    setDataSource(dataSource);
    setListData([...dataSource, ...listData]);
    console.log("datasource", dataSource);
    console.log("listdata", listData);
  };

  // console.log("datasource dicek lagi",dataSource)

  return (
    <>
      <Input.Search
        style={{ marginBottom: "20px", width: "30%" }}
        placeholder="Search Item"
        onChange={(e) => handleSearch(e.target.value)}
        onSearch={(value) => handleSearch(value)}
      />
      <Button onClick={refreshData}>refresh</Button>
      <Button type="primary" onClick={() => setOpen(true)}>
        Add Data
      </Button>
      <Modal
        title="Add your input"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        {/* <ContentModal/> */}
        <div>
          <Button
            onClick={handleAdd}
            type="primary"
            style={{
              marginBottom: 16,
            }}
          >
            Add a row
          </Button>
          <Table
            components={components}
            rowClassName={() => "editable-row"}
            bordered
            dataSource={dataSource}
            columns={columns}
          />
          <Button
            onClick={handleSubmit}
            type="primary"
            style={{
              marginBottom: 16,
            }}
          >
            Submit
          </Button>
        </div>
      </Modal>
      <Table dataSource={listData}>
        <Column title="Id" dataIndex="key" key="key" />
        <Column title="Menu" dataIndex="name" key="key" />
        <Column title="Category" dataIndex="category" key="key" />
        <Column
          title="Detail"
          dataIndex="key"
          key="key"
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
