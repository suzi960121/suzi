let projectIntroductionElemet = document.getElementById('projectIntroduction');

let projectIntroductionCode = `<!--<section class="w-full py-6 bg-white flex-col gap-2.5 flex">
<div class="container w-full justify-between items-center flex ">
    <div class="flex-col gap-4 flex max-w-[700px]">
        <div class="text-primary text-4xl font-bold">Featured projects</div>
        <p class="w-full text-grey text-base">
        I've been working as a designer for the last 3 years across user experience, <br>interaction design, and web design on monetization, design systems, internal tools, 0-1 initiatives, and AI-powered products, prioritizing usability and scalability. My strength lies in visual and product design, and I often take on a dual design and product management role. Outside of “work-work," I love designing side projects, some of which are shown here.
        </p>
    </div>
    <div class="flex-col items-end gap-2.5 flex">
        <a href="#work" class="work_category button"><div class="ball"></div> Work</a>
        <a href="#side_project" class="work_category side  button"text-orange-900"><div class="ball"></div>Side project</a>
    </div>
</div>
</section> -->
`


projectIntroductionElemet.innerHTML = projectIntroductionCode;