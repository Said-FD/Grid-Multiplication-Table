const table = document.querySelector('.grid-cells')
const tableCells = [... document.querySelectorAll('.grid-cells > div')]
const mainCells = [... document.querySelectorAll('.main-row, .main-col')]
const mainRow = [... mainCells[0].querySelectorAll('div')]
const mainCol = [... mainCells[1].querySelectorAll('div')]

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

function handleMainMouseover(mainCell) {
  mainCell.classList.add('on-hover')
}

tableCells.forEach(handleMouseover)

mainCells.forEach(mainCell => {
  mainCell.addEventListener('mouseover', () => handleMainMouseover(mainRow[0]))
  mainCell.addEventListener('mouseleave', () => handleMouseleave(mainRow[0]))
})

table.addEventListener('mouseleave', () => {
  mainRow.forEach(handleMouseleave)
  mainCol.forEach(handleMouseleave)
})
