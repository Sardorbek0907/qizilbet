// Navbar tugmalarini faollashtirish
function setActive(element) {
    // Barcha nav tugmalaridan `active` klassini olib tashlaymiz
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Tanlangan tugmaga `active` klassini qo'shamiz
    element.classList.add('active');
}
