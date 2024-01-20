<script>
    document.addEventListener("DOMContentLoaded", function () {

            const whiteTouchBtn = document.getElementById("get-in-touch-white")
            const navElementWhite = document.getElementById("nav-element")
            
            const blackTouchBtn = document.getElementById("get-in-touch-black")
            const navElementGreen = document.getElementById("nav-element-green")
            
            const logoWhite = document.getElementById("homepage-logo-white")
            const logoBlack = document.getElementById("homepage-logo-black")
            
            const section1 = document.querySelector("#section-2-desktop")
            
            const sectionOneOptions = {
  rootMargin: "-80px 0px 0px 0px"
};

            

            const sectionObserver = new IntersectionObserver(function (entries, sectionObserver) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        whiteTouchBtn.style.display = "none"
                        navElementWhite.style.display ="none"
                        logoWhite.style.display = "none"
                        navElementGreen.style.display = "block"
                        blackTouchBtn.style.display = "block"
                        blackTouchBtn.style.width = "100%"
                        blackTouchBtn.style.top = null
                        
                        logoBlack.style.display = "block"
                        console.log("not")
                    } else {
                        whiteTouchBtn.style.display = "block"
                        navElementWhite.style.display ="block"
                        logoWhite.style.display = "block"
                        logoWhite.style.width = "100%"
                        logoWhite.style.top = null
                        
                        navElementGreen.style.display = "none"
                        blackTouchBtn.style.display = "none"
                        logoBlack.style.display = "none"
                        console.log("yes")
                    }
                })

            },sectionOneOptions)

            sectionObserver.observe(section1)


        });
</script>
