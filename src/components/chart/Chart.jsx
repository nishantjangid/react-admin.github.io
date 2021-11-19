import styled from "styled-components"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ChartContainer = styled.div`
    margin:20px;
    padding:20px;
    box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 81%);
    -webkit-box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 81%);
    -moz-box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 81%); 
`;

const ChartTitle = styled.h3``;

const Chart = ({title, data, dataKey, grid}) => { 

    return (
        <ChartContainer>
            <ChartTitle>{title}</ChartTitle>

            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                {grid && <CartesianGrid strokeDasharray="5 5" stroke="#e0dfdf"/>}
                <XAxis dataKey="name" stroke="#5550bd"/>
                {/* <YAxis stroke="#5550bd"/> */}
                <Tooltip />
                <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />                
                </LineChart>
            </ResponsiveContainer>            
        </ChartContainer>
    )
}

export default Chart
