// js/script.js
document.addEventListener("DOMContentLoaded", () => {
  // 프로젝트 데이터
  const projects = [
    {
      title: "쇼핑몰 플랫폼",
      tech: "React, Node.js, MongoDB",
      desc: "실시간 상품 관리 시스템 구축",
      link: "#",
    },
    // 추가 프로젝트 데이터
  ];

  // 프로젝트 카드 동적 생성
  const projectGrid = document.querySelector(".project-grid");
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
					<h3>${project.title}</h3>
					<p>${project.tech}</p>
					<p>${project.desc}</p>
					<a href="${project.link}" class="btn">자세히 보기</a>
			`;
    projectGrid.appendChild(card);
  });

  // 테마 토글
  const themeToggle = document.querySelector(".theme-toggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeToggle.textContent = document.body.classList.contains("dark-theme")
      ? "☀️"
      : "🌙";
  });

  // 스무스 스크롤
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
