import { useEffect, useState } from "react"
import ReactApexChart from "react-apexcharts"

const LineChart = () => {
    const [series, setSeries] = useState<{series: any}>()
    const [option, setOption] = useState<{options: {}}>()

    const getEntity = () => {
        setSeries({ series: [{
            name: "Desktops",
            data: [10, 51, 69, 148]
        }] })
        setOption({
            options: {
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
                        style: {
                          fontSize: 0,
                          fontFamily: 0,
                        },
                    },
                },
                yaxis: {
                    show: false
                }
              },
        })
    }

    useEffect(() => {
        getEntity()
    }, [])



    return(
        <>
        <h4 className="p-2">Work time:</h4>
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="pt-1 py-3">
            {
                series?(<ReactApexChart type="line" width={"100%"} class="mb-2" series={series?.series} options={option?.options}  />):(<h1>Loading...</h1>)
            }
            </div>
        </div>
        </>
    )
}

export default LineChart