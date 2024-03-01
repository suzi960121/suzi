"use strict";

const project = ({
  start,
  rootUrl,
  type,
  imgUrl,
  workType,
  workCategory,
  projectTitle,
  projectDescription,
  end,
}) => {
  return `
  ${start || ""}
    <a href="${
      rootUrl || ""
    }" class="flex-col gap-7 flex w-full">
      <div class="${
        type === "big" ? "h-auto" : "xl:h-96"
      } items-center flex overflow-hidden"><img class="w-full hover:scale-105 transition-all" src="${
        imgUrl || ""
      }"></div>
      <div class="flex-col  gap-4 flex">
        <button class="${
          workType === "side" ? "side" : ""
        } work_category "><div class="ball"></div>${
          workCategory || ""
        }</button>
        <div class="flex-col  gap-1 flex">
          <div class=" text-2xl font-bold">${
            projectTitle || ""
          }</div>
          <div class=" text-grey400 text-base font-normal">${
            projectDescription || ""
          }</div>
        </div>
      </div>
    </a>
  ${end}`;
};

export default project;
