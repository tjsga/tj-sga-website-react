import { Link } from 'react-router-dom';
import '../css/segment.css';

export default function InfoColumn({ title, content, imageURL, infoURL }) {
	return (
		<div className='segment'>
			<h3>{title}</h3>
			<img src={imageURL} alt={title} />
			<p className='segment-body'>{content}</p>
			<Link to={infoURL} className='segment-button'>
				MORE INFO
			</Link>
		</div>
	);
}
