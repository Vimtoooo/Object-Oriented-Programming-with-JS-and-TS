export class SmartDevice {

static totalDevices = 0;
  
  constructor(name) {
    this.name = name;
    this.isOn = false;
    
    SmartDevice.totalDevices++;
  }
  
  turnOn() {
    this.isOn = true;
  }
  
  turnOff() {
    this.isOn = false;
  }
  
  getStatus() {
    return `${this.name} is ${this.isOn ? 'ON' : 'OFF'}`;
  }
  
  static getDeviceCount() { return SmartDevice.totalDevices; }

}