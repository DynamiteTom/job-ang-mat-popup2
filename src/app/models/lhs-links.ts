export interface LhsLinkImg{
    img: string;
    instn: string;
}

export class LhsLinks {
    lhsList: LhsLinkImg[] = [];

    constructor(){
        this.lhsList = [
            {img: "assets/images/secure1.jpg" , instn: "Secure payments through reliable partners"},
            {img: "assets/images/fast1.jpg", instn: "Fast transfers"},
            {img: "assets/images/fair1.jpg", instn: "Fair commisions"},
            {img: "assets/images/bestRates1.jpg", instn: "Best available rates"},
            {img: "assets/images/convenience1.jpg", instn:"Convenience"}
     ];
    }
}
