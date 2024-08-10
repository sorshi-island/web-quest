class WebQuestSubAdapter extends questAdapter
{
    async loadCss(cssPath) {
        const cssContent = await fetch(this.questPath+'/style.css');
        document.head.insertAdjacentHTML('beforeend', `<style>${cssContent}</style>`);
    }

    async loadScript(scriptPath) {
        console.dir('Loaded first 2 stages script')
        let response = await fetch(this.questPath+'/scripts/script.js');
        let scriptContent = await response.text();
        let scriptElement = document.createElement('script');
        scriptElement.textContent = scriptContent;
        this.questElement.appendChild(scriptElement);

        console.dir('Loaded desktop stages script')
         response = await fetch(this.questPath+'/scripts/desktop.js');
         scriptContent = await response.text();
         scriptElement = document.createElement('script');
        scriptElement.textContent = scriptContent;
        this.questElement.appendChild(scriptElement);
    }

    async startQuest() {
        bind(this)
    }
}