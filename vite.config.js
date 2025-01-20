import {resolve} from 'path' 
export default{
    css:{
        devSourcemap: true
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                ejeA: resolve(__dirname, 'src/pages/ejercicio-a/ejercicio-a.html'),
                ejeB: resolve(__dirname, 'src/pages/ejercicio-b/ejercicio-b.html'),
                ejeC: resolve(__dirname, 'src/pages/ejercicio-c/ejercicio-c.html'),
                ejeD: resolve(__dirname, 'src/pages/ejercicio-d/ejercicio-d.html')
            }    
        }
    }
}