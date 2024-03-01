let parentElemet = document.getElementById('root');

let htmlCode = `
<header class="">
    <nav class="w-full h-20 px-24 py-6 border-b border-neutral-900 border-opacity-50 justify-between items-center inline-flex">
      <a class="pr-1   gap-2.5 flex">
        <div class="text-center text-neutral-900 text-lg font-bold  uppercase leading-7">su jeong ha</div>
      </a>
      <ul class="  gap-8 flex">
        <li class="text-center text-neutral-900 text-lg font-bold  underline uppercase leading-7">Design</li>
        <li class="text-center text-neutral-900 text-lg font-normal  uppercase leading-7">Play</li>
        <li class="text-center text-neutral-900 text-lg font-normal  uppercase leading-7">About</li>
        <li class="text-center text-neutral-900 text-lg font-normal  uppercase leading-7">resume</li>
      </ul>
    </nav>
  </header>
  <section class="container flex self-stretch py-16  items-center gap-8">
    <div class="flex-col   gap-4 inline-flex">
      <div class="flex-col   flex">
        <div class="text-neutral-900 text-4xl font-bold leading-10">Hi, I'm Sujeong Ha!, a <span class="text-orange-300 text-4xl font-bold  leading-10">UXUI designer</span>
        <span class=" font-bold  leading-10">with</span><span class="text-4xl font-normal  leading-10">interfaces, experiences, and visuals.</span>
        </div>
      </div>
      <div class="justify-end items-center inline-flex">
        <div>
          <span class="text-stone-400 font-normal  leading-loose">Previously worked with </span>
          <span class="text-neutral-900 text-2xl font-normal  leading-loose">Code Design Lab↗ Npas↗</span>
          <span class="">Graduated from</span>
          <span class="text-neutral-900 text-2xl font-normal  leading-loose">DKU↗</span>
        </div>
      </div>
    </div>
    <div class="w-full  px-24 justify-center items-center flex"></div>
  </section>
  <section class="w-full py-6 bg-white rounded-tl-3xl rounded-tr-3xl flex-col  gap-2.5 inline-flex">
    <div class="container w-full justify-between items-center flex ">
        <div class="flex-col  gap-3.5 inline-flex">
            <div class="text-red-500 text-4xl font-bold  leading-10">Featured projects</div>
            <div class="w-full text-stone-500 text-base font-normal  leading-snug">I've been working as a designer for the last 3 years across user experience, <br/>interaction design, and web design on monetization, design systems, internal tools, 0-1 initiatives, and AI-powered products, prioritizing usability and scalability. My strength lies in visual and product design, and I often take on a dual design and product <br/>management role. Outside of “work-work," I love designing side projects, some of <br/>which are shown here.</div>
        </div>
        <div class="w-32 flex-col  items-end gap-2.5 inline-flex">
            <div class="px-3 py-2 bg-sky-100 rounded-full justify-end  gap-2 inline-flex">
                <div class="w-4 h-4 relative bg-cyan-800 rounded-full"></div>
                <div class="text-cyan-800 text-sm font-bold  leading-none">Work</div>
            </div>
            <div class="px-3 py-2 bg-rose-200 rounded-full justify-end  gap-2 inline-flex">
                <div class="w-4 h-4 relative bg-orange-900 rounded-full"></div>
                <div class="text-orange-900 text-sm font-bold  leading-none">Side project</div>
            </div>
        </div>
    </div>
  </section>

  <!-- Featured projects -->
  <section class="w-full pt-7 pb-14 flex flex-col gap-14">
    <ul class="flex flex-col gap-14">
      <li class="container flex-col gap-7 flex">
        <div class="w-full rounded-2xl justify-center items-center inline-flex"><img class="w-full" src="img/jbbank.png" /></div>
        <div class="w-full flex-col  gap-4 flex">
            <div class="px-3 py-2 bg-sky-100 rounded-full justify-end  gap-2 inline-flex">
                <div class="w-4 h-4 relative bg-cyan-800 rounded-full"></div>
                <div class="text-cyan-800 text-sm font-bold font-['Space Grotesk'] leading-none">Work</div>
            </div>
            <div class="h-20 flex-col justify-center  gap-1 flex">
                <div class="text-neutral-900 text-2xl font-bold font-['Space Grotesk'] leading-9">Money Transactions App & Web</div>
                <div class="self-stretch h-11 pr-2 pb-0.5  items-center inline-flex">
                    <div class="w-full h-11 text-stone-500 text-base font-normal font-['Space Grotesk'] leading-snug">During my time at a web agency, I created JB BANK, a dynamic money transfer app and web platform catering to modern users' evolving needs.</div>
                </div>
            </div>
        </div>
      </li>
      <!-- 1 -->
      <li class="container gap-14 flex">
        <div class="flex-col  gap-7 inline-flex">
            <div class="h-72 bg-stone-700 rounded-2xl justify-end items-center inline-flex"><img class="w-full" src="/img/cng.png"></div>
            <div class="flex-col  gap-4 flex">
                <div class="px-3 py-2 bg-sky-100 rounded-full justify-end  gap-2 inline-flex">
                    <div class="w-4 h-4 relative bg-cyan-800 rounded-full"></div>
                    <div class="text-cyan-800 text-sm font-bold font-['Space Grotesk'] leading-none">Work</div>
                </div>
                <div class="flex-col  gap-1 flex">
                    <div class="text-neutral-900 text-2xl font-bold font-['Space Grotesk'] leading-9">Jewelry Trading Platform App</div>
                    <div class=" text-stone-500 text-base font-normal font-['Space Grotesk'] leading-snug">I participated as an early member in designing and planning for the launch of a luxury jewelry trading platform service, contributing to essential screen designs like registration, detail, home, and login pages.</div>
                </div>
            </div>
        </div>
        <!-- 2 -->
        <div class="flex-col  gap-7 inline-flex">
            <div class=" h-72 px-5 bg-zinc-800 rounded-2xl justify-center items-center inline-flex"></div>
            <div class="self-stretch h-44 flex-col justify-center  gap-4 flex">
                <div class="px-3 py-2 bg-sky-100 rounded-full justify-end  gap-2 inline-flex">
                    <div class="w-4 h-4 relative bg-cyan-800 rounded-full"></div>
                    <div class="text-cyan-800 text-sm font-bold font-['Space Grotesk'] leading-none">Work</div>
                </div>
                <div class="self-stretch h-32 flex-col justify-center  gap-1 flex">
                    <div class="text-neutral-900 text-2xl font-bold font-['Space Grotesk'] leading-9">Rent Service Responsive Website</div>
                    <div class="self-stretch text-stone-500 text-base font-normal font-['Space Grotesk'] leading-snug">I redesigned a responsive website that accurately assigns selling prices for introducing a service platform linking online and offline channels for easy rental and use of Amroll boxes, essential for waste disposal.</div>
                </div>
            </div>
        </div>
        <!-- 3 -->
      </li>
      <!-- 2,3 -->
      <li class="container gap-14 flex">
        <div class="flex-col  gap-7 inline-flex">
            <div class="h-72 bg-stone-700 rounded-2xl justify-end items-center inline-flex"><img class="w-full" src="/img/cng.png"></div>
            <div class="flex-col  gap-4 flex">
                <div class="px-3 py-2 bg-sky-100 rounded-full justify-end  gap-2 inline-flex">
                    <div class="w-4 h-4 relative bg-cyan-800 rounded-full"></div>
                    <div class="text-cyan-800 text-sm font-bold font-['Space Grotesk'] leading-none">Work</div>
                </div>
                <div class="flex-col  gap-1 flex">
                    <div class="text-neutral-900 text-2xl font-bold font-['Space Grotesk'] leading-9">Jewelry Trading Platform App</div>
                    <div class=" text-stone-500 text-base font-normal font-['Space Grotesk'] leading-snug">I participated as an early member in designing and planning for the launch of a luxury jewelry trading platform service, contributing to essential screen designs like registration, detail, home, and login pages.</div>
                </div>
            </div>
        </div>
        <!-- 2 -->
        <div class="flex-col  gap-7 inline-flex">
            <div class=" h-72 px-5 bg-zinc-800 rounded-2xl justify-center items-center inline-flex"></div>
            <div class="self-stretch h-44 flex-col justify-center  gap-4 flex">
                <div class="px-3 py-2 bg-sky-100 rounded-full justify-end  gap-2 inline-flex">
                    <div class="w-4 h-4 relative bg-cyan-800 rounded-full"></div>
                    <div class="text-cyan-800 text-sm font-bold font-['Space Grotesk'] leading-none">Work</div>
                </div>
                <div class="self-stretch h-32 flex-col justify-center  gap-1 flex">
                    <div class="text-neutral-900 text-2xl font-bold font-['Space Grotesk'] leading-9">Rent Service Responsive Website</div>
                    <div class="self-stretch text-stone-500 text-base font-normal font-['Space Grotesk'] leading-snug">I redesigned a responsive website that accurately assigns selling prices for introducing a service platform linking online and offline channels for easy rental and use of Amroll boxes, essential for waste disposal.</div>
                </div>
            </div>
        </div>
        <!-- 3 -->
      </li>
      <!-- 4,5 -->
    </ul>
    <ul class="flex flex-col gap-14">
      <li class="container flex-col gap-7 flex">
        <div class="w-full rounded-2xl justify-center items-center inline-flex"><img class="w-full" src="img/jbbank.png" /></div>
        <div class="w-full flex-col  gap-4 flex">
            <div class="px-3 py-2 bg-sky-100 rounded-full justify-end  gap-2 inline-flex">
                <div class="w-4 h-4 relative bg-cyan-800 rounded-full"></div>
                <div class="text-cyan-800 text-sm font-bold font-['Space Grotesk'] leading-none">Work</div>
            </div>
            <div class="h-20 flex-col justify-center  gap-1 flex">
                <div class="text-neutral-900 text-2xl font-bold font-['Space Grotesk'] leading-9">Money Transactions App & Web</div>
                <div class="self-stretch h-11 pr-2 pb-0.5  items-center inline-flex">
                    <div class="w-full h-11 text-stone-500 text-base font-normal font-['Space Grotesk'] leading-snug">During my time at a web agency, I created JB BANK, a dynamic money transfer app and web platform catering to modern users' evolving needs.</div>
                </div>
            </div>
        </div>
      </li>
      <!-- 1 -->
      <li class="container gap-14 flex">
        <div class="flex-col  gap-7 inline-flex">
            <div class="h-72 bg-stone-700 rounded-2xl justify-end items-center inline-flex"><img class="w-full" src="/img/cng.png"></div>
            <div class="flex-col  gap-4 flex">
                <div class="px-3 py-2 bg-sky-100 rounded-full justify-end  gap-2 inline-flex">
                    <div class="w-4 h-4 relative bg-cyan-800 rounded-full"></div>
                    <div class="text-cyan-800 text-sm font-bold font-['Space Grotesk'] leading-none">Work</div>
                </div>
                <div class="flex-col  gap-1 flex">
                    <div class="text-neutral-900 text-2xl font-bold font-['Space Grotesk'] leading-9">Jewelry Trading Platform App</div>
                    <div class=" text-stone-500 text-base font-normal font-['Space Grotesk'] leading-snug">I participated as an early member in designing and planning for the launch of a luxury jewelry trading platform service, contributing to essential screen designs like registration, detail, home, and login pages.</div>
                </div>
            </div>
        </div>
        <!-- 2 -->
        <div class="flex-col  gap-7 inline-flex">
            <div class=" h-72 px-5 bg-zinc-800 rounded-2xl justify-center items-center inline-flex"></div>
            <div class="self-stretch h-44 flex-col justify-center  gap-4 flex">
                <div class="px-3 py-2 bg-sky-100 rounded-full justify-end  gap-2 inline-flex">
                    <div class="w-4 h-4 relative bg-cyan-800 rounded-full"></div>
                    <div class="text-cyan-800 text-sm font-bold font-['Space Grotesk'] leading-none">Work</div>
                </div>
                <div class="self-stretch h-32 flex-col justify-center  gap-1 flex">
                    <div class="text-neutral-900 text-2xl font-bold font-['Space Grotesk'] leading-9">Rent Service Responsive Website</div>
                    <div class="self-stretch text-stone-500 text-base font-normal font-['Space Grotesk'] leading-snug">I redesigned a responsive website that accurately assigns selling prices for introducing a service platform linking online and offline channels for easy rental and use of Amroll boxes, essential for waste disposal.</div>
                </div>
            </div>
        </div>
        <!-- 3 -->
      </li>
      <!-- 2,3 -->
      <li class="container gap-14 flex">
        <div class="flex-col  gap-7 inline-flex">
            <div class="h-72 bg-stone-700 rounded-2xl justify-end items-center inline-flex"><img class="w-full" src="/img/cng.png"></div>
            <div class="flex-col  gap-4 flex">
                <div class="px-3 py-2 bg-sky-100 rounded-full justify-end  gap-2 inline-flex">
                    <div class="w-4 h-4 relative bg-cyan-800 rounded-full"></div>
                    <div class="text-cyan-800 text-sm font-bold font-['Space Grotesk'] leading-none">Work</div>
                </div>
                <div class="flex-col  gap-1 flex">
                    <div class="text-neutral-900 text-2xl font-bold font-['Space Grotesk'] leading-9">Jewelry Trading Platform App</div>
                    <div class=" text-stone-500 text-base font-normal font-['Space Grotesk'] leading-snug">I participated as an early member in designing and planning for the launch of a luxury jewelry trading platform service, contributing to essential screen designs like registration, detail, home, and login pages.</div>
                </div>
            </div>
        </div>
        <!-- 2 -->
        <div class="flex-col  gap-7 inline-flex">
            <div class=" h-72 px-5 bg-zinc-800 rounded-2xl justify-center items-center inline-flex"></div>
            <div class="self-stretch h-44 flex-col justify-center  gap-4 flex">
                <div class="px-3 py-2 bg-sky-100 rounded-full justify-end  gap-2 inline-flex">
                    <div class="w-4 h-4 relative bg-cyan-800 rounded-full"></div>
                    <div class="text-cyan-800 text-sm font-bold font-['Space Grotesk'] leading-none">Work</div>
                </div>
                <div class="self-stretch h-32 flex-col justify-center  gap-1 flex">
                    <div class="text-neutral-900 text-2xl font-bold font-['Space Grotesk'] leading-9">Rent Service Responsive Website</div>
                    <div class="self-stretch text-stone-500 text-base font-normal font-['Space Grotesk'] leading-snug">I redesigned a responsive website that accurately assigns selling prices for introducing a service platform linking online and offline channels for easy rental and use of Amroll boxes, essential for waste disposal.</div>
                </div>
            </div>
        </div>
        <!-- 3 -->
      </li>
      <!-- 4,5 -->
    </ul>
  </section>

  <section>
    <div class="gap-14 flex container">
      <div class="grow shrink basis-0 flex-col gap-6 inline-flex">
          <div class="h-20 pb-px flex-col justify-center  gap-1.5 flex">
              <div class="text-red-500 text-4xl font-bold font-['Space Grotesk'] leading-10">Play</div>
              <div class="self-stretch h-5 pr-36 pb-px  items-center inline-flex">
                  <div class="w-80 h-5 text-stone-500 text-base font-normal font-['Space Grotesk'] leading-snug">Side projects or Other works.</div>
              </div>
          </div>
          <div class=" flex-col gap-6 flex">
              <div class="justify-center  gap-5 flex">
                  <img class="w-20 h-20 relative rounded-xl" src="https://via.placeholder.com/80x80" />
                  <div class=" self-stretch flex-col justify-center  gap-1 inline-flex">
                      <div class="text-neutral-900 text-lg font-normal font-['Space Grotesk'] leading-9">UX Global partner</div>
                      <div class="self-stretch h-11 pr-5 pb-0.5  items-center inline-flex">
                          <div class="w-80 h-11 text-stone-500 text-base font-normal font-['Space Grotesk'] leading-snug">A platform where creatives earn money <br/>through mentoring others via async videos.</div>
                      </div>
                  </div>
              </div>
              <div class="justify-center  gap-5 flex">
                  <div class="w-20 h-20 rounded-xl border border-zinc-300 justify-center items-center inline-flex">
                      <img class="w-20 h-20 border border-zinc-300" src="https://via.placeholder.com/80x80" />
                  </div>
                  <div class=" self-stretch flex-col justify-center  gap-1 inline-flex">
                      <div class="text-neutral-900 text-lg font-normal font-['Space Grotesk'] leading-9">Dongducheon Energy Cooperative</div>
                      <div class="self-stretch h-11 pr-3 pb-0.5  items-center inline-flex">
                          <div class="w-80 h-11 text-stone-500 text-base font-normal font-['Space Grotesk'] leading-snug">A collection of 999 mushroom-themed NFTs, <br/>with the goal of onboarding artists to web3.</div>
                      </div>
                  </div>
              </div>
              <div class="justify-center  gap-5 flex">
                  <div class="w-20 h-20 rounded-xl border border-zinc-300 justify-center items-center inline-flex">
                      <img class="w-20 h-20 border border-zinc-300" src="https://via.placeholder.com/80x81" />
                  </div>
                  <div class=" self-stretch flex-col justify-center  gap-1 inline-flex">
                      <div class="w-32 h-9 text-neutral-900 text-lg font-normal font-['Space Grotesk'] leading-9">Npas One Q</div>
                      <div class="self-stretch h-11 pr-3 pb-0.5  items-center inline-flex">
                          <div class="w-80 h-11 text-stone-500 text-base font-normal font-['Space Grotesk'] leading-snug">A no-code tool that helps creators generate <br/>NFT collections for Solana or Ethereum.</div>
                      </div>
                  </div>
              </div>
              <div class="justify-center  gap-5 flex">
                  <div class="w-20 h-20 py-1.5 bg-yellow-50 rounded-xl justify-center items-center inline-flex">
                      <img class="w-20 h-16" src="https://via.placeholder.com/80x66" />
                  </div>
                  <div class=" self-stretch flex-col justify-center  gap-1 inline-flex">
                      <div class="w-24 h-9 text-neutral-900 text-lg font-normal font-['Space Grotesk'] leading-9">Comma</div>
                      <div class="self-stretch h-11 pr-7 pb-0.5  items-center inline-flex">
                          <div class="w-80 h-11 text-stone-500 text-base font-normal font-['Space Grotesk'] leading-snug">A pixel art NFT marketplace that lets you <br/>draw, mint, and sell your NFTs in one place.</div>
                      </div>
                  </div>
              </div>
              <div class="justify-center  gap-5 flex">
                  <div class="w-20 h-20 rounded-xl justify-center items-center inline-flex">
                      <img class="w-20 h-28" src="https://via.placeholder.com/80x111" />
                  </div>
                  <div class=" self-stretch flex-col justify-center  gap-1 inline-flex">
                      <div class="text-neutral-900 text-lg font-normal font-['Space Grotesk'] leading-9">Fine Art</div>
                      <div class="self-stretch h-11 pr-2.5 pb-0.5  items-center inline-flex">
                          <div class="w-80 h-11 text-stone-500 text-base font-normal font-['Space Grotesk'] leading-snug">A marketplace for art licensing where artists <br/>can be discovered by brands.</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="grow shrink basis-0 h-56 flex-col   gap-6 inline-flex">
          <div class="h-20 pt-0.5 pb-px flex-col justify-center  gap-1.5 flex">
              <div class="w-48 h-11 text-red-500 text-4xl font-bold font-['Space Grotesk'] leading-10">Experience</div>
              <div class="self-stretch h-5 pr-56 pb-px  items-center inline-flex">
                  <div class="w-56 h-5 text-stone-500 text-base font-normal font-['Space Grotesk'] leading-snug">Where I've worked, and when.</div>
              </div>
          </div>
          <div class="flex-col   gap-1 flex">
              <div class="justify-center items-center gap-48 inline-flex">
                  <div class="text-neutral-900 text-lg font-normal font-['Space Grotesk'] leading-9">Code Design Lab Ltd</div>
                  <div class="w-20 h-5 text-stone-500 text-base font-normal font-['Space Grotesk'] leading-snug">2021-2023</div>
              </div>
              <div class="justify-center items-center gap-52 inline-flex">
                  <div class="text-neutral-900 text-lg font-normal font-['Space Grotesk'] leading-9">Uncut Gems Co, Ltd</div>
                  <div class="w-20 h-5 text-stone-500 text-base font-normal font-['Space Grotesk'] leading-snug">2019-2021</div>
              </div>
              <div class="justify-center items-center gap-44 inline-flex">
                  <div class="text-neutral-900 text-lg font-normal font-['Space Grotesk'] leading-9">POSTECH Korea Co, Ltd</div>
                  <div class="w-20 h-5 text-stone-500 text-base font-normal font-['Space Grotesk'] leading-snug">2016-2019</div>
              </div>
          </div>
      </div>
  </div>
  </section>

  <footer class=" py-9 bg-emerald-950 flex-col  items-center flex">
    <div class=" relative">
        <div class="h-32 left-0 top-[7px] ">
            <div class=" h-12 pr-72 py-3 left-0 top-0 absolute  items-center inline-flex">
                <div class="w-36 self-stretch pr-1  items-start gap-2.5 inline-flex">
                    <div class="text-center text-white text-opacity-80 text-lg font-bold font-['Space Grotesk'] uppercase leading-7">su jeong ha</div>
                </div>
            </div>
            <div class="w-64 h-16 left-0 top-[59px] absolute flex-col  items-start gap-1 inline-flex">
                <div class="text-neutral-400 text-sm font-normal font-['Space Grotesk'] leading-tight">suzi960121@gmail.com<br/>This website is best viewed on desktop</div>
                <div class="text-neutral-400 text-sm font-normal font-['Space Grotesk'] leading-tight">Made by © 2024 Sujeong Ha</div>
            </div>
        </div>
        <div class=" h-6 left-[514px] top-[107px]">
            <div class="w-32 h-6 left-0 top-0 absolute flex-col  items-start inline-flex">
                <div class="w-px h-6"></div>
                <div class="w-px h-6"></div>
                <div class="w-9 h-5 text-neutral-400 text-sm font-normal font-['Space Grotesk'] leading-tight">Email</div>
            </div>
            <div class="w-32 h-6 left-[127px] top-0 absolute flex-col  items-start inline-flex">
                <div class="w-px h-6"></div>
                <div class="w-px h-6"></div>
                <div class="w-16 h-5 text-neutral-400 text-sm font-normal font-['Space Grotesk'] leading-tight">Behance</div>
            </div>
            <div class="w-28 h-6 left-[370px] top-0 absolute flex-col  items-start inline-flex">
                <div class="w-px h-6"></div>
                <div class="w-px h-6"></div>
                <div class="w-14 h-5 text-neutral-400 text-sm font-normal font-['Space Grotesk'] leading-tight">LinkedIn</div>
            </div>
            <div class="w-28 h-6 left-[254px] top-0 absolute flex-col  items-start inline-flex">
                <div class="w-px h-6"></div>
                <div class="w-px h-6"></div>
                <div class="w-14 h-5 text-neutral-400 text-sm font-normal font-['Space Grotesk'] leading-tight">Dribbble</div>
            </div>
        </div>
    </div>
  </footer>
`

parentElemet.innerHTML = htmlCode;