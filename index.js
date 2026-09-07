document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const loginBtn = document.querySelector('.login-btn');
    const passwordGroup = passwordInput.closest('.input-group');

    // Show/hide password
    togglePassword.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        togglePassword.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
    });

    loginForm.addEventListener('submit', (event) => {
        // Prevent page from refreshing
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Show a brief loading state on the button for a smoother feel
        loginBtn.classList.add('loading');

        setTimeout(() => {
            loginBtn.classList.remove('loading');

            // Simple validation check
            if (email === "user@example.com" && password === "123456") {
                alert("Login successful! Welcome back.");
            } else {
                alert("Incorrect email or password. (Try: user@example.com / 123456)");
                passwordGroup.classList.add('shake');
                setTimeout(() => passwordGroup.classList.remove('shake'), 400);
            }
        }, 500);
    });
});
