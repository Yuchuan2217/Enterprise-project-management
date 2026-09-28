(function createApiClient() {
  const fileMode = window.location.protocol === "file:";
  const baseUrl =
    window.PM_API_BASE_URL || (fileMode ? "http://localhost:3000/api" : "/api");

  function getStoredValue(key) {
    return sessionStorage.getItem(key) || localStorage.getItem(key);
  }

  function getToken() {
    return getStoredValue("pm_token") || "";
  }

  function getStoredUser() {
    const value = getStoredValue("pm_user");
    if (!value) return null;
    try {
      return JSON.parse(value);
    } catch {
      return null;
    }
  }

  function setSession(token, user, remember = false) {
    sessionStorage.setItem("pm_token", token);
    sessionStorage.setItem("pm_user", JSON.stringify(user));
    sessionStorage.setItem("pm_auth", user.username || user.account || "admin");
    if (remember) {
      localStorage.setItem("pm_token", token);
      localStorage.setItem("pm_user", JSON.stringify(user));
      localStorage.setItem("pm_auth", user.username || user.account || "admin");
    } else {
      localStorage.removeItem("pm_token");
      localStorage.removeItem("pm_user");
      localStorage.removeItem("pm_auth");
    }
  }

  function clearSession() {
    sessionStorage.removeItem("pm_token");
    sessionStorage.removeItem("pm_user");
    sessionStorage.removeItem("pm_auth");
    localStorage.removeItem("pm_token");
    localStorage.removeItem("pm_user");
    localStorage.removeItem("pm_auth");
  }

  async function request(path, options = {}) {
    const headers = new Headers(options.headers || {});
    headers.set("Content-Type", "application/json");
    const token = getToken();
    if (token) headers.set("Authorization", `Bearer ${token}`);

    let response;
    try {
      response = await fetch(`${baseUrl}${path}`, {
        ...options,
        headers
      });
    } catch (error) {
      const networkError = new Error("无法连接后端服务");
      networkError.status = 0;
      networkError.cause = error;
      throw networkError;
    }

    if (response.status === 204) return null;
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      const error = new Error(payload.message || "请求失败");
      error.status = response.status;
      throw error;
    }
    return payload;
  }

  window.PMApi = {
    baseUrl,
    request,
    getToken,
    getStoredUser,
    setSession,
    clearSession,
    hasSession() {
      return Boolean(getToken());
    },
    login(username, password) {
      return request("/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password })
      });
    },
    me() {
      return request("/auth/me");
    },
    logout() {
      if (!getToken()) return Promise.resolve();
      return request("/auth/logout", { method: "POST" }).catch(() => null);
    },
    listProjects() {
      return request("/projects");
    },
    createProject(payload) {
      return request("/projects", {
        method: "POST",
        body: JSON.stringify(payload)
      });
    },
    updateProject(projectId, payload) {
      return request(`/projects/${projectId}`, {
        method: "PUT",
        body: JSON.stringify(payload)
      });
    },
    listUsers() {
      return request("/users");
    },
    createUser(payload) {
      return request("/users", {
        method: "POST",
        body: JSON.stringify(payload)
      });
    },
    updateUser(userId, payload) {
      return request(`/users/${userId}`, {
        method: "PUT",
        body: JSON.stringify(payload)
      });
    },
    listTeams() {
      return request("/teams");
    },
    listDepartments() {
      return request("/departments");
    },
    listAssets() {
      return request("/assets");
    },
    createAsset(payload) {
      return request("/assets", {
        method: "POST",
        body: JSON.stringify(payload)
      });
    },
    updateAsset(assetId, payload) {
      return request(`/assets/${assetId}`, {
        method: "PUT",
        body: JSON.stringify(payload)
      });
    },
    updateTeam(teamId, payload) {
      return request(`/teams/${teamId}`, {
        method: "PUT",
        body: JSON.stringify(payload)
      });
    },
    getCalendar(month) {
      return request(`/calendar?month=${encodeURIComponent(month)}`);
    }
  };
})();
