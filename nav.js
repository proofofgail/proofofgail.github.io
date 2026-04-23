(function () {
    var toggle = document.querySelector('.nav__toggle');
    var list = document.getElementById('nav-list');
    if (!toggle || !list) return;

    toggle.addEventListener('click', function () {
        var open = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
    });

    document.addEventListener('click', function (event) {
        if (toggle.getAttribute('aria-expanded') !== 'true') return;
        if (toggle.contains(event.target) || list.contains(event.target)) return;
        toggle.setAttribute('aria-expanded', 'false');
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
            toggle.setAttribute('aria-expanded', 'false');
            toggle.focus();
        }
    });
})();
