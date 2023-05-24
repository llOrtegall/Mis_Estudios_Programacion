const bars = document.querySelector('#bars');
const strengthDiv = document.querySelector('#strength');
const passwordInput = document.querySelector('#password');

const strength = {
    1: "weak",
    2: "medium",
    3: "strong",
}

const getIndicator = (password, value) => {
    for (
        let i = 0; i < password.length; i++
    ) {
        let char = password.charCodeAt(i);
        if (
            !value.upper && char >= 65 && char <= 90
        ) {
            value.upper = true;
        } else if (
            !value.numbers && char >= 48 && char <= 57
        ) {
            value.numbers = true;
        } else if (
            !value.lower && char >= 97 && char <= 122
        ) {
            value.lower = true;
        }
    }

    let indicator = 0;
    for (let metric in value) {
        if (value[metric] === true) indicator++;
    }
    return strength[indicator] ?? "";
}

const getStrength = (password) => {
    let strengthValue = {
        upper: false,
        numbers: false,
        lower: false,
    };
    return getIndicator(password, strengthValue);
}

const handleChange = () => {
    let { value: password } = passwordInput;

    console.log(password);

    const strenghText = getStrength(password);

    bars.classList = "";

    if (strenghText) {
        strengthDiv.innerText = 
        `${strenghText} password`;

        bars.classList.add(strenghText);
    }else{
        strengthDiv.innerText = "";
    }

}