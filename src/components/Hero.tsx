import React from 'react'

type HeroProps = {
	imageURL?: string,
	heading?: string
}

export default function Hero({ imageURL = "/images/hero.png", heading = "TJHSST SGA"}: HeroProps) {
	return <div className="hero relative">
		<span style={{
			display: "flex",
			fontSize: "4rem",
			fontWeight: "bold",
			textShadow: "1px 1px rgba(48, 48, 48, 0.5)",
			color: "white",
			position: "absolute",
			height: "100%",
			width: "100%",
			justifyContent: "center",
			alignItems: "center",
		}}>{ heading }</span>
		<img src={imageURL} alt="Background" style={{
			width: "100vw",
			height: "60vh",
			objectFit: "cover"
		}}></img>
	</div>
}