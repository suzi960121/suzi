let footerElemet = document.getElementById("footer");

let footerCode = `
<footer class="py-24 bg-grey700 flex-col items-center text-grey0">
  <div class="py-1.5 justify-between items-end flex container text-sm">
    <div class="flex-col gap-7 flex">
      <a href=""><img src="/img/logoWhite.svg" class="max-w-[150px]"></a>
      <p class="flex-col gap-4 flex">
        <span>suzi960121@gmail.com</span>
        <span>This website is best viewed on desktop</span>
        <span>Made by © 2024 Sujeong Ha</span>
      </p>
    </div>
    <address class="justify-end items-end flex">
      <a href="" class="w-32 h-6 text-grey0">Email</a>
      <a href="" class="w-32 h-6 text-grey0">Behance</a>
      <a href="" class="w-32 h-6 text-grey0">Dribbble</a>
      <a href="" class="w-32 h-6 text-grey0">LinkedIn</a>
    </address>
  </div>
</footer>
`;

footerElemet.innerHTML = footerCode;
