var scrollArea = document.querySelector('.right-cols-wrapper .tbody-wrapper');
scrollArea.addEventListener('scroll', handleScroll);

function handleScroll(e) {
    var x =  e.target.scrollLeft;
    var y = e.target.scrollTop;

    var fixedColumns = document.querySelector('#fixed-cols');
    fixedColumns.style.top = -y + 'px';
    
    var fixedRows = document.querySelector('#fixed-rows');
    fixedRows.style.left = -x + 'px';

    console.log(fixedColumns.style.top + ', ' + fixedRows.style.left);
}