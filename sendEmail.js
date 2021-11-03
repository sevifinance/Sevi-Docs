import fetch from 'node-fetch'
import { templateNewVersion } from './assets/newVersion.js'
import * as fs from 'fs'
import { Remarkable } from 'remarkable';

var md = new Remarkable();

async function webhook() {

    fs.readFile('./blog/2021-11-03-welcome.md', 'utf8', async (err, data) => {
        const noheader = data.split("---")
        const markdownToHTML = md.render(noheader[2])
        const emailTemplate = templateNewVersion
            .replace("{markdownText}", markdownToHTML)
            .replace("{title}", "Sevi App release version 0.9.0")
            .replace(/\n/g, '')
            .replace(/"/g, "'")
        console.log('emailTemplate:', emailTemplate)

        const body = { customHtml: emailTemplate }
        // const urlFolder = process.node.NODE_ENV === 'development' ? "webhook-test" : "webhook"
        const response = await fetch(`https://n8n.sevi.io/webhook-test/80985a34-def1-4a17-8486-0ec239b23b90`, {
            method: 'post',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' }
        })
        // console.log('response:', response)
    });

}

webhook()