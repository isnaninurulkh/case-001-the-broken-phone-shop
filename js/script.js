// 1. buat variabel menu hamburgernya
// cari elemen html yg punya class .menu-toggle, lalu simpan kedalam variabel menuToggle
// menuToggle itu mewakili tombol hamburgernya
const menuToggle = document.querySelector(".menu-toggle");
// . itu class # itu id
const navLinks = document.querySelector("#navLinks");

// 2. klik hamburger -> addEventListener menangkap -> jalankan kode didalam {}
// menuToggle dengarkan event click lalu lakukan sesuatu
menuToggle.addEventListener("click", () => {
    // class yg dimiliki elemen navLinks alias nav-links akan menambah class active bila diclick 
    // kalo active belum ada tambahkan kalo active sudah ada hapus nahh ini yg disebut toggle alias kayak saklar lampu off-on-off-on-off
    // jadi kalo diklik class cssnya jadi .nav-links.active
    navLinks.classList.toggle("active");
    // class menu-toggle jadi active juga alias garisnya akan saling berubah kalo diklick
    // cssnya .menu-toggle.active spanchild
    menuToggle.classList.toggle("active");
});
