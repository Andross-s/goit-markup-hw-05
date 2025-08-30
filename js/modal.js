// Модальне вікно - функціональність відкриття/закриття

// Отримуємо посилання на елементи модального вікна
const modalBackdrop = document.getElementById("modal-backdrop");
const modalOpenBtn = document.querySelector("[data-modal-open]");
const modalCloseBtn = document.querySelector("[data-modal-close]");

// Функція для відкриття модального вікна
function openModal() {
  modalBackdrop.classList.remove("is-hidden"); // Видаляємо клас приховування
  document.body.style.overflow = "hidden"; // Блокуємо прокрутку сторінки
}

// Функція для закриття модального вікна
function closeModal() {
  modalBackdrop.classList.add("is-hidden"); // Додаємо клас приховування
  document.body.style.overflow = ""; // Відновлюємо прокрутку сторінки
}

// Обробник події для відкриття модального вікна
modalOpenBtn.addEventListener("click", openModal);

// Обробник події для закриття модального вікна по кнопці
modalCloseBtn.addEventListener("click", closeModal);

// Обробник події для закриття модального вікна по кліку на backdrop
modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) {
    closeModal();
  }
});

// Обробник події для закриття модального вікна по натисканню клавіші Escape
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    !modalBackdrop.classList.contains("is-hidden")
  ) {
    closeModal();
  }
});

// Обробник події для відправки форми модального вікна
const modalForm = document.querySelector(".modal-form");
modalForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Запобігаємо стандартній відправці форми

  // Отримуємо дані з форми
  const formData = new FormData(modalForm);
  const name = formData.get("username");
  const phone = formData.get("userphone");
  const email = formData.get("useremail");
  const comment = formData.get("usercomment");

  // Тут можна додати логіку для відправки даних на сервер
  console.log("Modal form data:", { name, phone, email, comment });

  // Закриваємо модальне вікно після відправки
  closeModal();

  // Очищаємо форму
  modalForm.reset();
});

// Обробник події для відправки форми підписки в footer
const subscribeForm = document.querySelector(".subscribe-form");
subscribeForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Запобігаємо стандартній відправці форми

  // Отримуємо дані з форми підписки
  const formData = new FormData(subscribeForm);
  const email = formData.get("useremail");

  // Валідація email
  if (!email || !email.includes("@")) {
    alert("Будь ласка, введіть коректний email адресу");
    return;
  }

  // Тут можна додати логіку для відправки даних на сервер
  console.log("Subscribe form data:", { email });

  // Показуємо повідомлення про успішну підписку
  alert(
    "Дякуємо за підписку! Ви будете отримувати наші новини на email: " + email
  );

  // Очищаємо форму
  subscribeForm.reset();
});
