import React, { Component } from 'react';
import ReactTable from 'react-table';
//import 'react-table/react-table.css';

class Table extends Component {
    render() {

        const tableData = [{name:"Meskatul Islam", age: "23"},{name:"Meskatul Islam", age: "23"},
        {name:"Meskatul Islam", age: "23"},{name:"Meskatul Islam", age: "23"},];
        const tableCol = [{Header:"Name", accessor:"name"},{Header:"Age", accessor:"age"}];

        return (
            <div>
                <ReactTable
                data={tableData}
                columns={tableCol}
                defaultPageSize={2}
                pageSizeOptions={[2,4,6,8]}
                />
            </div>
        );
    }
}

export default Table;