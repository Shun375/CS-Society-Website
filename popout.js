function openModal() {
    modalOverlay.style.display = "block";
}

function closeModal() {
    modalOverlay.style.display = "none";
}

const modalOverlay = document.getElementById("modalOverlay");
const openModalBtn = document.getElementById("openModalBtn");

openModal();

openModalBtn.addEventListener("click", openModal);