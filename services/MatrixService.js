import Spawn from "../models/rooms/Spawn";

export default class MatrixService {
    constructor() {
        //todo iniciar rooms
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
        this.LimpiarMemoria();
        //todo por cada room debe de haber un spawn
        let spawns = this.getSpawns();
        spawns.forEach(function (spawn) {
            spawn.init();
        })
    }

    LimpiarMemoria() {
        for (let name in Memory.creeps) {
            if (Memory.creeps.hasOwnProperty(name)) {
                if (!Game.creeps[name]) {
                    delete Memory.creeps[name];
                }
            }
        }
    }
}