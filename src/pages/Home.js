import { useEffect, useState } from "react";
import { ApiService } from "../services/services";
import "./Home.css"

export const Home = () => {
    const [data, setData] = useState([]);
    
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
        <table className="tree-table">
            <thead>
                <tr>
                    <th className="column-diameter">Tree Number</th>
                    <th className="column-timestamp">Diameter</th>
                    <th className="column-status">Timestamp</th>
                    <th className="column-treecount">Status</th>
                </tr> 
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.treecount}</td>
                        <td>{item.diameter}</td>
                        <td>{item.timestamp}</td>
                        <td>{item.status}</td>
                    </tr>
                ))}
            </tbody>
               
        </table> 
        </>
        
    );
}


