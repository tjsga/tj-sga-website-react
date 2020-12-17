export default function GetInvolvedRow({ way }: { way: SGA.GetInvolvedWay }) {
	return (
		<div className='d-flex text-left my-4'>
			<div className='get-involved-title'>
				<h3>{way.title}</h3>
			</div>
			<div className='get-involved-description'>
				<p className='get-involved-body'>{way.text}</p>
			</div>
		</div>
	);
}
