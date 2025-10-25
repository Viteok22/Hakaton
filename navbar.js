class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          color: white;
          position: relative;
          z-index: 50;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          display: flex;
          align-items: center;
        }
        .logo-icon {
          margin-right: 0.5rem;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          transition: all 0.3s ease;
        }
        .nav-links a:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <nav>
        <div class="logo">
          <i data-feather="book-open" class="logo-icon"></i>
          УмКабинет
        </div>
        <ul class="nav-links">
          <li><a href="index.html">Главная</a></li>
          <li><a href="schedule.html">Расписание</a></li>
          <li><a href="materials.html">Материалы</a></li>
          <li><a href="grades.html">Успеваемость</a></li>
          <li><a href="career.html">Карьера</a></li>
        </ul>
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);