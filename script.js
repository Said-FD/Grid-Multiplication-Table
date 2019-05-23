const table = document.querySelector('table')
const allCells = [... document.querySelectorAll('td')]
const mainCells = [... document.querySelectorAll('.row-1 td')]

function handleMouseover(cell) {
  cell.addEventListener('mouseover', () => {
    mainCells.filter(mainCell => {
      mainCell.classList.remove('on-hover')
      if (mainCell.classList.contains(cell.classList)) mainCell.classList.add('on-hover')
    })
  })
}

allCells.forEach(handleMouseover)

table.addEventListener('mouseleave', () => mainCells.forEach(mainCell => mainCell.classList.remove('on-hover')))
