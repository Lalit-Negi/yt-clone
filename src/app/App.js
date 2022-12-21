import React, { useState } from "react";
import "./App.css";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";
import Home from "../pages/home/home";
import { Routes, Route} from "react-router-dom";
import Search from "../pages/search/search";
import Watch from "../pages/watch/watch";

const Layout = ({ children }) => {
	const [toggleSidebar, setToggleSidebar] = useState(false);
	return (
		<>
			<Header setToggleSidebar={setToggleSidebar} />
			<div className="app-container">
				<Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>
				<div className="screen-container">{children}</div>
			</div>
		</>
	);
};

function App() {

	return (
		<>
			<Routes>

				<Route path="/" element={<Layout><Home /></Layout>}	/>		
					
				<Route path="/search/:query" element={<Layout><Search /></Layout>}/>	

				<Route path="/watch/:id" element={<Layout><Watch /></Layout>}/>

                <Route path='*' element={<Layout><Home /></Layout>}/>

			</Routes>
		</>
	);
}

export default App;
