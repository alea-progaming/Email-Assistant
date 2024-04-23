import hosts from '../hosts-selectors'

const observer = new MutationObserver(() => {
  const host = new URL(window.location.href).hostname
  const selector = hosts[host].sendButton
  const sendButtons = document.querySelectorAll(selector)

  for (const sendButton of sendButtons) {
    const editorToolbar = findEditorToolbar(sendButton)
    const professionallyLogo = editorToolbar.querySelector(
      'img[data-professionally-added="true"]'
    )
    if (sendButton && !professionallyLogo) {
      console.log(sendButton)
      addButton(sendButton)
    }
  }
})

observer.observe(document.body, { childList: true, subtree: true })

function addButton(sendButton: Element) {
  console.log('Adding button')
  const editorToolbar = findEditorToolbar(sendButton)
  const newCell = document.createElement('td')
  const regionElement = findParentElementWithRole(sendButton, 'region')
  const professionallyLogo = document.createElement('img')
  professionallyLogo.src = chrome.runtime.getURL(
    'common/assets/images/professionally-logo-128.png'
  )
  professionallyLogo.id = randomId()
  professionallyLogo.setAttribute('data-professionally-added', 'true')
  professionallyLogo.setAttribute('message-region-id', regionElement.id)
  professionallyLogo.setAttribute('is-professionally-active', 'false')
  professionallyLogo.setAttribute('host-name', window.location.hostname)
  professionallyLogo.alt = 'Professionally Logo'
  professionallyLogo.style.position = 'relative'
  professionallyLogo.style.width = '30px'
  professionallyLogo.style.height = '30px'
  professionallyLogo.style.borderRadius = '100%'
  professionallyLogo.style.cursor = 'pointer'
  professionallyLogo.style.padding = '2px'
  professionallyLogo.addEventListener('click', (event) => {
    console.log('Professionally clicked')
    const professionallyImages = document.querySelectorAll(
      'img[data-professionally-added="true"]'
    )
    for (const image of professionallyImages) {
      image.style.border = 'none'
      image.setAttribute('is-professionally-active', 'false')
    }
    const target = event.target as Element
    target.style.border = '2px solid #1646CE'
    target.setAttribute('is-professionally-active', 'true')
    chrome.runtime.sendMessage({
      type: 'openSidePanel',
      messageSectionId: regionElement.id,
      website: 'gmail',
    })
  })
  newCell.appendChild(professionallyLogo)
  const firstTd = editorToolbar.querySelector('td')
  if (firstTd && firstTd.nextElementSibling) {
    // Insert the new td element right after the first one
    editorToolbar.insertBefore(newCell, firstTd.nextElementSibling)
  } else {
    // If for some reason there is no nextElementSibling (unlikely), append to the row
    editorToolbar.appendChild(newCell)
  }
}

function findEditorToolbar(sendButton: Element) {
  let currentElement = sendButton.parentElement
  while (currentElement.tagName !== 'TR') {
    currentElement = currentElement.parentElement
  }
  return currentElement
}

function findParentElementWithRole(childElement: Element, role: string) {
  let currentElement = childElement.parentElement
  while (
    !currentElement.getAttribute('role') ||
    currentElement.getAttribute('role').toLowerCase() !== role.toLowerCase()
  ) {
    currentElement = currentElement.parentElement
  }
  return currentElement
}

function randomId(): string {
  const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0]
  return uint32.toString(16)
}
