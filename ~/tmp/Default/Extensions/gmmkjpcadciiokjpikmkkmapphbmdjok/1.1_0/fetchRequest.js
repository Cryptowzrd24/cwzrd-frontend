import {getAuthHeader, getContentType, invalidRequest, isASCII, isForbiddenHeader, validateAuthHeader} from "./utils.js";

export function fetchRequest(data, sendResponse) {
    const json = JSON.parse(data.json);
    const headers = json.headers.split("\n");

    const fetchData = {
        method: json.method,
        headers: {},
        body: json.content
    };

    //add headers
    for (let i = 0; i < headers.length; i++) {
        const header = headers[i].trim();
        if (header) {
            const hdr = header.split(':');
            if (hdr.length !== 2) {
                sendResponse(invalidRequest(`Invalid Header:\n${header}`));
                return;
            }

            const key = hdr[0].trim();
            const val = hdr[1].trim();
            if (!isASCII(key) || !isASCII(val) || key.includes(' ')) {
                sendResponse(invalidRequest(`Invalid Header:\n${header}`));
                return;
            }

            if (isForbiddenHeader(key)) {
                sendResponse(invalidRequest(`Cannot set the header:\n${key}`));
                return;
            }

            fetchData.headers[key] = val;
        }
    }

    // auth header
    const authError = validateAuthHeader(json.auth)
    if (authError) {
        sendResponse(invalidRequest(authError));
        return;
    }

    const authHeader = getAuthHeader(json.auth).trim();
    if (authHeader) {
        fetchData.headers['Authorization'] = authHeader;
    }

    const start = new Date();

    if (json.method === 'POST' || json.method === 'PUT' || json.method === 'PATCH') {
        const contentType = json.contentType;
        if (contentType) {
            fetchData.headers['Content-Type'] = getContentType(contentType);
        }
    }

    fetch(json.idnUrl, fetchData)
        .then(response => {
            const statusCode = response.status;
            const statusDescription = response.statusText;

            const elapsed = new Date() - start;
            const contentType = response.headers.get('content-type');

            let headers = '';
            response.headers.forEach((value, name) => {
                headers += (`${name}: ${value}\n`);
            });

            return response.text().then(data => {
                sendResponse({
                    'Success': true,
                    'Version': "1.1",
                    'StatusCode': statusCode,
                    'StatusDescription': statusDescription,
                    'Headers': headers,
                    'Content': data || '',
                    'ContentLength': (data || '').length,
                    'ContentType': contentType,
                    'Elapsed': elapsed,
                });
            });
        })
        .catch((error) => {
            console.error(error);
            sendResponse(invalidRequest("Error sending request."));
        });

    // fetch(json.idnUrl, fetchData)
    //     .then(response => response.text())
    //     .then(data => {
    //         const elapsed = new Date() - start;
    //         const content = data || '';
    //         // const contentType = xhr.getResponseHeader('content-type');
    //
    //         sendResponse({
    //             'Success': true,
    //             'Version': "1.1",
    //             // 'StatusCode': xhr.status,
    //             // 'StatusDescription': xhr.statusText,
    //             // 'Headers': xhr.getAllResponseHeaders(),
    //             'Content': content,
    //             'ContentLength': content.length,
    //             // 'ContentType': contentType,
    //             'Elapsed': elapsed,
    //         });
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //         sendResponse(invalidRequest("Error sending request."));
    //     });
}
