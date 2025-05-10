"use strict";
class User {
    constructor(email, username) {
        this.email = email;
        this.username = username;
        // email: string;
        // username: string;
        this.phone = 1;
        this.courseCount = 1;
        this.email = email;
        this.username = username;
    }
    get courseCC() {
        return `This is a getter for ya ${this.courseCount}`;
    }
    set ccVal(num) {
        this.courseCount = num;
    }
}
const hero = new User("hero@mail.com", "hero");
class mobile {
    // rearCamera: string;
    // frontCamera: string;
    // photosPerMin: number;
    getexactPhoto() {
        return 10000;
    }
    constructor(rearCamera, frontCamera, photosPerMin) {
        this.rearCamera = rearCamera;
        this.frontCamera = frontCamera;
        this.photosPerMin = photosPerMin;
        this.frontCamera = frontCamera;
        this.rearCamera = rearCamera;
        this.photosPerMin = photosPerMin;
    }
}
// abstract class
class TakePhoto {
    constructor(howManyPhoto, device) {
        this.howManyPhoto = howManyPhoto;
        this.device = device;
        console.log(howManyPhoto, device);
    }
    getReelTime() {
        // Lots of login return over here
        return 8;
    }
}
class instagram extends TakePhoto {
    constructor(photoCount, device, filter) {
        super(photoCount, device);
        this.filter = filter;
    }
    getAiele() {
    }
    getReelTime() {
        return 8;
    }
}
