import * as m from "@mui/material"
import RadialChart from "../components/Home/RadialChart"
import LineChart from "../components/Home/WorkTime"
import BarChart from "../components/Home/BarChart"
import TaskTable from "../components/Home/TaskTable"
import MessageTable from "../components/Home/MessageTable"

const Home = () => {
    return(
      <>
      <div className="mt-4 d-flex flex-lg-row flex-column col-12 flex-grow-1">
        <div className="col-lg-3 col-12 pe-md-2">
          <m.Card className="h-100">
              <RadialChart />
          </m.Card>
        </div>
        <div className="col-lg-3 col-12 pe-md-2 mt-lg-0 mt-md-4 mt-4">
          <m.Card>
              <LineChart />
          </m.Card>
        </div>
        <div className="col-lg-6 mt-lg-0 mt-md-4 col-md-12 d-md-block d-none">
          <m.Card>
              <BarChart />
          </m.Card>
        </div>
      </div>
      <div className="col-12 mt-4">
        <m.Card>
          <TaskTable />
        </m.Card>
      </div>
      <div className="col-12 mt-4">
        <m.Card>
          <MessageTable />
        </m.Card>
      </div>
      </>
    )
}

export default Home