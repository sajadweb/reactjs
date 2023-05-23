

class KeyValuePair<T,U>
{ 
    public key: T;
    private val: U;

    setKeyValue(key: T, val: U): void { 
        this.key = key;
        this.val = val;
    }

    display():void { 
        console.log(`Key = ${this.key}, val = ${this.val}`);
    }
}




interface KeyPair<T, U> {
  key: T;
  value: U;
}
interface KeyPair1 {
    key: string;
    value: number;
  }
  interface KeyPair2 {
    key: number;
    value: string;
  }
  
const a: KeyPair<string, number> = { key: "1", value: 12345 };
const b: KeyPair<number, string> = { key: 1, value: "12345" };
const c: KeyPair<boolean, string> = { key: true, value: "12345" };
