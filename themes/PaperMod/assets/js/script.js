<script>
    window.onload = function () {
        if (localStorage.getItem("menu-scroll-position")) {
            document.getElementById('menu').scrollLeft = localStorage.getItem("menu-scroll-position");
        }
    }
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
    var mybutton = document.getElementById("top-link");
    window.onscroll = function () {
        if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
            mybutton.style.visibility = "visible";
            mybutton.style.opacity = "1";
        } else {
            mybutton.style.visibility = "hidden";
            mybutton.style.opacity = "0";
        }
    };
    function menu_on_scroll() {
        localStorage.setItem("menu-scroll-position", document.getElementById('menu').scrollLeft);
    }
</script>

{{- if (and (not .Site.Params.disableThemeToggle) (not (or (eq .Site.Params.defaultTheme "light") (eq .Site.Params.defaultTheme "dark")))) }}
<script>
    document.getElementById("theme-toggle").addEventListener("click", () => {
        if (document.body.className.includes("dark")) {
            document.body.classList.remove('dark');
            localStorage.setItem("pref-theme", 'light');
        } else {
            document.body.classList.add('dark');
            localStorage.setItem("pref-theme", 'dark');
        }
    })
</script>
{{- else -}}
<!-- case where owner disables theme button after deployment, this resets the stored theme -->
<script>
    localStorage.removeItem("pref-theme");
</script>
{{- end }}