import ManualRollerResolver from "./lib/manual-roller-resolver.js";
import FACES from "./lib/manual-roller-resolver.js";
import DiceConfig from "./lib/manual-roller-config.mjs";

Hooks.once('init', () => {
    // FACES.forEach((item, _) => {
    //     game.settings.register("manual-roller", "d" + item + "roll", {
    //         name: "ManualRoller d" + item + "value",
    //         hint: "The value to roll everytime you roll a d" + item,
    //         scope: "client",
    //         config: true,
    //         requiresReload: false,
    //         type: Number,
    //         range: {
    //             min: 1,
    //             max: item,
    //             step: 1
    //         },
    //         default: 1,
    //         onChange: value => {
    //             console.log("Dice " + item);
    //             console.log(value);
    //         }
    //     });
    // });
    game.settings.register("manual-roller", "diceSettings", {
        config: false,
        default: {},
        type: Object,
        scope: "client"
    });

    game.settings.registerMenu("manual-roller", "configuration", {
        name: "ManualRoller configuration",
        label: "Configure dice",
        icon: "fa-solid fa-dice-d20",
        type: DiceConfig,
        restricted: false
    });

    CONFIG.dice.dieTypes = [
        { id: "d2", faces: 2, icon: "fa-dice-d2" },
        { id: "d4", faces: 4, icon: "fa-dice-d4" },
        { id: "d6", faces: 6, icon: "fa-dice-d6" },
        { id: "d8", faces: 8, icon: "fa-dice-d8" },
        { id: "d10", faces: 10, icon: "fa-dice-d10" },
        { id: "d12", faces: 12, icon: "fa-dice-d12" },
        { id: "d20", faces: 20, icon: "fa-dice-d20" },
        { id: "d100", faces: 100, icon: "fa-dice-d100" },
    ];
});

Hooks.once('unfulfilled-rolls-bluetooth', function(providers) {
    return foundry.utils.mergeObject(providers, {
        "manual-roller": {
            label: "ManualRoller",
            app: ManualRollerResolver
        }
    })
});
