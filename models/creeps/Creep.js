import Model from "../Model";
export default class Creep extends Model {
    /**
     * @param creep
     */
    constructor(creep) {
        super();
        this.creep = creep;
    }

    getMe() {
        return this.creep;
    }

    trabajar() {
        console.log('No tengo chamba tio')
    }

    setSpawn(spawn) {
        this.spawn = spawn;
    }

    getSpawn() {
        return this.spawn;
    }
}