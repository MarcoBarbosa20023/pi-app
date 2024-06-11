import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect, useState } from "react";
import { ApiService } from "../services/services";
import "./Table.css"

export const Table = () => {
    const [data, setData] = useState([]);
    const [colDefs] = useState([
        { 
            field : "treecount", 
            filter : true
        },      
        { 
            field : "diameter",
            filter : true
        },
        { 
            field : "frequency",
            filter : true
        },
        { 
            field : "timestamp",
            filter : true
        },
        { 
            field : "status",
            filter : true
        },
    ])

    const defaultColDef = {
        flex: 1,
    }
    
    const fetchData = async () => {
        ApiService
        .get()        
        .then((response) => {
            setData(response)
        })
    }

    useEffect(() => {
        fetchData()
    }, []);    

    return(
        <>
         <div className="ag-grid">
            <div
                className="ag-theme-quartz ag-grid-container"
            >
                <AgGridReact
                    pagination = {true}
                    paginationPageSize={15}
                    rowData={data}
                    columnDefs={colDefs}
                    defaultColDef={defaultColDef}
                />
            </div>
        </div>
        </>      
    );

}


