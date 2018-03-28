import { Controller } from "stimulus"

export default class extends Controller {
    showMessage() {
        var event = new CustomEvent('display-flash', {
            detail: {
                level: "success",
                message: 'Successful event',
            },
            bubbles: true,
            cancelable: true
        });
        document.body.dispatchEvent(event);
    }
}