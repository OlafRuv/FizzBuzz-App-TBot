const ExplorerService = require("./../services/ExplorerService");
const FizbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");

class ExplorerController{
    static getExplorersbyMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInMission = ExplorerService.filterByMission(explorers,mission);
        return explorersInMission;
    }

    static getExplorersbyMissionsString(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInMission = ExplorerService.getExplorersUsernamesByMission(explorers,mission);
        const explorersString = JSON.stringify(explorersInMission);
        return explorersString;
    }

    static getExplorersUsernamebyMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersUsernameInMission = ExplorerService.getExplorersUsernamesByMission(explorers,mission);
        return explorersUsernameInMission;
    }

    static getExplorersAmountbyMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersAmountInMission = ExplorerService.getAmountOfExplorersByMission(explorers,mission);
        return explorersAmountInMission;
    }

    static fizzbuzzValidationNumber(num){
        const result = FizbuzzService.applyValidationInNumber(num);
        return result;
    }
}

module.exports = ExplorerController;