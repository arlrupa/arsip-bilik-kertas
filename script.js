document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("angkatanForm");
  const errorText = document.getElementById("error");
  const letterContent = document.getElementById("letter-content");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const angkatan = document.getElementById("angkatan").value.trim();

      if (angkatan !== "25" && angkatan !== "26") {
        errorText.textContent = "Angkatan hanya 25 atau 26!";
        return;
      }

      window.location.href = `letter.html?angkatan=${angkatan}`;
    });
  }

  if (!letterContent) return;

  const params = new URLSearchParams(window.location.search);
  const angkatan = params.get("angkatan");

  const letters = {
    "25": `
      <p>Hai kalian,</p>

      <p>
        Jujur ya, agak aneh buat bagian ini. Rasanya baru kemarin kita masih ribut di sekre, ngeluh capek,
        ketawa nggak jelas, marah-marahan tiap proker, terus tiba-tiba udah sampai di titik demis aja.
        Dua tahun kenal kalian ternyata ninggalin rasa yang nggak sedikit. <br><br>
      </p>

      <p>
        Hal-hal yang dulu kita keluhin bareng sekarang malah jadi bagian dari cerita yang bikin kangen.
        Sekre yang biasanya rame, asbun yang nggak ada ujungnya, tawa random yang muncul tanpa alasan,
        kayaknya nanti bakal kerasa sepi kalau itu semua nggak bisa kita rasain lagi. <br><br>
      </p>

      <p>
        Kenal kalian ngajarin aku banyak hal. Bukan cuma soal organisasi, tapi soal kebersamaan,
        sabar, dan bertahan bareng meskipun capek. Momen-momennya sederhana,
        tapi entah kenapa susah banget buat dilupain. <br><br>
      </p>

      <p>
        Walaupun ke depannya kita bakal jalan masing-masing dan nggak sesering dulu kumpul bareng,
        aku harap hubungan ini nggak ikut selesai. Tetap saling nyapa, saling inget,
        dan jaga diri baik-baik di tempat kita masing-masing.
        Btw, ayo melukat jir. Kita wajib jalan-jalan minimal sekali, nggak ada alasan. <br><br>
      </p> 

      <p>
        Sekali lagi terima kasih ya, sudah jadi bagian dari dua tahun yang nggak bakal terganti.
        Tolong tetap hidup dan bernafas dengan baik. Aku mau lihat kalian terus, walaupun cuma lewat sosmed.
        Semoga bahagia selalu, sayang-sayangku 🥺💕
      </p>
    `,

    "26": `
      <p>Hai adik-adik,</p>

      <p>
        Agak canggung juga nulis ini, tapi rasanya perlu. Aku memang belum lama kenal kalian, belum akrab 
        juga kayaknya, tapi senang banget bisa kenal dan sempat jalan bareng kalian di sini.
        Perjalanan kalian mungkin nggak selalu rapi, kadang capek, kadang kesel,
        kadang pengen nyerah, tapi nyatanya kalian masih bertahan dan terus jalan bareng. <br><br>
      </p>

      <p>
        Kita semua tahu, UKM Jurnalistik ini bukan cuma soal liputan, majalah,
        atau pose huruf L di depan kamera. Ini soal cara berpikir, bersikap,
        dan tumbuh bareng orang-orang yang punya keresahan yang sama.
        Jadi tolong ya, jaga baik-baik rumah ini. <br><br>
      </p>

      <p>
        Literasi itu bukan cuman gaya. Hal itu hidup dari kebiasaan membaca,
        bertanya, berdiskusi, dan mau dengerin sudut pandang orang lain.
        Jalan pelan-pelan nggak apa-apa, yang penting konsisten dan dijalanin dengan sungguh-sungguh. <br><br>
      </p>

      <p>
        Dan satu hal penting: tetap bareng-bareng.
        Jangan gampang lepas satu sama lain cuma karena capek atau beda pendapat.
        UKM ini bisa sejauh ini juga karena kebersamaan kalian. <br><br>
      </p>

      <p>
        Terima kasih sudah mau lanjut dan menjaga apa yang sudah ada.
        Jaga diri kalian baik-baik, dan ingat rumah ini milik kita bersama 🤍
      </p>
    `
  };

  letterContent.innerHTML =
    letters[angkatan] ||
    `<p>Arsip tidak ditemukan.</p><p>Silakan kembali ke beranda.</p>`;
});

// Timeline scroll reveal
const timelineItems = document.querySelectorAll(".timeline-item");

const revealTimeline = () => {
  const triggerBottom = window.innerHeight * 0.85;

  timelineItems.forEach(item => {
    const boxTop = item.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      item.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealTimeline);
revealTimeline();
