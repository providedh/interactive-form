function contentsFromRange (range) {
    const fragment = range.cloneRange().cloneContents()
    const container = document.createElement('div')
    container.appendChild(fragment)
  
    return container.innerText
  }
  
  function firstDisconcordance (s1, s2) {
    const str1 = s1.replace(/ +/g, ' ')
    const str2 = s2.replace(/ +/g, ' ')
    const maxLength = Math.max(str1.length, str2.length)
    
    for (let i = 0; i < maxLength; i++) {
      if (str1[i] != str2[i]) return i
    }
    return maxLength
  }
  
  function getRelativePosition(source, node, offset) {
    const range = document.createRange()
    range.setStart(source, 0)
    range.setEnd(node, offset)
    const content = contentsFromRange(range)
  
    return firstDisconcordance(source.innerText, content)
  }
  
  export function getSelection (container, selection) {
    const anchorOffset = getRelativePosition(
      container,
      selection.anchorNode, 
      selection.anchorOffset
    )
  
    const focusOffset = getRelativePosition(
      container,
      selection.focusNode,
      selection.focusOffset
    )
   
    const [start, end] = (anchorOffset < focusOffset)
      ? [anchorOffset, focusOffset]
      : [focusOffset, anchorOffset]
  
    console.log(container.innerText.slice(0, start))
    
    return [start, end]
  }
  
  export function processSelection(selectionEvent) {
    let selection, text;
  
    if (window.getSelection) {
      selection = window.getSelection();
      text = selection.toString();
    }else if (document.selection && document.selection.type != "Control"){
      selection = document.selection;
      text = document.selection.createRange().text;
    }
  
    if (selection.isCollased === true) return [null, null]
    if (selection.toString().length == 0) return [null, null]
  
    return [selection, text]
  }