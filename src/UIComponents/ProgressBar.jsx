import PropTypes from 'prop-types';
import '../styles/progressbar.scss';

export default function ProgressBar({ value }) {
	ProgressBar.propTypes = {
		value: PropTypes.number.isRequired,
	};
	return (
		<div id='progressContainer'>
			<progress id='progress' value={value} max='100'></progress>
			<p id='progressHeader'>{value}%</p>
		</div>
	);
}
