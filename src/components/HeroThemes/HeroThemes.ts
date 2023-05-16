
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

    var r = document.querySelector(':root');

    const blueGray = '#e2eeed';
    const gray = '#dadada';
    const red = '#b80000';
    const darkRed = '#5f0e0e';
    const darkBrown = '#363131';



        //@ts-ignore
        r!.style.setProperty('--accentcolourpurpleNonStatic', darkBrown);
        //@ts-ignore
        r!.style.setProperty('--accentcolouryellowNonStatic', red );
        //@ts-ignore
        r!.style.setProperty('--accentcolourredNonStatic', darkBrown);
        //@ts-ignore
        r!.style.setProperty('--backgroundcolor', gray);
        //@ts-ignore
        r!.style.setProperty('--componentbackgroundNonStatic', darkRed);

}

export function SetCaptainAmericaTheme(){

    var r = document.querySelector(':root');


    const blue = '#0000ff';
    const darkBlue = '#002d5c';
    const red = '#870000';
    const darkGray = '#a5a5ab';
    const lightGray = '#f0f0f7';

        //@ts-ignore
        r!.style.setProperty('--accentcolourpurpleNonStatic', red);
        //@ts-ignore
        r!.style.setProperty('--accentcolouryellowNonStatic', blue );
        //@ts-ignore
        r!.style.setProperty('--accentcolourredNonStatic', red);
        //@ts-ignore
        r!.style.setProperty('--backgroundcolor', darkBlue);
        //@ts-ignore
        r!.style.setProperty('--componentbackgroundNonStatic', darkGray);

}