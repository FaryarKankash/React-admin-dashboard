import { useEffect, useState } from "react"
import ReactApexChart from "react-apexcharts"
import { ApexOptions } from "apexcharts";
import { CircularProgress } from "@mui/material";

const BarChart = () => {
    const [series, setSeries] = useState<ApexOptions>()
    const [option, setOption] = useState<ApexOptions>()

    const getEntity = () => {
        setSeries({ series: [{
            data: [400, 430, 500, 400, 1100, 1200, 1380]
        }] })
        setOption({
            chart: {
                type: 'bar',
                height: 350
              },
              plotOptions: {
                bar: {
                    borderRadius: 4,
                  }
              },
              grid: {
                show: false
              },
              dataLabels: {
                enabled: false
              },
              xaxis: {
                categories: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
                axisBorder: {
                    show: false
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#fff"
                    }
                },
                axisTicks: {
                    show: false
                }
              },
              yaxis: {
                show: false
              },
              colors:["#E96479"]
            },
        )
    }

    useEffect(() => {
        getEntity()
    }, [])



    return(
        <>
        <h5 className="p-2">Week summary:</h5>
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="pt-1 py-1">
            {
                series?(<ReactApexChart type="bar" width={"230%"} height={185} class="mb-2" series={series?.series} options={option}  />):(<CircularProgress color="secondary" />)
            }
            </div>
        </div>
        </>
    )
}

export default BarChart