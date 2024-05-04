import React from 'react';
import MUIDataTable from "mui-datatables";

const DataGrid = ({columns,data}) => {
    const options = {
      selectableRows: false,
    //   elevation:0,
      rowsPerPage:10,
      rowsPerPageOptions:[5,10,20,30]
    };
    return (
      <div>
        <MUIDataTable
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    );
  }

export default DataGrid