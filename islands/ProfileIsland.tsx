import { FunctionalComponent } from "preact/src/index.d.ts";
export type props = {
    data:string
}
export const ProfileIsland: FunctionalComponent<props> = (props) => {
    const nombre = props.data;
    const cerrarSesion = (e:Event) => {
        e.preventDefault();
        const date = new Date();
        date.setFullYear(date.getFullYear() - 1);
        document.cookie = `name=; expires=${date}; path=/;`
        globalThis.location.href = "/login"
    }
    return (
        <div class = "CajaPerfil">
            <p>Username: {nombre}</p>
            <button type="button" onClick={(e) => cerrarSesion(e)}>Cerrar Sesion</button>
        </div>
    );
    
}