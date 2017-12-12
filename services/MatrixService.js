import Creep from "../models/creeps/Creep";
import CreepWorker from "../models/creeps/CreepWorker";

export default class MatrixService {
    constructor() {
        let spawns = Game.spawns;
        for (let name in spawns) {
            if (spawns.hasOwnProperty(name)) {
                this.Matrix = Game.spawns[name];
            }
        }
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
        let Matrix = this.Matrix;
        try {
            //todo dos trabajadores por recurso
            CreepWorker.CrearTrabajador(Matrix);
        } catch (e) {
            console.log(e.message)
        }
    }

    /**
     * Manda a trabajar a todos los creepers
     * @constructor
     */
    TrabajosCreepers() {
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
                        default:
                            creepObject = new Creep(creep);
                            break;
                    }
                    creepObject.trabajar();
                }
            }
        }
    }
}