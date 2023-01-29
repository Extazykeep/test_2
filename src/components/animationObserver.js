let _config = {
    selector: '[data-animation]',
    repeatAnimation: false,
};

export default (config = {}) => {
    _config = { ..._config, ...config };
    Array.prototype.forEach.call(
        document.querySelectorAll(_config.selector),
        (observable) => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const fx = observable.dataset.animation.split(' ');
                        observable.classList.add(...fx);
                        observable.addEventListener(
                            'animationend',
                            function handler() {
                                observable.classList.remove(...fx);
                                observable.removeEventListener(
                                    'animationend',
                                    handler
                                );
                            }
                        );
                        if (!_config.repeatAnimation)
                            observer.unobserve(observable);
                    }
                });
            });
            observer.observe(observable);
        }
    );
};
