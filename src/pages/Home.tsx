import * as m from "@mui/material"
import RadialChart from "../components/Home/RadialChart"
import LineChart from "../components/Home/WorkTime"
import BarChart from "../components/Home/BarChart"

const Home = () => {
    return(
      <>
      <div className="mt-4 d-flex flex-md-row flex-column col-12 flex-grow-1">
        <div className="col-md-3 col-12 pe-md-2">
          <m.Card className="h-100">
              <RadialChart />
          </m.Card>
        </div>
        <div className="col-md-3 col-12 pe-md-2 mt-md-0 mt-4">
          <m.Card>
              <LineChart />
          </m.Card>
        </div>
        <div className="col-md-6 d-md-block d-none">
          <m.Card>
              <BarChart />
          </m.Card>
        </div>
      </div>
      <div className="col-12 mt-4">
        <m.Card>
          <h1>Table</h1>
        </m.Card>
      </div>
      </>
    )
}

export default Home