import { TEChart } from "tw-elements-react";
const PieChart = ({data})=>{
    return (
        <div >
           <div className="mx-auto w-11/12 overflow-hidden md:w-3/5" data-testid="pie-chart">
                {data && data.data && <TEChart type="pie" data={{
                    labels: data.data.labels,
                    datasets: data.data.datasets,
                }} />}
            </div>
        </div>
    )
}

export default PieChart;