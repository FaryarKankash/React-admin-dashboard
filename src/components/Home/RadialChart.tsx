import { useEffect, useState } from "react"
import ReactApexChart from "react-apexcharts"

const RadialChart = () => {
    const [series, setSeries] = useState<{series: any}>()
    const [option, setOption] = useState<{options: {}}>()

    const getEntity = () => {
        setSeries({ series: [76] })
        setOption({
            options: {
                chart: {
                  type: 'radialBar',
                  offsetY: 0,
                  sparkline: {
                    enabled: true
                  }
                },
                plotOptions: {
                  radialBar: {
                    startAngle: -120,
                    endAngle: 120,
                    hollow: {
                        size: '55%',
                    },
                    track: {
                      background: "#fff",
                      strokeWidth: '67%',
                      
                      margin: 5, // margin is in pixels
                      dropShadow: {
                        enabled: true,
                        top: -3,
                        left: 0,
                        blur: 4,
                        opacity: 0.15
                      }
                    },
                    dataLabels: {
                        show: true,
                        name: {
                          offsetY: -2,
                          show: false,
                          color: '#888',
                          fontSize: '17px'
                        },
                        value: {
                          color: '#fff',
                          fontSize: '20px',
                          show: true,
                          offsetY: 0,
                        }
                    },
                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.24
                    },
                },
                },
                fill: {
                  type: 'gradient',
                },
                stroke: {
                    lineCap: 'round'
                },
                labels: ['Average Results'],
            }
        })
    }

    useEffect(() => {
        getEntity()
    }, [])



    return(
        <>
        <h4 className="p-2">Progress:</h4>
        <div className="d-flex flex-column justify-content-between align-items-center h-75">
            <div className="pt-1 py-2">
            {
                series?(<ReactApexChart type="radialBar" width={"60%"} class="mb-2" series={series?.series} options={option?.options}  />):(<h1>Loading...</h1>)
            }
            </div>
            <div className="border-top border-2 border-dark d-flex flex-row col-12 justify-content-around mt-5">
                <div className="col-6 border-end border-dark border-2 d-flex flex-row justify-content-center align-items-center p-3">
                    <strong>Done:</strong>
                    <p className="mx-2">7</p>
                </div>
                <div className="col-6 d-flex flex-row justify-content-center align-items-center p-3">
                    <strong>Todo:</strong>
                    <p className="mx-2">2</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default RadialChart