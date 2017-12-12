import Creep from "./Creep";
export default class CreepUpgrader extends Creep {
    trabajar() {
        let creep = this.getMe();

        if (creep.carry.energy === 0) {
            let sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        } else {
            if (creep.upgradeController(creep.room.controller) === ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
    }

    static CrearTrabajador(Spawn) {
        Spawn.createCreep([WORK, CARRY, MOVE, MOVE], undefined, {
            type: 'upgrader',
        });
    }
}