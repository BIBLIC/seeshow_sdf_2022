goToMainPage.addEventListener("click", function () {
    // DESKTOP
    indexNav.classList.toggle(HIDDEN_CLASSNAME);
    MainNav.classList.toggle(HIDDEN_CLASSNAME);

    // MOBILE
    indexNav.classList.toggle(HIDDEN_MOBILE_CLASSNAME);
    MainNav.classList.toggle(HIDDEN_MOBILE_CLASSNAME);
    mainDesc.classList.toggle(HIDDEN_MOBILE_CLASSNAME);
});

goToIndexPage.addEventListener("click", function () {
    indexNav.classList.toggle(HIDDEN_CLASSNAME);
    MainNav.classList.toggle(HIDDEN_CLASSNAME);
});

mobileGoToIndexPage.addEventListener("click", function () {
    indexNav.classList.toggle(HIDDEN_CLASSNAME);
    MainNav.classList.toggle(HIDDEN_CLASSNAME);

    indexNav.classList.toggle(HIDDEN_MOBILE_CLASSNAME);
    MainNav.classList.toggle(HIDDEN_MOBILE_CLASSNAME);
    mainDesc.classList.toggle(HIDDEN_MOBILE_CLASSNAME);
});
