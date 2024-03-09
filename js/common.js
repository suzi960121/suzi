
ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const pageindex = document.querySelector(".index");

/* SMOOTH SCROLL */
const scroller = new LocomotiveScroll({
  el: pageindex,
  smooth: true
});

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageindex, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: pageindex.style.transform ? "transform" : "fixed"
});


// cursor
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.getElementById('custom_cursor');
  const component = document.getElementById('custom_cursor_id'); // Replace 'custom_cursor_id' with the actual ID of your component
  const links = document.querySelectorAll('a'); // Select all <a> tags

  document.addEventListener('mousemove', (e) => {
    cursor.style.top = (e.clientY - cursor.clientHeight / 2) + 'px';
    cursor.style.left = (e.clientX - cursor.clientWidth / 2) + 'px';
  });

  // Add the cursor effect when hovering over the specific component
  component.addEventListener('mouseenter', () => {
    cursor.classList.add('hovered');
  });

  component.addEventListener('mouseleave', () => {
    cursor.classList.remove('hovered');
  });

  // Add the cursor effect when hovering over <a> tags
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      cursor.classList.add('hovered');
    });

    link.addEventListener('mouseleave', () => {
      cursor.classList.remove('hovered');
    });
  });

  // Remove the cursor effect when leaving the document area (optional)
  document.addEventListener('mouseleave', () => {
    cursor.classList.remove('hovered');
  });
});

// eyeGroup
const eyeGroup = document.querySelector('.eye-group');
const eye = document.querySelector('.eye');

// 현재 눈의 위치
let currentEyeTranslateX = 0;
let currentEyeTranslateY = 0;

document.addEventListener('mousemove', (e) => {
  const { clientX: mouseX, clientY: mouseY } = e;

  const eyeRect = eye.getBoundingClientRect();
  const eyeCenterX = eyeRect.left + eyeRect.width / 2;
  const eyeCenterY = eyeRect.top + eyeRect.height / 2;

  const deltaX = mouseX - eyeCenterX;
  const deltaY = mouseY - eyeCenterY;

  const angle = Math.atan2(deltaY, deltaX);
  const distance = Math.min(5, Math.sqrt(deltaX ** 2 + deltaY ** 2));

  // 새로운 목표 위치
  const targetEyeTranslateX = Math.cos(angle) * distance;
  const targetEyeTranslateY = Math.sin(angle) * distance;

  // 현재 위치에서 목표 위치로 일정 비율씩만 이동
  const easingFactor = 0.1;
  currentEyeTranslateX += (targetEyeTranslateX - currentEyeTranslateX) * easingFactor;
  currentEyeTranslateY += (targetEyeTranslateY - currentEyeTranslateY) * easingFactor;

  eyeGroup.style.transform = `translate(${currentEyeTranslateX}px, ${currentEyeTranslateY}px)`;
});
const svgElement = document.querySelector(".absolute");

document.addEventListener("mousemove", () => {
  svgElement.classList.remove("-not-active");

  setTimeout(() => {
    svgElement.classList.add("-not-active");
  }, 2000);
});

// --- magneticButton
const $ = (s, o = document) => o.querySelector(s);
const $$ = (s, o = document) => o.querySelectorAll(s);

$$('.button').forEach(el => el.addEventListener('mousemove', function(e) {
  const pos = this.getBoundingClientRect();
  const mx = e.clientX - pos.left - pos.width/3; 
  const my = e.clientY - pos.top - pos.height/3;
   
  this.style.transform = 'translate('+ mx * 0.15 +'px, '+ my * 0.3 +'px)';
  this.style.transform += 'rotate3d('+ mx * -0.1 +', '+ my * -0.3 +', 0, 12deg)';
  this.children[0].style.transform = 'translate('+ mx * 0.025 +'px, '+ my * 0.075 +'px)';
}));

$$('.button').forEach(el => el.addEventListener('mouseleave', function() {
  this.style.transform = 'translate3d(0px, 0px, 0px)';
  this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
  this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
}));



// header_fixed//
document.addEventListener('DOMContentLoaded', () => {
  const header_fixed = document.getElementById('header_fixed');

  // 헤더가 자동으로 위에서 아래로 내려오는 효과를 주기 위해 초기 클래스를 추가합니다.
  header_fixed.classList.add('animate-down');

  // 페이지 로드 후 헤더를 위에서 아래로 이동하는 효과를 줍니다.
  setTimeout(() => {
    header_fixed.style.opacity = '1'; // 투명도를 1로 조절하여 나타나게 합니다.
    header_fixed.style.top = '0'; // top 속성을 0으로 조절하여 아래로 이동합니다.
  }, 500); // 0.5초 후에 실행되도록 설정합니다.

  // 스크롤 이벤트 리스너를 추가합니다.
  window.addEventListener('scroll', () => {
    // 현재 스크롤 위치가 헤더의 상단보다 아래에 있을 때
    if (window.scrollY > header_fixed.offsetTop) {
      header_fixed.style.paddingTop = '2rem'; // 투명도를 1로 조절하여 나타나게 합니다.
      header_fixed.style.background = 'white'; // 투명도를 1로 조절하여 나타나게 합니다.
    } else {
      header_fixed.style.paddingTop = '5rem'; // 투명도를 0으로 조절하여 숨깁니다.
      header_fixed.style.background = 'none'; // 투명도를 1로 조절하여 나타나게 합니다.
    }
  });
}); 




