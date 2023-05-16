
export function SetHulkTheme(){
    var r = document.querySelector(':root');
    
    const lightGreen = '#9bc063';
    const darkGreen = '#455d3b';
    const darkPurple = '#5a4862';

    //@ts-ignore
    r!.style.setProperty('--accentcolourpurpleNonStatic', darkGreen);
    //@ts-ignore
    r!.style.setProperty('--accentcolouryellowNonStatic', darkPurple );
    //@ts-ignore
    r!.style.setProperty('--accentcolourredNonStatic', darkGreen);
    //@ts-ignore
    r!.style.setProperty('--backgroundcolor', lightGreen);
    //@ts-ignore
    r!.style.setProperty('--componentbackgroundNonStatic', darkPurple);

}

export function SetThorTheme(){

}

export function SetCaptainAmericaTheme(){

}