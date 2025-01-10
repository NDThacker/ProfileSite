import PropTypes from 'prop-types';
import '../styles/progressbar.scss';

export default function ProgressBar({ value, title}) {
	ProgressBar.propTypes = {
		value: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired
	};
	return (
		<div id='progressContainer'>
			<p>{title}</p>
			<progress id='progress' value={value} max='100'></progress>
			<p id='progressHeader'>{value}%</p>
		</div>
	);
}
