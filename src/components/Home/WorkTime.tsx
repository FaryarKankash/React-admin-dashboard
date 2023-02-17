import { useEffect, useState } from "react"
import ReactApexChart from "react-apexcharts"
import { ApexOptions } from "apexcharts";
import { CircularProgress } from "@mui/material";

const LineChart = () => {
    const [series, setSeries] = useState<ApexOptions>()
    const [option, setOption] = useState<ApexOptions>()

    const getEntity = () => {
        setSeries({ series: [{
            name: "Desktops",
            data: [25, 51, 69, 148]
        }] })
        setOption({
                chart: {
                  height: 350,
                  type: 'line',
                  zoom: {
                    enabled: false
                  }
                },
                dataLabels: {
                  enabled: false
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 2,
                    dashArray: 0,      
                },
                grid: {
                    show: false
                },
                xaxis: {
                    labels: {
                        show: false
                    },
                    tooltip: {
                        enabled: false,
                        formatter: undefined,
                        offsetY: 0,
                        style: {},
                    },
                    axisTicks: {
                        show: false
                    }
                },
                yaxis: {
                    show: false
                },
                colors: ["#2C74B3"]
              },
        )
    }

    useEffect(() => {
        getEntity()
    }, [])



    return(
        <>
        <h5 className="p-2">Progress time:</h5>
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="pt-1 py-1">
            {
                series?(<ReactApexChart type="line" width={"100%"} class="mb-2" series={series?.series} options={option}  />):(<CircularProgress color="secondary" />)
            }
            </div>
        </div>
        </>
    )
}

export default LineChart