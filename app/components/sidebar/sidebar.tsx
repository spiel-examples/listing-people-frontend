import {h} from "spiel-client";
import {IPerson, ISidebar} from "../../helpers";

export function Sidebar({people}: ISidebar) {
    const countPeople = people.length;
    const superPower = people.filter((person) => person.superPower);
    const rich = people.filter((person) => person.rich);
    const genius = people.filter((person) => person.genius);

    const skills = (
        <div>
            <p>With Super Power {superPower.length}</p>
            <p>Rich {rich.length}</p>
            <p>Genius {genius.length}</p>
        </div>
    );

    return (
        <div>
            <h1>Sidebar</h1>
            <h2>Total People {countPeople}</h2>
            {countPeople ? skills : null}
        </div>
    );
}
