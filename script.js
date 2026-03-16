(function(){
  const canvas = document.getElementById('petals');
  const emojis = ['🌸','🌷','🌺','💮','🌼','✿'];

  for(let i=0;i<18;i++){
    const p = document.createElement('span');
    p.className = 'petal';
    p.textContent = emojis[Math.floor(Math.random()*emojis.length)];

    p.style.left = Math.random()*100+'vw';
    p.style.animationDuration = (6+Math.random()*8)+'s';
    p.style.animationDelay = (Math.random()*10)+'s';
    p.style.fontSize = (12+Math.random()*14)+'px';

    canvas.appendChild(p);
  }
})();

document.getElementById('scrollTrigger')
.addEventListener('click',function(){
  document.getElementById('letterOverlay')
  .classList.add('open');
});

document.getElementById('letterClose')
.addEventListener('click',function(){
  document.getElementById('letterOverlay')
  .classList.remove('open');
});

document.getElementById('letterOverlay')
.addEventListener('click',function(e){
  if(e.target===this){
    this.classList.remove('open');
  }
});

const giftScene = document.getElementById('giftScene');
const giftModal = document.getElementById('giftModal');

giftScene.addEventListener('click',function(){

  this.classList.add('opened');
   launchConfetti(60);

  setTimeout(()=>{
    giftModal.classList.add('open');
  },550);

});

document.getElementById('giftClose')
.addEventListener('click',function(){

  giftModal.classList.remove('open');

  setTimeout(()=>{
    giftScene.classList.remove('opened');
  },300);

});

giftModal.addEventListener('click',function(e){

  if(e.target===this){

    this.classList.remove('open');

    setTimeout(()=>{
      giftScene.classList.remove('opened');
    },300);

  }

});

(function tick(){

  const target = new Date('2027-03-17T00:00:00');
  const now    = new Date();
  const diff   = target - now;

  if(diff<=0){

    document.getElementById('countdownGrid')
    .style.display='none';

    document.getElementById('cdDone')
    .style.display='block';

    return;
  }

  const days  = Math.floor(diff/86400000);
  const hours = Math.floor((diff%86400000)/3600000);
  const mins  = Math.floor((diff%3600000)/60000);
  const secs  = Math.floor((diff%60000)/1000);

  document.getElementById('cdDays').textContent  = String(days).padStart(3,'0');
  document.getElementById('cdHours').textContent = String(hours).padStart(2,'0');
  document.getElementById('cdMins').textContent  = String(mins).padStart(2,'0');
  document.getElementById('cdSecs').textContent  = String(secs).padStart(2,'0');

  setTimeout(tick,1000);

})();

const quotes = [
    "Kamu adalah puisi yang tidak bisa aku tulis dengan sempurna, tapi selalu ingin aku baca terus-menerus. 💌",
    "Kalau dunia adalah buku, maka kamu adalah bab favoritku yang selalu ingin aku baca berulang kali. 📖",
    "Senyummu adalah satu-satunya alarm yang selalu membuatku ingin bangun pagi. ☀️",
    "Kamu tahu nggak sih, gravity itu nggak ada artinya dibanding tarikan hatimu. 🌏",
    "Matamu lebih indah dari bintang mana pun yang pernah aku lihat malam ini. ✨",
    "Setiap kali kamu tertawa, dunia ini terasa lebih ringan dan lebih berwarna. 🌈",
    "Kalau aku bisa memberikan satu hal di hari ulang tahunmu, itu adalah semua kebahagiaan yang kamu beri padaku. 🎁",
    "Kamu bukan hanya hadir di hari-hariku, tapi sudah menjadi alasan hari-hari itu terasa berharga. 🌸",
    "Di antara semua bintang di langit, kamu adalah yang paling terang, bahkan di siangku. 🌟",
    "Kamu adalah satu-satunya notifikasi yang selalu ingin aku buka secepatnya. 💬",
    "Seandainya perasaan bisa jadi hadiah, maka aku ingin membungkus semua rasa sayangku untukmu. 🎀",
    "Kamu nggak perlu jadi sempurna, karena bagiku kamu sudah sempurna dengan cara kamu sendiri. 🌷",
    "Mengenalmu adalah keputusan terbaik yang pernah dibuat alam semesta untukku. 🌌",
    "Setiap detik bersamamu terasa seperti lirik dari lagu paling indah. 🎵",
    "Kalau waktu bisa diputar ulang, aku akan memilih untuk mengenalmu lebih awal. ⏳",
    "Kamu itu kayak coklat; semakin deket, semakin manis, dan aku nggak pernah mau berhenti. 🍫",
    "Bukan kopi yang bikin aku semangat pagi-pagi, tapi ingatan tentang senyummu. ☕",
    "Kalau hati ini ada pintunya, kamu sudah punya kuncinya sejak lama. 🔑",
    "Dalam gelapnya duniaku, berhasil berwarna saat ada kamu.",
    "aku selalu ada untukmu.",
    "selama ada aku. kamu akan selalu punya orang yang sanggat bangga terhadap setiap proses dan keberhasilanmu.",
    "selama aku masih hidup. kamu akan selalu punya manusia yang mencintaimu.",
    "selama aku masih di bumi. akan selalu ada orang yang mengagumimu",
    "pada sela-sela hatiku, parasmu selalu menjadi debu paling tua di dalamku.",
    "hatiku yang terbilang membeku, tak kusangka meleleh karenamu.",
    "meskipun pandanganku rabun menggelut, kamu adalah satu yang selalu jelas kulihat hadirnya.",
    "Kamu adalah CSS di HTML-ku. tanpa kamu, hidupku cuma kerangka kosong tanpa warna.",
    "lantaran aku mengenalmu, kamulah yang menjadi seperti glukosa di nadiku, yang membuatku berharap bahwa 13,8 miliar tahun semesta ini cukup untuk membuatku pantas di sampingmu",
  ];
  let lastIdx = -1;
  let spinning = false;
  const shownQuotes = new Set();
  function spinGacha() {
    if (spinning) return;
    spinning = true;
    const textEl = document.getElementById('gachaText');
    textEl.classList.add('hide');
    let count = 0;
    const total = 10;
    const interval = setInterval(() => {
      textEl.classList.remove('hide');
      const ri = Math.floor(Math.random() * quotes.length);
      textEl.textContent = quotes[ri];
      count++;
      if (count < total) {
        setTimeout(() => textEl.classList.add('hide'), 80);
      } else {
        clearInterval(interval);
        let fi;
        do { fi = Math.floor(Math.random() * quotes.length); } while (fi === lastIdx);
        lastIdx = fi;
        shownQuotes.add(fi);
        document.getElementById('quoteCount').textContent = shownQuotes.size;
        textEl.textContent = quotes[fi];
        textEl.classList.remove('hide');
        spinning = false;
        launchConfetti(28);
      }
    }, 140);
  }

  // Confetti
  const confColors = ['#e8a4b8','#f5d0dc','#c9a96e','#d4789a','#fff0a0','#a8e6cf','#ff9eb5'];
  function launchConfetti(n = 50) {
    const burst = document.getElementById('confBurst');
    for (let i = 0; i < n; i++) {
      const el = document.createElement('div');
      el.className = 'conf-piece';
      el.style.left = (20 + Math.random() * 60) + 'vw';
      el.style.top  = (20 + Math.random() * 50) + 'vh';
      el.style.background = confColors[Math.floor(Math.random() * confColors.length)];
      el.style.setProperty('--tx', (Math.random()*500 - 250) + 'px');
      el.style.setProperty('--ty', (Math.random()*350 + 80) + 'px');
      el.style.animationDelay = Math.random() * 0.4 + 's';
      el.style.width  = (6 + Math.random() * 8) + 'px';
      el.style.height = (6 + Math.random() * 8) + 'px';
      burst.appendChild(el);
      setTimeout(() => el.remove(), 2200);
    }
  }

  const spTracks = [
    { id: '6lanRgr6wXibZr8KgzXxBl',     title: 'A Thousand Years',   artist: 'Christina Perri',   cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023dea4a2ccd58ad1f8e4dbb03' },
    { id: '0tgVpDi06FyKpA1z0VMD4v',     title: 'Perfect',             artist: 'Ed Sheeran',       cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ba5db46f4b838ef6027e6f96' },
    { id: '3U4isOIWM3VvDubwSI3y7a',     title: 'All of Me',           artist: 'John Legend',      cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02bdcc3b587b5249932bc415c2' },
    { id: '34gCuhDGsG4bRPIf9bb02f',     title: 'Thinking Out Loud',   artist: 'Ed Sheeran',       cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0213b3e37318a0c247b550bccd' },
    { id: '7qiZfU4dY1lWllzX7mPBI3',     title: 'Shape of You',        artist: 'Ed Sheeran',       cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ba5db46f4b838ef6027e6f96' },
    { id: '1dGr1c8CrMLDpV6mPbImSI',     title: 'Lover',                  artist: 'Taylor Swift',  cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e787cffec20aa2a396a61647' },
    { id: '6moU77g9RQyMzHNuKEaQKq',     title: "It's You",               artist: 'Ali Gatie',     cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02035175b6195ab45090054066' },
    { id: '3JSATYGj6yxP1Vc1b49SSK',     title: 'Out of My League',        artist: 'Lany',         cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028d013d6d163279f56f54c7b5' },
    { id: '2TSndP59ZATZM7TN1LoHHK',     title: 'Lesung Pipi',            artist: 'Raim Laode',    cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c42791a2f488d136733c2429' },
  
];
  let activeSpTrack = 0;
  const spContainer = document.getElementById('spTracks');
  

  spTracks.forEach((t, i) => {
    const el = document.createElement('div');
    el.className = 'sp-track' + (i === 0 ? ' active' : '');
    el.id = 'spTrack' + i;
    el.innerHTML = `
      <span class="sp-num">${i + 1}</span>
      <img src="${t.cover}" alt="${t.title}" class="sp-cover"/>
      <div class="sp-meta">
        <div class="sp-title">${t.title}</div>
        <div class="sp-artist">${t.artist}</div>
      </div>
      <div class="sp-bars">
        <div class="sp-bar"></div><div class="sp-bar"></div><div class="sp-bar"></div>
      </div>
    `;
    el.onclick = () => selectSpTrack(i);
    spContainer.appendChild(el);
  });

  // Note untuk user
  const note = document.createElement('p');
  note.className = 'sp-note';
  note.innerHTML = '🎵 Click For More Music 🎵';

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", function(){
navLinks.classList.toggle("active");
});
  
note.onclick = () => {
  window.open('https://zaymix.vercel.app/', '_blank');
};
  spContainer.after(note);

  // ── Karaoke State ──
  let karaTimer   = null;
  let karaElapsed = 0;
  let karaRunning = false;
  let karaLines   = [];
  let karaActive  = -1;

  function loadLyrics(trackId) {
    karaLines = lyricsDB[trackId] || defaultLyrics;
    resetSync();
    renderLyrics();
  }

  function renderLyrics() {
    const scroll = document.getElementById('lyricsScroll');
    scroll.innerHTML = '';
    karaLines.forEach((line, i) => {
      const el = document.createElement('div');
      el.className = 'lyric-line' + (line.inst ? ' instrumental' : '');
      el.id = 'lyric-' + i;
      el.textContent = line.text;
      scroll.appendChild(el);
    });
    karaActive = -1;
    highlightLyric(-1);
  }

  function highlightLyric(activeIdx) {
    karaLines.forEach((_, i) => {
      const el = document.getElementById('lyric-' + i);
      if (!el) return;
      el.className = 'lyric-line' + (karaLines[i].inst ? ' instrumental' : '');
      if      (i < activeIdx)     el.classList.add('prev');
      else if (i === activeIdx)   el.classList.add('active');
      else if (i === activeIdx+1) el.classList.add('next-1');
      else if (i === activeIdx+2) el.classList.add('next-2');
    });

    // Auto-scroll to active line
    if (activeIdx >= 0) {
      const el = document.getElementById('lyric-' + activeIdx);
      if (el) {
        const panel  = document.getElementById('lyricsScroll');
        const offset = el.offsetTop - panel.clientHeight / 2 + el.clientHeight / 2;
        panel.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }
  }

  function tickKaraoke() {
    karaElapsed += 0.25;

    // ── Auto-next when track duration reached ──
    const dur = spTracks[activeSpTrack].dur;
    if (karaElapsed >= dur) {
      const nextIdx = (activeSpTrack + 1) % spTracks.length;
      autoNextTrack(nextIdx);
      return;
    }

    // Update timer display
    const m = Math.floor(karaElapsed / 60);
    const s = Math.floor(karaElapsed % 60);
    document.getElementById('syncTimer').textContent = m + ':' + String(s).padStart(2,'0');

    // Find active line
    let cur = -1;
    for (let i = 0; i < karaLines.length; i++) {
      if (karaElapsed >= karaLines[i].t) cur = i;
    }
    if (cur !== karaActive) {
      karaActive = cur;
      highlightLyric(cur);
    }
  }

  // Auto-advance ke track berikutnya tanpa stop karaoke
  function autoNextTrack(idx) {
    // Reset elapsed tapi tetap jalankan timer
    karaElapsed = 0;
    karaActive  = -1;

    // Ganti track di playlist UI + iframe
    document.getElementById('spTrack' + activeSpTrack).classList.remove('active');
    activeSpTrack = idx;
    document.getElementById('spTrack' + idx).classList.add('active');

    // Scroll playlist item ke view
    const el = document.getElementById('spTrack' + idx);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Load Spotify iframe track baru (autoplay=1 supaya langsung main)
    document.getElementById('spotifyFrame').src =
      `https://open.spotify.com/embed/track/${spTracks[idx].id}?utm_source=generator&theme=0&autoplay=1`;

    // Load lirik track baru
    karaLines  = lyricsDB[spTracks[idx].id] || defaultLyrics;
    renderLyrics();

    // Tampilkan toast notifikasi
    showNowPlaying(spTracks[idx].title, spTracks[idx].artist);
  }

  function startSync() {
    if (karaRunning) return;
    karaRunning = true;
    karaTimer = setInterval(tickKaraoke, 250);
    const btn = document.getElementById('syncStartBtn');
    btn.textContent = '⏸ Sinkronisasi Berjalan';
    btn.classList.add('running');
    btn.onclick = pauseSync;
  }

  function pauseSync() {
    karaRunning = false;
    clearInterval(karaTimer);
    const btn = document.getElementById('syncStartBtn');
    btn.textContent = '▶ Lanjutkan';
    btn.classList.remove('running');
    btn.classList.add('primary');
    btn.onclick = resumeSync;
  }

  function resumeSync() {
    karaRunning = true;
    karaTimer = setInterval(tickKaraoke, 250);
    const btn = document.getElementById('syncStartBtn');
    btn.textContent = '⏸ Sinkronisasi Berjalan';
    btn.classList.add('running');
    btn.classList.remove('primary');
    btn.onclick = pauseSync;
  }

  function resetSync() {
    clearInterval(karaTimer);
    karaRunning = false;
    karaElapsed = 0;
    karaActive  = -1;
    document.getElementById('syncTimer').textContent = '0:00';
    const btn = document.getElementById('syncStartBtn');
    btn.textContent = '▶ Mulai Sinkronisasi';
    btn.className   = 'sync-btn primary';
    btn.onclick     = startSync;
    renderLyrics();
  }

  // Toast notifikasi lagu berikutnya
  let toastTimeout = null;
  function showNowPlaying(title, artist) {
    const toast = document.getElementById('nowPlayingToast');
    document.getElementById('toastTitle').textContent  = title;
    document.getElementById('toastArtist').textContent = '· ' + artist;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 3500);
  }

  function selectSpTrack(idx) {
    document.getElementById('spTrack' + activeSpTrack).classList.remove('active');
    activeSpTrack = idx;
    document.getElementById('spTrack' + idx).classList.add('active');
    document.getElementById('spotifyFrame').src =
      `https://open.spotify.com/embed/track/${spTracks[idx].id}?utm_source=generator&theme=0`;
    loadLyrics(spTracks[idx].id);
  }

  async function handleWishSubmit(e) {
    e.preventDefault();
    const wishVal = document.getElementById('wishInput').value.trim();
    const btn = document.getElementById('wishSubmitBtn');
    btn.disabled = true;

    // Submit silently in background — no notification shown
    fetch('https://formspree.io/f/mgvlwopd', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ wish: wishVal })
    }).catch(() => {}); // silently ignore errors

    // Immediately show cake without waiting
    showCake(wishVal);
  }

  function showCake(wishVal) {
    document.getElementById('wishForm').style.display = 'none';
    const wrap = document.getElementById('cakeWrap');
    wrap.style.display = 'flex';
    wrap._wish = wishVal || null;
  }

  const candleColors = [
    { wax: '#f48fb1', base: '#e91e8c' },
    { wax: '#ce93d8', base: '#9c27b0' },
    { wax: '#80deea', base: '#00acc1' },
  ];
  const NUM_CANDLES = 3;
  const candlesRow  = document.getElementById('candlesRow');
  let blownCount = 0;

  // Build candles
  for (let i = 0; i < NUM_CANDLES; i++) {
    const c = candleColors[i % candleColors.length];
    const el = document.createElement('div');
    el.className = 'candle';
    el.id = 'candle-' + i;
    el.innerHTML = `
      <div class="candle-flame">
        <div class="flame-glow"></div>
        <div class="flame-outer"></div>
        <div class="flame-inner"></div>
      </div>
      <div class="candle-wax" style="background:${c.wax};"></div>
      <div class="candle-base" style="background:${c.base};"></div>
      <div class="smoke">
        <div class="smoke-particle" style="--sx:-4px; animation-delay:0s;"></div>
        <div class="smoke-particle" style="--sx:3px;  animation-delay:0.15s;"></div>
        <div class="smoke-particle" style="--sx:-2px; animation-delay:0.3s;"></div>
      </div>
    `;
    el.onclick = () => blowOneCandle(i);
    candlesRow.appendChild(el);
  }

  function blowOneCandle(idx) {
    const el = document.getElementById('candle-' + idx);
    if (el.classList.contains('blown')) return;
    el.classList.add('blown');
    blownCount++;
    if (blownCount >= NUM_CANDLES) onAllBlown();
  }

  function blowCandles() {
    let delay = 0;
    for (let i = 0; i < NUM_CANDLES; i++) {
      setTimeout(() => blowOneCandle(i), delay);
      delay += 120 + Math.random() * 80;
    }
  }

  function onAllBlown() {
    document.getElementById('blowBtn').disabled = true;
    document.getElementById('blowBtn').textContent = '🎂 Lilin sudah padam!';
    setTimeout(() => {
      document.getElementById('cakeWish').classList.add('show');
      document.getElementById('cakeSub').classList.add('show');
      const wishEl = document.getElementById('wishDisplay');
      const wish = document.getElementById('cakeWrap')._wish;
      if (wish) {
        wishEl.textContent = '✦ ' + wish + ' ✦';
        wishEl.classList.add('show');
      }
      launchConfetti(100);
      setTimeout(() => launchConfetti(80), 600);
    }, 500);
  }

  // ── Balloons ──
  const balloonColors = [
    '#f48fb1','#ce93d8','#80cbc4','#ffcc80',
    '#ef9a9a','#a5d6a7','#ffe082','#f8bbd9',
    '#b39ddb','#80deea',
  ];
  const balloonContainer = document.getElementById('balloonContainer');

  function spawnBalloon() {
    const el = document.createElement('div');
    el.className = 'balloon';
    const color = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    const size  = 0.75 + Math.random() * 0.5;
    const dur   = 8 + Math.random() * 8;
    const sway  = (Math.random() * 60 - 30) + 'px';
    el.style.left           = (5 + Math.random() * 90) + 'vw';
    el.style.animationDuration = dur + 's';
    el.style.animationDelay    = (Math.random() * dur) + 's';
    el.style.setProperty('--sway', sway);
    el.style.transform      = `scale(${size})`;
    el.innerHTML = `
      <div class="balloon-body" style="background:radial-gradient(circle at 35% 30%, ${color}dd, ${color}88);"></div>
      <div style="width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:8px solid ${color}88;margin-top:-1px;"></div>
      <div class="balloon-string"></div>
    `;
    balloonContainer.appendChild(el);
    setTimeout(() => el.remove(), (dur + parseFloat(el.style.animationDelay || 0) + 1) * 1000);
  }

  // Spawn balloons continuously
  for (let i = 0; i < 8; i++) spawnBalloon();
  setInterval(spawnBalloon, 1800);

  // ── Cake stars ──
  const cakeStarsEl = document.getElementById('cakeStars');
  const starEmoji = ['✨','⭐','🌟','💫','✦','✧'];
  for (let i = 0; i < 12; i++) {
    const s = document.createElement('span');
    s.className = 'cake-star';
    s.textContent = starEmoji[Math.floor(Math.random() * starEmoji.length)];
    s.style.left  = (5 + Math.random() * 90) + '%';
    s.style.top   = (5 + Math.random() * 85) + '%';
    s.style.animationDelay    = (Math.random() * 2) + 's';
    s.style.animationDuration = (1.5 + Math.random() * 1.5) + 's';
    s.style.fontSize = (0.7 + Math.random() * 0.8) + 'rem';
    cakeStarsEl.appendChild(s);
  }

  // ── Bunga / Flower Garden ──
  const FLOWERS = ['🌸','🌷','🌺','🌻','🌼','💐','🌹','🪷','🏵️','🌸','🌷','🌺'];
  const garden  = document.getElementById('bungaGarden');
  const cursor  = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.textContent = '🌸';
  document.body.appendChild(cursor);

  let flowerTotal = 0;
  let lastTrailX = -999, lastTrailY = -999;
  let inGarden = false;

  garden.addEventListener('mouseenter', () => {
    inGarden = true;
    cursor.style.display = 'block';
    const hint = document.getElementById('bungaHint');
    if (hint) hint.style.opacity = '0';
  });
  garden.addEventListener('mouseleave', () => {
    inGarden = false;
    cursor.style.display = 'none';
  });

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';

    if (!inGarden) return;

    // Trail: spawn flower emoji every 30px
    const dx = e.clientX - lastTrailX;
    const dy = e.clientY - lastTrailY;
    if (Math.sqrt(dx*dx + dy*dy) < 30) return;
    lastTrailX = e.clientX;
    lastTrailY = e.clientY;

    spawnTrailFlower(e.clientX, e.clientY);
  });

  function spawnTrailFlower(cx, cy) {
    // Trail particle (fixed, follows cursor globally)
    const trail = document.createElement('div');
    trail.className = 'flower-trail';
    trail.textContent = FLOWERS[Math.floor(Math.random() * FLOWERS.length)];
    trail.style.left = cx + 'px';
    trail.style.top  = cy + 'px';
    trail.style.fontSize = (0.8 + Math.random() * 0.7) + 'rem';
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 1300);

    // Also plant a small flower in the garden at cursor-relative position
    const rect = garden.getBoundingClientRect();
    const gx = cx - rect.left;
    const gy = cy - rect.top;
    if (gx < 0 || gy < 0 || gx > rect.width || gy > rect.height) return;

    const planted = document.createElement('div');
    planted.className = 'planted-flower';
    planted.textContent = FLOWERS[Math.floor(Math.random() * FLOWERS.length)];
    planted.style.left = gx + 'px';
    planted.style.top  = gy + 'px';
    planted.style.fontSize = (0.9 + Math.random() * 0.8) + 'rem';
    garden.appendChild(planted);
    flowerTotal++;
    document.getElementById('flowerCount').textContent = flowerTotal + ' bunga ditanam 🌸';

    // Cursor cycles through flowers
    cursor.textContent = FLOWERS[flowerTotal % FLOWERS.length];
  }

  // Touch support for mobile
  garden.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const t = e.touches[0];
    const dx = t.clientX - lastTrailX;
    const dy = t.clientY - lastTrailY;
    if (Math.sqrt(dx*dx + dy*dy) < 28) return;
    lastTrailX = t.clientX;
    lastTrailY = t.clientY;
    spawnTrailFlower(t.clientX, t.clientY);
  }, { passive: false });

  function resetGarden(){
  const planted = garden.querySelectorAll('.planted-flower');
  const trails  = document.querySelectorAll('.flower-trail');

  planted.forEach(f => f.remove());
  trails.forEach(t => t.remove());

  flowerTotal = 0;
  lastTrailX = -999;
  lastTrailY = -999;

  document.getElementById('flowerCount').textContent = '0 bunga ditanam 🌸';

  cursor.textContent = '🌸';
}