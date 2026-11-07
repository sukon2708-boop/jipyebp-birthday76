const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
แฮปปี้เบิร์ดเดย์คับแฟน  
ขอบคุณที่เกิดมาให้เค้าได้รู้จักนะ 
ขอให้เธอมีความสุขมากๆ ในทุกวัน 
ไม่ว่าจะเจอเรื่องอะไรขอให้ผ่านไปได้ 
ขอให้ได้กินของอร่อยเย้อๆ 
ขอให้ได้ของที่อยากได้ 
ขอให้มีคนรักเธอเยอะๆ(เค้าคนเดียวพอ) 
ให้เค้าอยู่อวยพรวันเกิดของเธอทุกปีนะ rak ter🙆🏻🩷

`;

// 🔓 เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ❌ ปิด modal
function closeModal(){
  modalBackdrop.style.display = "none";
}

// ===== EVENTS =====
if(openLetter){
  openLetter.addEventListener("click", openModal);
}

if(readBtn){
  readBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

// กดพื้นหลังเพื่อปิด
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop){
    closeModal();
  }
});
