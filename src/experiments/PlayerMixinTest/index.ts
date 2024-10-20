type Constructor<T = {}> = new (...args: any[]) => T

const Warrior = <T extends Constructor>(Base: T) =>
    class extends Base {
        #args: any[]
        #say = "attaaack!"

        constructor(...args: any[]) {
            super()
            this.#args = args
        }

        attack() {
            const [name] = this.#args
            console.log(`I, ${name} say ${this.#say}`)
        }
    }

class Player {
    constructor(_name: string) {}
}

const player = new (Warrior(Player))("Vasil")
player.attack()
