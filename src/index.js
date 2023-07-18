/*
 * External dependencies
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'animate.css';

import 'lite-youtube-embed/src/lite-yt-embed.css';
import 'lite-youtube-embed/src/lite-yt-embed';
/*
 * Internal dependencies
 */
import './styles/style.scss';
import animationObserver from './components/animationObserver';

document.addEventListener('DOMContentLoaded', () => {
    animationObserver();
});
