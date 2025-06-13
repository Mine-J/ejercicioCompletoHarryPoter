import { FunctionalComponent } from "preact/src/index.d.ts";

export const Buscador: FunctionalComponent = () => {
    return (
        <div class = "buscador">
            <form action="/Search" method="GET">
                <h2>Searcher</h2>
                <input type="text" name="name"/>
                <button type="button">Search</button>
            </form>
        </div>
    );
}