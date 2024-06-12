const AddBtn = document.getElementById('AddBtn')

const modal = document.getElementById('modal')

const closeBtn = document.getElementById('closeBtn')



AddBtn.addEventListener('click', () => {
    modal.classList.toggle('hidden')
})

closeBtn.addEventListener('click', () => {
    modal.classList.toggle('hidden')
})