import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react"
import { Header } from "./components/Header";
import { Lesson } from "./components/Lesson";
import { Sidebar } from "./components/Sidebar";
import { Video } from "./components/video";
import { cliente } from "./lib/apollo"
import { Event } from "./pages/Event";

function App() {
  return (
    <div>
      <Event/>
    </div>
  )
}

export default App
