const themeMap = {
  dark: "light",
  light: "solar",
  solar: "dark"
};

const themeMapBackground = {
  dark: "light",
  light: "solar",
  solar: "dark"
};

const theme = localStorage.getItem('theme')
  || (tmp = Object.keys(themeMap)[0],
      localStorage.setItem('theme', tmp),
      tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem('theme');
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem('theme', next);

  if(next == "light"){
    document.body.style.backgroundColor = "#d9bb89";
  }
  if(next == "solar"){
    document.body.style.backgroundColor = "#d9bb89";
  }
  if(next == "dark"){
    document.body.style.backgroundColor = "#3e392f";
  }
}

document.getElementById('themeButton').onclick = toggleTheme;