const API_URL = "https://SEU-BACKEND.onrender.com/chat";

async function send() {
  const msg = document.getElementById("msg").value;

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: msg })
  });

  const data = await res.json();
  document.getElementById("resp").innerText = data.reply;
}
