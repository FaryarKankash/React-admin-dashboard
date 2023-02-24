import * as React from "react";
import * as m from "@mui/material"
import { useState } from "react";
import TaskTable from "../components/Home/TaskTable";

export default function AddTask() {
  const [  ] = useState()
  return (
    <>
      <m.Card className="mt-4">
        <h5 className="px-4 py-3">Add task</h5>
          <m.FormControl className="d-flex flex-row justify-content-between p-4 flex-wrap">
              <m.TextField color="info" label="name" className="col-6 pe-1" />
              <m.TextField color="info" label="Task time" className="col-6 ps-1" />
              <m.Select color="info" label="category" className="col-6 mt-2">
                  <m.MenuItem color="info">Work</m.MenuItem>
                  <m.MenuItem color="info">Intern</m.MenuItem>
              </m.Select>
          </m.FormControl>
      </m.Card>
      <m.Card className="mt-4">
        <TaskTable />
      </m.Card>
    </>
  );
}
