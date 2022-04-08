// import { BrowserRouter as Router } from "react-router-dom";
import List from "./day1comps/List";
import StaticCards from "./day1comps/StaticCards";
import JoinUs from "./day1comps/JoinUs";
import Settings from "./day1comps/Settings";
import Login from './day1comps/Login';
import Contact from './day1comps/Contact';
import Download from './day1comps/Download';
import Help from './day1comps/Help';
import Home from './day1comps/Home';
import Search from './day1comps/Search';
import Btn from './day1comps/Btn';
// import EmployeeDetail from './day2comps/EmployeeDetail'
// import Button from './day2comps/Button'
// import Todo from "./day2comps/Todo";


function App() {
    return (
        <>
            <StaticCards/>
            <div id="btn">
            <JoinUs/>
            <Settings/>
            <Login/>
            <Contact/>
            <Search/>
            <Help/>
            <Home/>
            <Download/>
            </div>
            <hr/>
            <hr/>
            <p>By single component</p>
            <div id="btn">
                <Btn name="JOIN US" class="JoinUs"/>
                <Btn name="SETTINGS" class="Settings"/>
                <Btn name="LOGIN" class="Login"/>
                <Btn name="CONTACT US" class="contact"/>
                <Btn name="SEARCH" class="Search"/>
                <Btn name="HELP" class="Help"/>
                <Btn name="HOME" class="Home"/>
                <Btn name="DOWNLOAD" class="Download"/>
            </div>

            {/* <div>
                <EmployeeDetail/>
                <Button/>
                <Todo/>
            </div> */}
        </>
    )
}
export default App