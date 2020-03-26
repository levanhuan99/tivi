let Remote =function () {
    this.control=function (tivi,number) {
        tivi.chennal=number;
    }
    this.sound=function (tivi,number) {
        return tivi.sound+number;
    }
    this.turnOn=function (tivi) {
        tivi.status=true;
        return tivi.status;
    }
    this.turnOff=function (tivi) {
        tivi.status=false;
        return tivi.status;
    }


    this.checkChennal=function (tivi) {
        return tivi.chennal;

    }
}