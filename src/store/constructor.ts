import {defineStore} from "pinia";
import {convertStringToSCSSVariables} from "@/assets/helpers/stringToSCSSVariables";

export const useConstructorStore = defineStore({
    id: 'Constructor',
    state: () => ({
        head: `<meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>` as string,
        html: ``,
        styles: ``,
        vars: null as Record<string, string>[] | null,
    }),
    getters: {
        getHead(): string {
            return this.head
        },
        getStyles(): string {
            return this.styles
        },
        getVars(): Record<string, string>[] | null {
            return this.vars
        },
        getHtml(): string {
            return `<!doctype html>
              <html lang="en">
              <head>
                ${this.head}
              </head>
                <style>
                  ${this.styles}
                </style>
              <body>
                <div class="holst">
                  <h1>HOLST</h1>
                </div>
              </body>
              </html>`
        }
    },
    actions: {
        setVars(vars: Record<string, string>[] | null){
            this.vars = vars
        },
        removeVars(key: string) {
            if(this.vars){
                this.vars = this.vars.filter(item => item.key !== key)
            }
        }
    }
})