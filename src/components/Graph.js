import { useSelector } from "react-redux";
import useChartData from "../utils/hooks/useChartData";
import LineChart from "./LineChart";
import PieChart from "./PieChart";


const Graph = ()=>{
    useChartData();
    const studentData = useSelector((store)=>store.student);
    // console.log("Line Chart data",studentData.chartData.lineChartData);
    // console.log("PIE CHARTDATA",studentData.chartData.pieChartdata);
    return (
        <div className="items-center block md:!grid md:!grid-cols-2">
            {studentData.chartData.pieChartdata && <LineChart data={studentData.chartData.lineChartData}/>}
           {studentData.chartData.pieChartdata && <PieChart  data={studentData.chartData.pieChartdata}/>}
        </div>
    )
}

export default Graph;