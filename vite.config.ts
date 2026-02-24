import {defineConfig} from "vite"
import checker from "vite-plugin-checker"
import {analyzer} from "vite-bundle-analyzer"
import compression from "vite-plugin-compression"


export default defineConfig ({
    plugins: [
        checker({typescript: true}), 
        analyzer({
            analyzerMode: "static",
            openAnalyzer: false,
            reportTitle: "Bundle Analysis",
            fileName: "bundle-report.html"
        }),
        compression({algorithm: "gzip"}),
        compression({algorithm: "brotliCompress"})
    ]
    //nos comprueba los errores de typescript en la consola 
})