function checkLogin() {
    const usernameInput = document.getElementById('username').value.trim();
    const passwordInput = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('error');

    if (usernameInput !== "" && passwordInput !== "") {
        // أي اسم مستخدم وأي كلمة مرور يسمحان بالدخول
        window.location.href = "home.html";
        return true;
    } else {
        // إذا ترك أحد الحقول فارغًا
        errorMsg.textContent = "يرجى إدخال اسم المستخدم وكلمة المرور.";
        return false;
    }
}

function logout() {
    window.location.href = "index.html";
}