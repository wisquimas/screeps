import Spawn from "../models/rooms/Spawn";

export default class MatrixService {
    constructor() {
        this.iniciarSpawns();
    }

    /**
     * Inicializa los spawns
     */
    iniciarSpawns() {
        let spawns = Game.spawns;
        let objectSpawns = [];
        for (let name in spawns) {
            if (spawns.hasOwnProperty(name)) {
                let newSpawn = Game.spawns[name];
                objectSpawns.push(new Spawn(newSpawn));
            }
        }
        this.setSpawns(objectSpawns);
    }

    /**
     * Setea los spawns
     * @param spawns
     */
    setSpawns(spawns) {
        this.spawns = spawns;
    }

    /**
     * Get spawns
     * @returns {*}
     */
    getSpawns() {
        return this.spawns;
    }

    /**
     * Inicializa a la colonia
     */
    init() {
        let spawns = this.getSpawns();
        spawns.forEach(function (spawn) {
            spawn.init();
        })
    }
}