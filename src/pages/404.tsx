import Centered from '../components/Centered';
import PrimaryHeader from '../components/PrimaryHeader';

export default function NotFoundPage() {
	return (
		<Centered>
			<PrimaryHeader>404: Not Found</PrimaryHeader>
			<p>This page wasn't found...</p>
		</Centered>
	);
}
