///<reference path="htmlRenderer.ts" />
///<reference path="stringRenderer.ts" />
///<reference path="selfClosingRenderer.ts" />
///<reference path="docTypeRenderer.ts" />
///<reference path="listRenderer.ts" />
class RendererProvider {
    renderers: any[];
    constructor() {
        this.renderers = [];
        this.renderers.push(new HtmlRenderer());
        this.renderers.push(new StringRenderer());
        this.renderers.push(new SelfClosingRenderer());
        this.renderers.push(new DocTypeRenderer());
        this.renderers.push(new ListRenderer());
    }

    getRenderer(type: string) : any {
        for (var i in this.renderers) {
            for (var g in this.renderers[i].elements) {
                if (type == this.renderers[i].elements[g]) {
                    return this.renderers[i];
                }
            }
        }

        return this.getRenderer("*");
    }
}