import React from 'react'
import "../css/navbar.css"
import { Link } from 'react-router-dom';

let pages = [
	{
		url: "/",
		title: "Home"
	},
	{
		url: "/news",
		title: "News"
	},
	{
		url: "/initiatives",
		title: "Initiatives"
	}
]

export default function Navbar() {
	return <div className="nav">
		<Link to="/">
			<img src="/images/banner.png" alt="TJ SGA" style={{
				height: "2rem",
				alignSelf: "center",
				margin: "1rem"
			}}/>
		</Link>
		{ pages.map(page => {
			return <Link key={page.url} className="nav-link" to={page.url}>
				{ page.title }
			</Link>
		}) }
	</div>
}