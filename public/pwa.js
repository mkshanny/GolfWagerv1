// iOS Share Sheet Overlay
class iOSInstaller {
    constructor() {
        this.overlay = null;
        this.initialize();
    }

    initialize() {
        // Check if we're running in standalone mode (launched from home screen)
        if (window.matchMedia('(display-mode: standalone)').matches) {
            console.log('Running in standalone mode - no need to show install prompt');
            return;
        }

        // Check if device is mobile
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (!isMobile) {
            console.log('Not a mobile device - no need to show install prompt');
            return;
        }

        // Show overlay after 1 second
        setTimeout(() => {
            this.showInstallPrompt();
        }, 1000);
    }

    showInstallPrompt() {
        if (!this.overlay) {
            this.createOverlay();
        }
        this.overlay.style.display = 'flex';
    }

    hideInstallPrompt() {
        if (this.overlay) {
            this.overlay.style.display = 'none';
        }
    }

    createOverlay() {
        this.overlay = document.createElement('div');
        this.overlay.className = 'pwa-overlay';
        
        const content = `
            <div class="ios-overlay-content">
                <h2>Add Golf Wagers to your Home Screen</h2>
                <div class="ios-instructions">
                    <div class="ios-share-icon">
                        <img src="share-icon.png" alt="Share button">
                    </div>
                    <p>Tap the Share button below</p>
                    <p>and select "Add to Home Screen"</p>
                </div>
                <button id="close-btn">Got it!</button>
            </div>
        `;
        
        this.overlay.innerHTML = content;
        document.body.appendChild(this.overlay);

        // Add event listener
        this.overlay.querySelector('#close-btn').addEventListener('click', () => {
            this.hideInstallPrompt();
        });
    }
}

// Initialize the iOS installer when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new iOSInstaller();
});
