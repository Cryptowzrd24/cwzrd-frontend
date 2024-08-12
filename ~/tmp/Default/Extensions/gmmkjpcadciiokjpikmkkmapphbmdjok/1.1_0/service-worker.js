import {fetchRequest} from './fetchRequest.js';

console.log('The ReqBin plugin has been initialized.');

chrome.runtime.onMessageExternal.addListener(
async function(req, sender, sendResponse) {
    switch (req.cmd) {
        case 'rbGetVersion':
            sendResponse({ver: "1.1"});
            return;
        case 'rbPostData':
            fetchRequest(req.data, sendResponse);
            return;
        default:
            sendResponse({error: "Unknown command"});
    }
});

