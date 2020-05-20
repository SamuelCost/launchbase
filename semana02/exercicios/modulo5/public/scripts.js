const currentPage = location.pathname
const menuItems = document.querySelectorAll("#wrapper a")

for (item of menuItems){
    if (currentPage.includes(item.getAttribute("href"))){
        item.classList.add("active")
    }
}

const pagination = document.querySelector(".pagination")

function paginate(selectePage, totalPage){
    let pages = [],
    oldPage

    for (let currentPage = 1; currentPage <= totalPage; currentPage++){
        const firtsOrLastPage = currentPage <= 2 || currentPage >= totalPage - 1
        const pageBeforeSelected = currentPage >= selectePage - 1
        const pageAfterSelected = currentPage <= selectePage + 1

        if (firtsOrLastPage || pageBeforeSelected && pageAfterSelected){
            if (oldPage && currentPage - oldPage > 2){
                pages.push("...")
            }

            if (oldPage && currentPage - oldPage == 2) {
                pages.push(oldPage + 1)
            }

            pages.push(currentPage)

            oldPage = currentPage
        }
    }
    return pages

}

function createPaginate(pagination){
    const page = pagination.dataset.page
    const total = pagination.dataset.total
    const filter = pagination.dataset.filter
    const pages = paginate(page, total)

    let elements = ""

    for (let page of pages) {
        if (String(page).includes("...")) {
            elements += `<span>${page}</span>`
        } else {
            if (filter) {
                elements += `<a href='/teachers?page=${page}&filter=${filter}'>${page}</a>`
            } else {
                elements += `<a href='/teachers?page=${page}'>${page}</a>`
            }
        }

        pagination.innerHTML = elements
    }
}

if (pagination) {
    createPaginate(pagination)
}

