export default function GetInvolvedRow({ way }: { way: SGA.GetInvolvedWay}) {
	return (
		<div className='row'>
			<div className='get-involved-title'>
				<h3>{way.title}</h3>
			</div>
			<div className='get-involved-description'>
				<p className="get-involved-body">{way.text}</p>
			</div>
		</div>
	);
}
