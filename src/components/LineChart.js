import { TEChart } from "tw-elements-react";
const LineChart = ({data})=>{
    return (
        <div >
            <div className="mx-auto w-11/12 overflow-hidden md:w-4/5" data-testid="line-chart">
                {data && data.data && <TEChart type="line" data={{
                    labels: data.data.labels,
                    datasets: data.data.datasets,
                }} />}
            </div>
        </div>
    )
}

export default LineChart;