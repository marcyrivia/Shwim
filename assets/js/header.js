document.getElementById('input').addEventListener('focus', function() {
    document.querySelector('.fa-search').style.color = '#86E8DF';
});

document.getElementById('input').addEventListener('blur', function() {
    document.querySelector('.fa-search').style.color = '';
});
