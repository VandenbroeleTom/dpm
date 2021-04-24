class Notifier {

    public permission = Notification.permission === "granted";

    async requestPermission() {
        const permission = await Notification.requestPermission();
        this.permission = permission === "granted";
        return this.permission;
    }

    notify(title: string) {
        if (!this.permission) {
            return;
        }

        return new Notification(title);
    }

}

export default new Notifier()
