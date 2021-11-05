import fetch from 'node-fetch'
import { templateNewVersion } from './assets/newVersion.js'
import * as fs from 'fs'
import { Remarkable } from 'remarkable';

var md = new Remarkable();

const fileToCreateEmailFrom = './blog/2021-11-03-welcome.md'

async function webhook() {
    fs.readFile(fileToCreateEmailFrom, 'utf8', async (err, data) => {
        const noheader = data.split("---")
        const markdownToHTML = md.render(noheader[2])

        fs.readFile('../Sevi-Mobile/package.json', async (err, data) => {
            if (err)
                console.log(err);
            else {
                var json = JSON.parse(data);
                const emailTemplate = templateNewVersion
                    .replace("{markdownText}", markdownToHTML)
                    .replace("{title}", `Sevi App release ${json.version}`)
                    .replace(/\n/g, '')
                    .replace(/"/g, "'")

                const body = { customHtml: emailTemplate, subject: `Sevi Update > ${json.version}` }

                const response = await fetch(`https://n8n.sevi.io/webhook/80985a34-def1-4a17-8486-0ec239b23b90`, {
                    method: 'post',
                    body: JSON.stringify(body),
                    headers: { 'Content-Type': 'application/json' }
                })
            }
        })


    });

}

webhook()