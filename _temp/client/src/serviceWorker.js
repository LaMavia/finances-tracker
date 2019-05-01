"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isLocalhost = Boolean(window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
        if (publicUrl.origin !== window.location.origin) {
            return;
        }
        window.addEventListener('load', () => {
            const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
            if (isLocalhost) {
                checkValidServiceWorker(swUrl, config);
                navigator.serviceWorker.ready.then(() => {
                    console.log('This web app is being served cache-first by a service ' +
                        'worker. To learn more, visit https://bit.ly/CRA-PWA');
                });
            }
            else {
                registerValidSW(swUrl, config);
            }
        });
    }
}
exports.register = register;
function registerValidSW(swUrl, config) {
    navigator.serviceWorker
        .register(swUrl)
        .then(registration => {
        registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            if (installingWorker == null) {
                return;
            }
            installingWorker.onstatechange = () => {
                if (installingWorker.state === 'installed') {
                    if (navigator.serviceWorker.controller) {
                        console.log('New content is available and will be used when all ' +
                            'tabs for this page are closed. See https://bit.ly/CRA-PWA.');
                        if (config && config.onUpdate) {
                            config.onUpdate(registration);
                        }
                    }
                    else {
                        console.log('Content is cached for offline use.');
                        if (config && config.onSuccess) {
                            config.onSuccess(registration);
                        }
                    }
                }
            };
        };
    })
        .catch(error => {
        console.error('Error during service worker registration:', error);
    });
}
function checkValidServiceWorker(swUrl, config) {
    fetch(swUrl)
        .then(response => {
        const contentType = response.headers.get('content-type');
        if (response.status === 404 ||
            (contentType != null && contentType.indexOf('javascript') === -1)) {
            navigator.serviceWorker.ready.then(registration => {
                registration.unregister().then(() => {
                    window.location.reload();
                });
            });
        }
        else {
            registerValidSW(swUrl, config);
        }
    })
        .catch(() => {
        console.log('No internet connection found. App is running in offline mode.');
    });
}
function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
            registration.unregister();
        });
    }
}
exports.unregister = unregister;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZVdvcmtlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvc2VydmljZVdvcmtlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVlBLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FDekIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEtBQUssV0FBVztJQUV0QyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxPQUFPO0lBRXBDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FDNUIsd0RBQXdELENBQ3pELENBQ0osQ0FBQztBQU9GLFNBQWdCLFFBQVEsQ0FBQyxNQUFlO0lBQ3RDLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssWUFBWSxJQUFJLGVBQWUsSUFBSSxTQUFTLEVBQUU7UUFFekUsTUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQ3RCLE9BQThDLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFDOUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3JCLENBQUM7UUFDRixJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFJL0MsT0FBTztTQUNSO1FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDbkMsTUFBTSxLQUFLLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsb0JBQW9CLENBQUM7WUFFNUQsSUFBSSxXQUFXLEVBQUU7Z0JBRWYsdUJBQXVCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUl2QyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO29CQUN0QyxPQUFPLENBQUMsR0FBRyxDQUNULHdEQUF3RDt3QkFDdEQscURBQXFELENBQ3hELENBQUM7Z0JBQ0osQ0FBQyxDQUFDLENBQUM7YUFD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