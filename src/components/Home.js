import { useRef } from "react";
import Graph from "./Graph";
import Header from "./Header";
import StudentTable from "./StudentTable";

const Home = ()=>{
    const pdfRef = useRef();
    return (
        <div ref={pdfRef}>
           <Header pdfRef={pdfRef}/>
           <Graph/>
           <StudentTable/>
        </div>
    )
}

export default Home;