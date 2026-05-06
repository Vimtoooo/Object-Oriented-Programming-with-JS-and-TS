import { Weapon } from "./weapon.js";

export class Character {
  public name: string;
  public health: number;
  public weapon: Weapon | null;

  constructor(name: string) {
    this.name = name;
    this.health = 100;
    this.weapon = null; // Composition: Character can have a weapon
  }
  
  takeDamage(amount: number): void {
    this.health -= amount;
    console.log(`${this.name} takes ${amount} damage`);
  }
  equipWeapon(weapon: Weapon): void {
    this.weapon = weapon;
    console.log(`${this.name} equipped ${weapon.name}`);
  }
  
  attack(): void {
    if (this.weapon) {
      console.log(`${this.name} attacks with ${this.weapon.name} for ${this.weapon.damage} damage`);
    } else {
      console.log(`${this.name} punches for 5 damage`);
    }
  }
}