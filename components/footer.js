class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1e293b;
          color: white;
          width: auto;
          padding: 2rem 1rem;
          text-align: center;
          margin-top: auto;
        }
        .footer-content {
          width: auto;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          text-align: left;
        }
        .footer-section h3 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #e2e8f0;
        }
        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-section li {
          margin-bottom: 0.5rem;
        }
        .footer-section a {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-section a:hover {
          color: #ffffff;
        }
        .footer-bottom {
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid #334155;
          text-align: center;
          color: #94a3b8;
          font-size: 0.875rem;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-links a {
          color: #cbd5e1;
          transition: color 0.2s;
        }
        .social-links a:hover {
          color: #ffffff;
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <h3>УмКабинет</h3>
            <p>Личный кабинет студента для удобного управления учебным процессом и карьерным развитием.</p>
            <div class="social-links">
              <a href="#"><i data-feather="facebook"></i></a>
              <a href="#"><i data-feather="twitter"></i></a>
              <a href="#"><i data-feather="instagram"></i></a>
              <a href="#"><i data-feather="linkedin"></i></a>
            </div>
          </div>
          
          <div class="footer-section">
            <h3>Разделы</h3>
            <ul>
              <li><a href="index.html">Главная</a></li>
              <li><a href="schedule.html">Расписание</a></li>
              <li><a href="materials.html">Учебные материалы</a></li>
              <li><a href="grades.html">Успеваемость</a></li>
              <li><a href="career.html">Карьера</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h3>Поддержка</h3>
            <ul>
              <li><a href="faq.html">Частые вопросы</a></li>
              <li><a href="feedback.html">Обратная связь</a></li>
              <li><a href="contact.html">Контакты</a></li>
              <li><a href="privacy.html">Политика конфиденциальности</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2024 УмКабинет. Все права защищены.</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);




