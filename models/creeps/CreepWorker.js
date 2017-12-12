import Creep from "./Creep";
export default class CreepWorker extends Creep {
    trabajar() {
        let creep = this.getMe();

        if (creep.carry.energy < creep.carryCapacity) {
            let sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        } else {
            if (creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Spawn1']);
            }
        }
    }

    static CrearTrabajador(Spawn) {
        Spawn.createCreep([WORK, CARRY, MOVE, MOVE], undefined, {
            type: 'worker',
            trabajando: false
        });
    }
}