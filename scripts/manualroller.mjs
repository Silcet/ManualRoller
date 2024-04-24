import ManualRollerResolver from "./lib/manual-roller-resolver.js";
import FACES from "./lib/manual-roller-resolver.js";

Hooks.once('init', () => {
    FACES.forEach((item, _) => {
        game.settings.register("manual-roller", "d" + item + "roll", {
            name: "ManualRoller d" + item + "value",
            hint: "The value to roll everytime you roll a d" + item,
            scope: "client",
            config: true,
            requiresReload: false,
            type: Number,
            range: {
                min: 1,
                max: item,
                step: 1
            },
            default: 1,
            onChange: value => {
                console.log("Dice " + item);
                console.log(value);
            }
        });
    });
});

Hooks.once('unfulfilled-rolls-bluetooth', function(providers) {
    return foundry.utils.mergeObject(providers, {
        "manual-roller": {
            label: "ManualRoller",
            app: ManualRollerResolver
        }
    })
});
