"use strict";

const title = ({
  start,
  projectTitle,
  imgUrl1,
  imgUrl2,
  rootUrl,
  // data,
  role,
  duration,
  teammates,
  contribution,
  tools,
  end,
}) => {
  return `
  ${start || ""}
  <section>
  <div class="py-14 flex-col items-center gap-14 flex container">
    <h1 class="text-primary title">${
      projectTitle || ""
    }</h1>
    <div class="flex-col items-center gap-11 flex w-full">
        <div class="pb-14 border-b border-grey700 flex-col justify-center items-center gap-4 flex">
          <img class="w-full" src="${
        imgUrl1 || ""
      }">
          <img class="w-full" src="${
        imgUrl2 || ""
      }">
        </div>
        <div class="w-full flex justify-between">
          <div class="flex-col gap-3 flex col-2">
            <h6 class="text-grey">Demo / Prototype</h6>
            <a href="${
              rootUrl || ""
            }" class=" px-9 py-3 bg-grey700 rounded-3xl justify-center items-center flex text-center text-white text-sm flex-none flex-shrink-0">View Prototype</a>
            <a href="" class="px-9 py-3 bg-white rounded-3xl border border-grey700 justify-center items-center flex text-sm flex-none flex-shrink-0">Process Deck PDF</a>
          </div>
          <ul class="justify-between flex text-lg w-full col-9">
            <li class="flex-col gap-3 flex col-2">
              <h6 class="text-grey">Role</h6>
              ${
                role || ""
              }
            </li>
            <li class=" flex-col gap-3 flex col-2">
              <h6 class="text-grey">Duration</h6>
              ${
                duration || ""
              }
            </li>
            <li class=" flex-col gap-3 flex col-2">
              <h6 class="text-grey">Teammates</h6>
              ${
                teammates || ""
              }
            </li>
            <li class="flex-col gap-3 flex col-2">
              <h6 class="text-grey">Contribution</h6>
              ${
                contribution || ""
              }
            </li>
            <li class=" flex-col gap-3 flex col-2">
              <h6 class="text-grey">Tools</h6>
              ${
                tools || ""
              }
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  </section>
  ${end || ''}`;
};

module.exports = title;
// export default title;
