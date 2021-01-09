document.addEventListener('DOMContentLoaded', () => {
   const accordion = document.querySelector('.accordion')
   const expandos = document.querySelectorAll('.expando')

   expandos.forEach((expando) => {
      const expandoTitle = expando.querySelector('.expando__title')
      const expandoContent = expando.querySelector('.expando__content')

      const expandoTitleHeight = expandoTitle.offsetHeight
      let expandoContentHeight = 0
      let expandoTotalHeight = 0

      setTimeout(() => {
         expandoContentHeight = expandoContent.offsetHeight
         expandoTotalHeight = expandoTitleHeight + expandoContentHeight
      }, 100)

      expando.style.maxHeight = `${expandoTitleHeight}px`

      expandoTitle.addEventListener('click', () => {
         if (expando.classList.contains('active')) {
            expando.style.maxHeight = `${expandoTitleHeight}px`
            expando.classList.remove('active')
         } else {
            expando.style.maxHeight = `${expandoTotalHeight}px`
            expando.classList.add('active')
         }
      })
   })
})
