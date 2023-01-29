/*
 * External dependencies
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'animate.css';

/*
 * Internal dependencies
 */
import './styles/style.scss';
import animationObserver from './components/animationObserver';

document.addEventListener('DOMContentLoaded', () => {
    animationObserver();
});
