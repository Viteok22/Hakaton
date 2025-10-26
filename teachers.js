const teachersContainer = document.getElementById("teachersContainer");
const searchInput = document.getElementById("searchInput");

const colors = [
  "bg-blue-50 text-blue-800",
  "bg-green-50 text-green-800",
  "bg-pink-50 text-pink-800",
  "bg-purple-50 text-purple-800",
  "bg-yellow-50 text-yellow-800",
  "bg-teal-50 text-teal-800",
  "bg-amber-50 text-amber-800",
  "bg-red-50 text-red-800",
  "bg-indigo-50 text-indigo-800",
  "bg-gray-50 text-gray-800"
];

// Функция рендера карточек
function renderTeachers(teachers) {
  teachersContainer.innerHTML = "";
  teachers.forEach((teacher, index) => {
    const color = colors[index % colors.length];
    const card = document.createElement("div");
    card.className = `rounded-xl p-5 shadow-sm hover:shadow-md transition ${color.split(" ")[0]}`;
    card.innerHTML = `
      <h2 class="text-lg font-semibold ${color.split(" ")[1]} mb-1">${teacher.position || "Преподаватель"}</h2>
      <p class="text-gray-700 font-medium">${teacher.fio}</p>
      <p class="text-sm text-gray-600 mt-2">${teacher.disciplines || "—"}</p>
    `;
    teachersContainer.appendChild(card);
  });
}

// Фильтрация по поиску
function handleSearch(teachers) {
  const query = searchInput.value.toLowerCase();
  const filtered = teachers.filter(
    t =>
      t.fio.toLowerCase().includes(query) ||
      t.disciplines.toLowerCase().includes(query)
  );
  renderTeachers(filtered);
}

// Загрузка JSON
fetch("teachers.json")
  .then(response => response.json())
  .then(data => {
    renderTeachers(data);
    searchInput.addEventListener("input", () => handleSearch(data));
  })
  .catch(err => {
    teachersContainer.innerHTML = `<p class="text-red-600">Ошибка загрузки данных.</p>`;
    console.error("Ошибка загрузки teachers.json:", err);
  });
