import { Controller } from "stimulus"

export default class extends Controller {
    static get targets() {
        return ["flash"];
    }

    connect() {
        const flash = this.flashTarget;
        var controller = this;
        
        document.body.addEventListener('display-flash', function (e) {
            show(controller, e);
        }, false);

        if (controller.level !== '') {
            flash.classList.add("alert-" + controller.level);
            flash.classList.remove("hide");

            controller.clear();
        }
    }

    show(level, message) {
        const flash = this.flashTarget;

        flash.classList.add("alert-" + level);
        flash.classList.remove("hide");

        this.level = level;
        flash.innerHTML = message;
    }

    clear() {
        const flash = this.flashTarget;

        setTimeout(() => {
            flash.classList.add("hide");
            flash.classList.remove("alert-" + this.level);
            
            flash.innerHTML = '';
            this.level = '';
        }, 5000);
    }

    get level() {
        return this.data.get("level");
    }

    set level(value) {
        this.data.set("level", value);
    }
}

function show(flash, e)
{
    flash.show(e.detail.level, e.detail.message);
    flash.clear();
}