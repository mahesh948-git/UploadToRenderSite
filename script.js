// Sample profile data
const profiles = [
  { name: "Waleed", mobile: "7498608775" },
  { name: "Ayesha", mobile: "9876543210" },
  { name: "Rahul", mobile: "9123456789" }
];

// Render profiles
const profileList = document.getElementById("profile-list");

profiles.forEach((profile, index) => {
  const card = document.createElement("div");
  card.className = "profile-card";

  const info = document.createElement("div");
  info.className = "profile-info";
  info.innerHTML = `<strong>${profile.name}</strong><br>Mobile: ${profile.mobile}`;

  const button = document.createElement("button");
  button.textContent = "View Profile";
  button.onclick = () => {
    alert(`Profile Details:\nName: ${profile.name}\nMobile: ${profile.mobile}`);
  };

  card.appendChild(info);
  card.appendChild(button);
  profileList.appendChild(card);
});
