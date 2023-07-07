(function () {
    CFS_bE(24, 36, 50);
    forbidDataDrafting()
    document.addEventListener('selectstart', function (e) {
        e.preventDefault();
    })
    setTimeout(function () { document.documentElement.style.overflowX = "auto"; }, 960)
}());