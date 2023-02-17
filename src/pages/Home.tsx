import * as m from "@mui/material"
import RadialChart from "../components/Home/RadialChart"
import LineChart from "../components/Home/WorkTime"

const Home = () => {
    return(
    <div className="mt-4 d-flex flex-row col-12 flex-grow-1">
        <div className="col-3 pe-2">
          <m.Card className="h-100">
              <RadialChart />
          </m.Card>
        </div>
        <div className="col-3 pe-2">
          <m.Card>
              <LineChart />
          </m.Card>
        </div>
        <div className="col-6">
          <m.Card>
              <LineChart />
          </m.Card>
        </div>
    </div>
    )
}

export default Home