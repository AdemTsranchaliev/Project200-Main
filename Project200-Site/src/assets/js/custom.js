var snapSlider = document.getElementById('slider-snap');

noUiSlider.create(snapSlider, {
    start: [40, 110],
    snap: false,
    connect: true,
    step: 1,
    range: {
        'min': 40,
        'max': 110
    }
});
var snapValues = [
    document.getElementById('slider-snap-value-from'),
    document.getElementById('slider-snap-value-to')
];
var inputValues = [
    document.getElementById('slider-snap-input-from'),
    document.getElementById('slider-snap-input-to')
];
snapSlider.noUiSlider.on('update', function (values, handle) {
    snapValues[handle].innerHTML = values[handle];
    inputValues[handle].value = values[handle];
});

function injectSvgSprite(path) {
    var ajax = new XMLHttpRequest();
    ajax.open("GET", path, true);
    ajax.send();
    ajax.onload = function (e) {
        var div = document.createElement("div");
        div.className = 'd-none';
        div.innerHTML = ajax.responseText;
        document.body.insertBefore(div, document.body.childNodes[0]);
    }
}

injectSvgSprite('https://demo.bootstrapious.com/directory/1-4/icons/orion-svg-sprite.svg');

// createDetailMap({
//     mapId: 'detailMap',
//     mapCenter: [40.732346, -74.0014247],
//     markerShow: true,
//     markerPosition: [40.732346, -74.0014247],
//     markerPath: 'img/marker.svg',
// });

// createDetailMap({
//     mapId: 'add-studio-map',
//     mapCenter: [42.67510859030425, 25.877197156660262],
//     markerShow: true,
//     markerPosition: [42.2, 24.33333],
//     markerPath: 'img/marker.svg',
// });