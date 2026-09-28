const loginForm = document.querySelector("#loginForm");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const rememberInput = document.querySelector("#remember");
const passwordToggle = document.querySelector("#passwordToggle");
const loginError = document.querySelector("#loginError");
const helpButton = document.querySelector("#helpButton");
const submitButton = loginForm.querySelector(".login-button");

const SUPER_ADMIN = {
  username: "admin",
  password: "Aa123456"
};

if (
  window.PMApi?.hasSession() ||
  sessionStorage.getItem("pm_auth") === "admin" ||
  localStorage.getItem("pm_auth") === "admin"
) {
  window.location.replace("./index.html");
}

passwordToggle.addEventListener("click", () => {
  const showPassword = passwordInput.type === "password";
  passwordInput.type = showPassword ? "text" : "password";
  passwordToggle.setAttribute("aria-label", showPassword ? "隐藏密码" : "显示密码");
});

helpButton.addEventListener("click", () => {
  loginError.textContent = "请联系系统管理员重置超级管理员密码。";
});

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  loginError.textContent = "";

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  if (!username || !password) {
    loginError.textContent = "请输入账号和密码。";
    return;
  }

  submitButton.classList.add("is-loading");
  submitButton.querySelector("span").textContent = "正在进入后台";

  try {
    if (window.PMApi) {
      const result = await window.PMApi.login(username, password);
      window.PMApi.setSession(result.token, result.user, rememberInput.checked);
      window.setTimeout(() => window.location.replace("./index.html"), 260);
      return;
    }
    throw Object.assign(new Error("API client unavailable"), { status: 0 });
  } catch (error) {
    if (error.status === 401 || error.status === 403) {
      loginError.textContent = error.message || "账号或密码不正确，请检查后重试。";
      passwordInput.select();
      submitButton.classList.remove("is-loading");
      submitButton.querySelector("span").textContent = "进入管理后台";
      return;
    }

    if (username !== SUPER_ADMIN.username || password !== SUPER_ADMIN.password) {
      loginError.textContent = "账号或密码不正确，请检查后重试。";
      passwordInput.select();
      submitButton.classList.remove("is-loading");
      submitButton.querySelector("span").textContent = "进入管理后台";
      return;
    }

    sessionStorage.setItem("pm_auth", "admin");
    if (rememberInput.checked) {
      localStorage.setItem("pm_auth", "admin");
    } else {
      localStorage.removeItem("pm_auth");
    }
    window.setTimeout(() => window.location.replace("./index.html"), 260);
  }
});
