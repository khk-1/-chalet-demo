const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  const guests = document.getElementById("guests").value;

  if (!checkin || !checkout || !guests) {
    alert("فضلاً أكمل جميع بيانات الحجز.");
    return;
  }

  if (checkout <= checkin) {
    alert("تاريخ المغادرة يجب أن يكون بعد تاريخ الوصول.");
    return;
  }

  const whatsappNumber = "966505135240";

  const message =
`السلام عليكم 👋

أرغب بحجز الشاليه.

📅 تاريخ الوصول: ${checkin}
📅 تاريخ المغادرة: ${checkout}
👥 عدد الأشخاص: ${guests}

أرغب بالاستفسار عن السعر والتوفر.

شكراً لكم 🌹`;

  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
});
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});
