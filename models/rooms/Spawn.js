import CreepWorker from "../creeps/CreepWorker";
import CreepUpgrader from "../creeps/CreepUpgrader";
import Creep from "../creeps/Creep";
import CreepBuilder from "../creeps/CreepBuilder";

export default class Spawn {

    constructor(spawn) {
        this.me = spawn;
    }

    getMe() {
        return this.me;
    }

    /**
     * Inicializa a la colonia
     */
    init() {
        this.CreateNewCreeper();
        this.TrabajosCreepers();
    }

    /**
     * Proceso para multiplicar creepers
     * @constructor
     */
    CreateNewCreeper() {
        let Matrix = this.getMe();
        let creeps = Game.creeps;

        let cantidadWorkers = 0;
        let cantidadUpgraders = 0;
        let cantidadBuilders = 0;
        let resto = 0;

        for (let nameCreep in creeps) {
            if (creeps.hasOwnProperty(nameCreep)) {
                let creep = creeps[nameCreep];

                if (!!creep) {
                    switch (creep.memory.type) {
                        //todo los casos deberian de ser propiedades estaticas
                        case 'worker':
                            cantidadWorkers++;
                            break;
                        case 'upgrader':
                            cantidadUpgraders++;
                            break;
                        case 'builder':
                            cantidadBuilders++;
                            break;
                        default:
                            resto++;
                            break;
                    }
                }
            }
        }
        if (cantidadWorkers < 2) {
            try {
                CreepWorker.CrearTrabajador(Matrix);
            } catch (e) {
                console.log(e.message)
            }
        }
        if (cantidadUpgraders < 1) {
            try {
                CreepUpgrader.CrearTrabajador(Matrix);
            } catch (e) {
                console.log(e.message)
            }
        }
        if (cantidadBuilders < 1) {
            try {
                CreepBuilder.CrearTrabajador(Matrix);
            } catch (e) {
                console.log(e.message)
            }
        }
    }

    /**
     * Manda a trabajar a todos los creepers
     * @constructor
     */
    TrabajosCreepers() {
        let Matrix = this.getMe();
        let creeps = Game.creeps;

        for (let nameCreep in creeps) {
            if (creeps.hasOwnProperty(nameCreep)) {
                let creep = creeps[nameCreep];

                if (!!creep) {

                    let creepObject = null;

                    switch (creep.memory.type) {
                        //todo los casos deberian de ser propiedades estaticas
                        case 'worker':
                            creepObject = new CreepWorker(creep);
                            break;
                        case 'upgrader':
                            creepObject = new CreepUpgrader(creep);
                            break;
                        case 'builder':
                            creepObject = new CreepBuilder(creep);
                            break;
                        default:
                            creepObject = new Creep(creep);
                            break;
                    }
                    creepObject.setSpawn(Matrix);
                    creepObject.trabajar();
                }
            }
        }
    }

}