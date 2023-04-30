import { GoalPlacement } from "../game-objects/GoalPlacement";
import { HeroPlacement } from "../game-objects/HeroPlacement";
import { PLACEMENT_TYPE_GOAL, PLACEMENT_TYPE_HERO } from "../helpers/consts";

class PlacementFactory {
    createPlacement(config, level) {
        const instance = this.getInstance(config, level);
        // Generate unique ID here...
        return instance;
    }

    getInstance(config, level) {
        switch (config.type) {
            case PLACEMENT_TYPE_HERO:
                return new HeroPlacement(config, level)
            case PLACEMENT_TYPE_GOAL:
                return new GoalPlacement(config, level)
        
            default:
                console.warn("No type found!", config.type)
                return null;
        }
    }
}

export const placementFactory = new PlacementFactory();