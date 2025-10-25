class CustomSidebar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        aside {
          width: 260px;
          background: white;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
          padding: 1.5rem 0;
          height: calc(100vh - 64px);
          position: sticky;
          top: 64px;
          overflow-y: auto;
          transition: all 0.3s ease;
        }
        .sidebar-item {
          display: flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          color: #4b5563;
          text-decoration: none;
          transition: all 0.2s;
        }
        .sidebar-item:hover {
          background-color: #f3f4f6;
          color: #1e40af;
        }
        .sidebar-item.active {
          background-color: #e0e7ff;
          color: #1e40af;
          border-right: 3px solid #4f46e5;
        }
        .sidebar-icon {
          margin-right: 0.75rem;
          width: 20px;
          height: 20px;
        }
        .sidebar-title {
          font-weight: 500;
          margin-bottom: 0.5rem;
          padding: 0 1.5rem;
          font-size: 0.875rem;
          color: #6b7280;
          text-transform: uppercase;
        }
        @media (max-width: 768px) {
          aside {
            width: 0;
            overflow: hidden;
            position: fixed;
            z-index: 40;
            left: 0;
            top: 64px;
            height: calc(100vh - 64px);
          }
          aside.active {
            width: 260px;
          }
        }
      </style>
      <aside>
        <div class="sidebar-title">Учебный процесс</div>
        <a href="schedule.html" class="sidebar-item">
          <i data-feather="calendar" class="sidebar-icon"></i>
          Расписание
        </a>
        <a href="materials.html" class="sidebar-item">
          <i data-feather="book" class="sidebar-icon"></i>
          Учебные материалы
        </a>
        <a href="grades.html" class="sidebar-item">
          <i data-feather="trending-up" class="sidebar-icon"></i>
          Успеваемость
        </a>
        <a href="teachers.html" class="sidebar-item">
          <i data-feather="users" class="sidebar-icon"></i>
          Преподаватели
        </a>
        
        <div class="sidebar-title mt-4">Карьерное развитие</div>
        <a href="career.html" class="sidebar-item">
          <i data-feather="briefcase" class="sidebar-icon"></i>
          Карьерные возможности
        </a>
        <a href="resume.html" class="sidebar-item">
          <i data-feather="file-text" class="sidebar-icon"></i>
          Моё резюме
        </a>
        <a href="development-plan.html" class="sidebar-item">
          <i data-feather="target" class="sidebar-icon"></i>
          План развития
        </a>
        
        <div class="sidebar-title mt-4">Обратная связь</div>
        <a href="feedback.html" class="sidebar-item">
          <i data-feather="message-square" class="sidebar-icon"></i>
          Отзывы и предложения
        </a>
        <a href="surveys.html" class="sidebar-item">
          <i data-feather="clipboard" class="sidebar-icon"></i>
          Опросы
        </a>
      </aside>
    `;
  }
}
customElements.define('custom-sidebar', CustomSidebar);