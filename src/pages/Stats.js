import { useEffect, useState } from "react";
import "./Stats.css"
import React from "react";
import { ApiService } from "../services/services";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Label} from 'recharts';


export const Stats = () => {
    const [data, setData] = useState([]);
    const [date, setDate] = useState(new Date());
    const [openCalendarFlag, setOpenCalendarFlag] = useState(false);
    const [chartData, setChartData] = useState([]);
    const [demoData] = useState(
        [
            {
                'itemId': 1,
                'data': 35
            },
            {
                'itemId': 2,
                'data': 45
            },
            {
                'itemId': 3,
                'data': 55
            },
            {
                'itemId': 4,
                'data': 25
            },
        ]
    );


    const getDate = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    const openCalendar = () => {
        setOpenCalendarFlag(!openCalendarFlag);
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

    const normalizeDate = (dateStr) => {
        const [day, month, year] = dateStr.split('/');
        return `${parseInt(day)}/${parseInt(month)}/${year}`;
    };

    const getDataByDay = (data, targetDate) => {
        
        const filteredData = data.filter(item => {
            const dateOnly = item.timestamp.split(',')[0];
            const normalizeDateOnly = normalizeDate(dateOnly)
            return normalizeDateOnly === targetDate;
        })
        return filteredData
    }
    
    const handleDateChange = (date) => {
        setDate(date)
        const chartDataVar = getDataByDay(data, getDate(date))
        console.log(chartDataVar)
        setChartData(chartDataVar)
    }

    return(
        <>        
        <div className="div-stats">   
            <div className="button-stats">                
                <button onClick={openCalendar}>Calendar</button>            
            </div>          
            <div className="date-picker-container">
                {openCalendarFlag && (
                <DatePicker 
                    className="custom-date-picker"
                    selected={date}
                    onChange={handleDateChange}
                />
            )} 
            </div> 
            <div className="linechart-div">
                {Object.keys(chartData).length !== 0 ?
                                          
                    <LineChart width={1000} height={500} data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="treecount"> 
                            <Label value="Número de Pinheiros" offset={-5} position="insideBottom" />
                        </XAxis>
                        <YAxis dataKey="frequency"> 
                            <Label value="Frequência em Hertz" angle={-90} position="insideLeft" />  
                        </YAxis>
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                        <Line type="monotone" dataKey="frequency" stroke="#82ca9d" />
                    </LineChart>                   
                    :
                    <>
                        <div className="warning-noData-div">
                            <p>Sem dados para esta data.</p>
                        </div>
                        <LineChart width={1000} height={500} data={demoData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="itemId"> 
                            <Label value="Exemplo de X" offset={-5} position="insideBottom" />
                        </XAxis>
                        <YAxis dataKey="data"> 
                            <Label value="Exemplo de Y" angle={-90} position="insideLeft" />  
                        </YAxis>
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                        <Line type="monotone" dataKey="data" stroke="#82ca9d" />
                    </LineChart>
                    </>
                    
                }
                
            </div>
        </div>
        </>
        
    );
}