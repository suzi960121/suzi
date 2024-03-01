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
    } else {
      header_fixed.style.paddingTop = '5rem'; // 투명도를 0으로 조절하여 숨깁니다.
    }
  });
}); 


const eyeGroup = document.querySelector('.eye-group');
const eye = document.querySelector('.eye');

document.addEventListener('mousemove', (e) => {
  const { clientX: mouseX, clientY: mouseY } = e;

  const eyeRect = eye.getBoundingClientRect();
  const eyeCenterX = eyeRect.left + eyeRect.width / 2;
  const eyeCenterY = eyeRect.top + eyeRect.height / 2;

  const deltaX = mouseX - eyeCenterX;
  const deltaY = mouseY - eyeCenterY;

  const angle = Math.atan2(deltaY, deltaX);
  const distance = Math.min(10, Math.sqrt(deltaX ** 2 + deltaY ** 2));

  const eyeTranslateX = Math.cos(angle) * distance;
  const eyeTranslateY = Math.sin(angle) * distance;

  eyeGroup.style.transform = `translate(${eyeTranslateX}px, ${eyeTranslateY}px)`;
  






  // eyeGroup.style.transform = `translate3d(${mx * eyeGroup.getBoundingClientRect().width / 2}px, ${my}px, 0)`;
  // black.current.style.transform = `translate3d(${mx * black.current.getBoundingClientRect().width / 2}px, ${my}px, 0)`


});
