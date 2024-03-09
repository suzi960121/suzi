let headerElemet = document.getElementById("header");

let headerCode = `<header id="header_fixed" class="fixed top-0 z-[999] w-full px-24 pt-20 pb-4">
    <nav class="h-full justify-between items-center flex">
      <a href="/" class="pr-1 gap-2.5 flex"><img src="/img/logo.svg"></a>
      <ul class="gap-8 flex text-center text-lg font-normal uppercase h-full">
        <li class="">
          <a class="button block animate-link min-w-[100px] h-full">
            <span class="hidden">Home</span>
            <span class="animate-link-tr">
              <span>Home</span>
              <span>Home</span>
            </span>
            <span class="hover"></span>
          </a>
        </li>
        <li class="">
          <a class="button block animate-link min-w-[100px] h-full">
            <span class="hidden">Play</span>
            <span class="animate-link-tr">
              <span>Play</span>
              <span>Play</span>
            </span>
            <span class="hover"></span>
          </a>
        </li>
        <li class="">
          <a class="button block animate-link min-w-[100px] h-full">
            <span class="hidden">About</span>
            <span class="animate-link-tr">
              <span>About</span>
              <span>About</span>
            </span>
            <span class="hover"></span>
          </a>
        </li>
        <li class="">
          <a class="button block animate-link min-w-[100px] h-full">
            <span class="hidden">Resume</span>
            <span class="animate-link-tr">
              <span>Resume</span>
              <span>Resume</span>
            </span>
            <span class="hover"></span>
          </a>
        </li>
      </ul>
    </nav>
  </header>`;

headerElemet.innerHTML = headerCode;
