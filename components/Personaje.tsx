import { FunctionalComponent } from "preact/src/index.d.ts";
type hp = {
    id: string;
    name: string;
    house: string;
    image: string;
    species: string;
    gender: string;
    dateOfBirth: string;
    wizard: boolean;
    actor: string;
};
export type info = {
    data:hp
}
export const Personaje: FunctionalComponent<info> = (props) => {
    const datos = props.data;
    console.log(datos)
    return (
        <div class = "FichaPersonaje">
            <h2>{datos.name}</h2>
            <img src={datos.image} alt={datos.name} />
            <p><a href={`/House/${datos.house}`}>house: {datos.house}</a></p>
            <p>species: {datos.species}</p>
            <p>gender: {datos.gender}</p>
            <p>date of birth: {datos.dateOfBirth}</p>
            <p>wizard: {datos.wizard ? "Yes" : "No"}</p>
            <p>actor: {datos.actor}</p>
        </div>
    );
}