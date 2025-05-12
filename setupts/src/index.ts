class User {
  // email: string;
  // username: string;
  readonly phone: number = 1;
  private courseCount: number = 1;

  constructor(public email: string, private username: string) {
    this.email = email;
    this.username = username;
  }

  get courseCC(): string {
    return `This is a getter for ya ${this.courseCount}`;
  }

  set ccVal(num: number) {
    this.courseCount = num;
  }
}

const hero = new User("hero@mail.com", "hero");

interface camera {
  rearCamera: string;
  frontCamera: string;
  photosPerMin: number;
  getexactPhoto(): number;
}

class mobile implements camera {
  // rearCamera: string;
  // frontCamera: string;
  // photosPerMin: number;
  getexactPhoto(): number {
    return 10000;
  }
  constructor(
    public rearCamera: string,
    public frontCamera: string,
    public photosPerMin: number
  ) {
    this.frontCamera = frontCamera;
    this.rearCamera = rearCamera;
    this.photosPerMin = photosPerMin;
  }
}



// abstract class
abstract class TakePhoto {
    constructor(public howManyPhoto: number, public device: string) {
        console.log(howManyPhoto, device);
    }

    abstract getAiele(): void;
    getReelTime(): number{
        // Lots of login return over here
        return 8;
    }
}

class instagram extends TakePhoto {
    // public howManyPhoto: number
    // device: string;
    public filter: boolean;
    constructor(photoCount: number, device: string, filter: boolean) {
        super(photoCount, device);
        this.filter = filter;
    }

    getAiele(): void {
        
    }

    getReelTime(): number {
        return 8;
    }
}

function indentityOne<Type> (val: Type): Type {
    return val;
}

indentityOne("true")
indentityOne(1)

function indetityTwo<T>(val: T): T{
    return val;
}

const variable=<T>  (val: T) => {
    return val;
}

function getUserId<T> (users: T[]) : T {
    return users[1];
}

const getData = <T> (data: Array<T>): T => {
    return data[2];
}


interface database {
    connection: string,
    password: string,
    username: string,
}


function generics<T, U extends database> (val: T, data: U) : object {
    return {
        message: "Hola"
    }
}

generics(1, {connection: "mongostring", password: "atlaspassword", username: "HOLA"} )

function narrowing(data: string | number | null): number | string {
    if(typeof data === "string") {
        return data.toUpperCase();
    }
    if(data) return data + 10;
    
}