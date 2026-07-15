/* Springboard — shared footer + behaviours (nav, drawer, reveal) */
(function(){
  var host=document.getElementById('footerHost');
  if(host){
    host.innerHTML =
      '<footer class="foot" id="contact"><div class="wrap"><div class="foot-grid">' +
        '<div>' +
          '<div class="fbrand"><img src="images/logo.png" alt="Springboard College crest"/><b>Springboard</b></div>' +
          '<p>A private Senior High and WASSCE Remedial school at Madina, Accra — building futures through quality education.</p>' +
          '<div class="foot-soc">' +
            '<a href="https://www.facebook.com/225669790780973/" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z"/></svg></a>' +
            '<a href="https://wa.me/233263950101" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 6.3A8.9 8.9 0 0012 4a8.9 8.9 0 00-7.7 13.4L3 21l3.7-1.3A8.9 8.9 0 0012 20.9 8.9 8.9 0 0017.6 6.3zM12 19.4a7.4 7.4 0 01-3.8-1l-.3-.2-2.2.8.7-2.2-.2-.3a7.4 7.4 0 1113.7-3.9A7.4 7.4 0 0112 19.4z"/></svg></a>' +
            '<a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.16 15.58 2.16 15.2 2.16 12s0-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.27 8.42 2.21 8.8 2.2 12 2.2m0 3.4a6.4 6.4 0 100 12.8 6.4 6.4 0 000-12.8m0 2.25a4.15 4.15 0 110 8.3 4.15 4.15 0 010-8.3m6.4-1.6a1.5 1.5 0 100 3 1.5 1.5 0 000-3"/></svg></a>' +
            '<a href="#" aria-label="TikTok"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 2h-3.2v14.3a3.3 3.3 0 11-3.3-3.3c.2 0 .5 0 .7.06v-3.2a6.5 6.5 0 106.5 6.44V8.6a8.4 8.4 0 004.7 1.4V6.8a5.6 5.6 0 01-5.4-4.8z"/></svg></a>' +
          '</div>' +
        '</div>' +
        '<div><h4>Programs</h4><ul><li><a href="programs.html">Senior High (Forms 1–3)</a></li><li><a href="programs.html">WASSCE Remedial</a></li><li><a href="programs.html">SAT &amp; GRE Prep</a></li><li><a href="programs.html">IELTS &amp; TOEFL</a></li></ul></div>' +
        '<div><h4>Admissions</h4><ul><li><a href="admissions.html">How to Apply</a></li><li><a href="admissions.html">Entry Requirements</a></li><li><a href="admissions.html">Fees</a></li><li><a href="admissions.html">Term Dates</a></li></ul></div>' +
        '<div><h4>Contact Us</h4><ul class="fcontact">' +
          '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg><span><a href="https://www.google.com/maps/search/?api=1&query=MRPG%2BWXM%20Madina%20Ghana" target="_blank" rel="noopener">MRPG+WXM, Madina,<br/>Accra, Ghana</a></span></li>' +
          '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0122 16.9z"/></svg><span>+233 26 395 0101<br/>024 947 7487</span></li>' +
        '</ul></div>' +
      '</div></div>' +
      '<div class="foot-bottom"><p>© ' + new Date().getFullYear() + ' Springboard College. All rights reserved.</p>' +
        '<p>Powered by <a href="https://forgetechne.com" target="_blank" rel="noopener" style="color:#C9A227">Forge Technologies</a></p>' +
        '<div class="fb-links"><a href="index.html">Home</a><a href="programs.html">Programs</a><a href="admissions.html">Admissions</a></div></div>' +
      '</footer>';
  }
  var nav=document.getElementById('nav');
  if(nav) addEventListener('scroll',function(){nav.classList.toggle('scrolled',scrollY>8)},{passive:true});
  var burger=document.getElementById('burger'), drawer=document.getElementById('drawer');
  if(burger&&drawer){
    burger.addEventListener('click',function(e){e.stopPropagation();drawer.classList.toggle('open')});
    drawer.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){drawer.classList.remove('open')})});
    document.addEventListener('click',function(e){if(!drawer.contains(e.target)&&!burger.contains(e.target))drawer.classList.remove('open')});
  }
  var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('is-visible');io.unobserve(en.target)}})},{threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
})();
