import { Controller } from "stimulus"

export default class extends Controller {
    static get targets() {
        return ["flash"]
    }

    connect() {
        const flash = this.flashTarget;

        if (this.level !== '') {
            flash.classList.add("alert-" + this.level);
            flash.classList.remove("hide");

            setTimeout(() => {
                flash.classList.add("hide");
                flash.innerHTML = '';
                flash.classList.remove("alert-" + this.level);
                this.level = '';
            }, 10000);
        }
    }

    get level() {
        return this.data.get("level");
    }

    set level(value) {
        this.data.set("level", value)
    }
}