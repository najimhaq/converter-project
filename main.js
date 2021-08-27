document.getElementById('output').style.visibility = 'hidden';
document.getElementById('ibsInput').addEventListener('input', function (e) {
    let lbs = e.target.value;
    document.getElementById('output').style.visibility = 'visible';
    document.getElementById('gramsOutput').innerHTML = lbs / 0.00220462;
    document.getElementById('kgOutput').innerHTML = lbs / 2.20462;
    document.getElementById('ozOutput').innerHTML = lbs / 0.0625;
    document.getElementById('tonOutput').innerHTML = lbs / 2204.62;
    document.getElementById('milGram').innerHTML = lbs / 2.2046e-6;
});