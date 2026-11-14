import * as Minecraft from "@minecraft/server";


Minecraft.world.beforeEvents.entityHurt.subscribe((event) => {
    if (event.hurtEntity.hasTag(`noDamage:${event.damageSource.cause.valueOf()}`)) {
        event.cancel = true;
    }
});