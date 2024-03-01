let titleElemet = document.getElementById("title");

let titleCode = `
<section>
  <div class="py-14 flex-col items-center gap-14 flex container">
    <h1 class="text-primary title">Money Transactions App & Web</h1>
    <div class="flex-col items-center gap-11 flex w-full">
        <div class="pb-14 border-b border-grey700 flex-col justify-center items-center gap-4 flex">
          <img class="w-full" src="/img/projects/jbbank/1.png">
          <img class="w-full" src="/img/projects/jbbank/2.png">
        </div>
        <div class="w-full flex justify-between">
          <div class="flex-col gap-3 flex col-2">
            <h6 class="text-grey">Demo / Prototype</h6>
            <a href="" class=" px-9 py-3 bg-grey700 rounded-3xl justify-center items-center flex text-center text-white text-sm flex-none flex-shrink-0">View Prototype</a>
            <a href="" class="px-9 py-3 bg-white rounded-3xl border border-grey700 justify-center items-center flex text-sm flex-none flex-shrink-0">Process Deck PDF</a>
          </div>
          <ul class="justify-between flex text-lg w-full col-9">
            <li class="flex-col gap-3 flex col-2">
              <h6 class="text-grey">Role</h6>
              <div class="">UX / UI</div>
              <div class="">Research</div>
              <div class="">Branding</div>
            </li>
            <li class=" flex-col gap-3 flex col-2">
                <h6 class="text-grey">Duration</h6>
                <div class="">4 Weeks</div>
            </li>
            <li class=" flex-col gap-3 flex col-2">
                <h6 class="text-grey">Teammates</h6>
                <div class=" ">SuJeong Ha</div>
            </li>
            <li class="flex-col gap-3 flex col-2">
                <h6 class="text-grey">Contribution</h6>
                <div class=" ">100%</div>
            </li>
            <li class=" flex-col gap-3 flex col-2">
                <h6 class="text-grey">Tools</h6>
                <div class="">Figma</div>
            </li>
          </ul>
        </div>
        
    </div>
  </div>
</section>
`;

titleElemet.innerHTML = titleCode;
