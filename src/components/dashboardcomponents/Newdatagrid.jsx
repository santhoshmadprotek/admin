import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Space, Typography, Select } from "antd";

const { Option } = Select;


export default function ExportDefaultToolbar({ data, title }) {
  const [selectedFilter, setSelectedFilter] = React.useState("");

  const [filteredData, setFilteredData] = React.useState([]);

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
  };

  React.useEffect(() => {
    // Filter data based on selected filter
    const filterData = () => {
      if (!selectedFilter) {
        setFilteredData(data.rows); // Show all rows if no filter selected
      } else {
        const filteredRows = data.rows.filter(
          (row) => row.shifting_type === selectedFilter // Filter rows based on selected filter
        );
        setFilteredData(filteredRows);
      }
    };

    filterData();
  }, [selectedFilter, data]);

  if (typeof data === "object") {
    return (
      <div>
        <Space size={20} className="mt-20 ml-8" direction="vertical">
          <Typography.Title level={4}>{title}</Typography.Title>
        </Space>
        <div className="m-2 p-2 w-full">
          <Space>
            <Typography.Text>Filter by:</Typography.Text>
            <Select
              value={selectedFilter}
              style={{ width: 200 }}
              onChange={handleFilterChange}
            >
              <Option value="">All</Option> {/* Option to select all */}
              <Option value="House shifting">House shifting</Option>
              <Option value="Vehicle shifting">Vehicle shifting</Option>
              {/* Add more filter options as needed */}
            </Select>
          </Space>
          <DataGrid
            rows={filteredData || data.rows} // Use filteredData if available, otherwise use all rows
            columns={data.columns}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
          />
        </div>
      </div>
    );
  }
}
