import { FunctionalComponent } from "preact/src/index.d.ts";

export const Header: FunctionalComponent = () => {
    return (
        <div class="Header">
            <h1>Harry Potter</h1>
            <a href="/Search">Search</a>
            <a href="/Characters">Characters</a>
            <a href="/Favoritos">Favorites</a>
            <a href="/Profile">Profile</a>
        </div>
    );
}