var color = document.getElementById('color');
var change = document.getElementById('change');
// Handler function, to provide to addEventListener
var handler = function (e) {
    change.style.background = this.value;
}
color.addEventListener('input', handler);
