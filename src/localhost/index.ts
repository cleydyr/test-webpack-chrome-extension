import { main } from './app'

__webpack_public_path__ = chrome.runtime.getURL('/')

void (async () => {
  main(/* chrome: no need to pass it */)
})()
