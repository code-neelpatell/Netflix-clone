let faqs = document.querySelectorAll("#faqs .list .item dt")

faqs.forEach(item => {
    item.addEventListener("click", () => {
        item.parentElement.classList.toggle("active")
    })
})

