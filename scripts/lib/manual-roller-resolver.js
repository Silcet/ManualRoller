export const FACES = [2, 4, 6, 8, 10, 12, 20, 100];

export default class ManualRollerResolver extends FormApplication {
    constructor(terms, roll, callback) {
        super({});
        this.terms = terms;
        this.roll = roll;
        this.callback = callback;
    }

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            id: "manual-roller-resolver",
            template: "modules/manual-roller/templates/manual-resolver.hbs",
            title: "ManualRoller Resolver",
            popOut: true,
            width: 720,
            submitOnChange: false,
            closeOnSubmit: true
        });
    }

    /** @override **/
    async getData(options = {}) {
        const context = await super.getData(options);

        context.terms = this.terms;
        context.roll = this.roll;

        return context;
    }

    /** @override **/
    async _updateObject(event, formData) {
        const fulfilled = new Map();
        FACES.forEach((item, _) => {
            const url = game.settings.get("manual-roller", "d" + item);
            cosole.log("Read " + url + " for d" + item);
        });
        for (const [id, result] of Object.entries(formData)) {
            fulfilled.set(id, Number(result))
        }
    }
}
