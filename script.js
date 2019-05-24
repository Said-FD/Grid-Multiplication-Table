const table = document.querySelector('.grid-cells')
const tableCells = [... document.querySelectorAll('.grid-cells > div')]
const mainCells = [... document.querySelectorAll('.main-col, .main-row')]
const mainCol = [... mainCells[0].querySelectorAll('div')]
const mainRow = [... mainCells[1].querySelectorAll('div')]

function handleMouseover(cell) {
  cell.addEventListener('mouseover', () => {
    mainRow.some(mainRowCell => {
      handleMouseleave(mainRowCell)
      
      if (mainRowCell.classList.contains(cell.classList)) {
        mainRowCell.classList.add('on-hover')

        mainCol.some(mainColCell => {
          handleMouseleave(mainColCell)
          mainColCell.classList.contains(`col-${+cell.textContent / +mainRowCell.textContent}`) && mainColCell.classList.add('on-hover')
        })
      }
    })
  })
}

function handleMouseleave(cell) {
  cell.classList.remove('on-hover')
}

tableCells.forEach(handleMouseover)

table.addEventListener('mouseleave', () => {
  mainRow.forEach(handleMouseleave)
  mainCol.forEach(handleMouseleave)
})
