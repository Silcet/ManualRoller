export default class DiceConfig extends FormApplication {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            id: "manual-roller-config",
            template: "modules/manual-roller/templates/manual-roller-config.hbs",
            title: "ManualRoller configuration",
            popOut: true,
            width: 720,
            submitOnChange: false,
            submitOnClose: false,
            closeOnSubmit: true
        });
    }

    /** @override */
    async getData(options = {}) {
        const context = await super.getData(options);

        const config = game.settings.get("manual-roller", "diceSettings");
        const dieTypes = CONFIG.Dice.DieTypes;
        for (const dieType of dieTypes) {
            dieType.value = config[dieType.id] || 1;
        }
        context.dieTypes = dieTypes;

        return context;
    }

    /** @override */
    async _updateObject(event, formData) {
        const config = game.settings.get("manual-roller", "diceSettings");
        for (const [dieType, value] of Object.entries(formData)) {
            config[dieType] = value;
        }
        await game.settings.set("manual-roller", "diceSettings", config);
    }
}
