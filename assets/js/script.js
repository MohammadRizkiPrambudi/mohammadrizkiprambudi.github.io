// Initialize AOS
AOS.init({ duration: 800, once: true });

// Smooth scroll for nav links
$('a[href^="#"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: target.offset().top - 80,
        },
        1000
      );
  }
});

$(document).ready(function () {
  // Pastikan lightbox dikonfigurasi (opsional)
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    albumLabel: "Gambar %1 dari %2",
  });

  $("#btn-view-all").on("click", function () {
    const isHidden = $(".more-project").hasClass("hidden");

    if (isHidden) {
      // Tampilkan
      $(".more-project").removeClass("hidden").hide().fadeIn(600);
      $(this).html(
        'Show Less <i class="fas fa-chevron-up ml-2 group-hover:-translate-y-1 transition-transform"></i>'
      );
    } else {
      // Sembunyikan
      $(".more-project").fadeOut(400, function () {
        $(this).addClass("hidden");
      });
      $(this).html(
        'View All Projects <i class="fas fa-chevron-down ml-2 group-hover:translate-y-1 transition-transform"></i>'
      );
    }
  });
});

const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;
