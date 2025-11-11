const messages = [
    "do not click this.",
    "i said, do not click it!",
    "makulit ka talaga ‘no? didn’t i tell you not to click the button?",
    "fine, whatever! since you’re stubborn, read this letter."
];

const letterPages = [
    `<strong>my dearest nini,</strong>

    i owe you words i should have spoken long ago, and for that, i beg your forgiveness. i have been gone, and i cannot excuse it that left you wondering. i am not stable, nini, and caught in my own struggles, i found it necessary to keep myself away. and i could not, would not, let my own struggles burden you.

    i know that we’ve already spoken about it, and we made everything clear that we would forget it and move on but the guilt has still consumed me. the weight of my mistakes are still with me, it lingers in my thoughts i cannot easily push away. i keep replaying my mistakes, wondering that i’ve done too much, i’ve crossed a line, i’ve harmed you. and though i know you have forgiven and forgotten, i cannot help but carry this weight with me. i need time to face it, to make sense of it within myself, so that when i return, i can truly be present and free of these burdens.`,

    `i am sorry, truly sorry, for leaving without a word, nini. know that it was never a reflection of you, nor ever your doing. do not think, not for a moment, that it is in any way your fault that i am like this. you are to blame for nothing. do not apologize, do not condemn yourself. all that i carry, all that i wrestle with, exists within me alone.

    and yet, in my absence, i must thank you. thank you for your kindness, your patience, and for being a friend whose presence has been nothing short of a gift. i am grateful beyond measure that i got to meet you, that i got to be part of your life, however briefly it may seem.`,

    `alanis, my feelings for you exist. my feelings for you existed even before you knew, even before i became aware of them myself. i do not deserve the name of your friend, for i have carried this all along. but i am not hoping for anything in return, nor reciprocations, and i would never wish to interfere in your life or your relationship. you deserve happiness with your partner, and nothing more from me than friendship. to love, yet to hold back, to embrace only as a friend, this is the contradiction i live with.`,

    `you are precious to me, nini, as a flower is precious in the garden. even the most beautiful blossom, if plucked thoughtlessly, loses something of its life. i fear that i have been that careless hand. i have admired you, and yet in doing so, i may have touched you in ways i should not have. perhaps, in the end, i am like my father said, everything i touch, i ruin. and for that, i would never forgive myself if i harmed someone as radiant as you. i will not let it happen again.

    i shall return, nini. and i hope, when i do, that i will be healed enough to be the friend you deserve, free from the struggles that now keep me at bay.

    until then, know that you are cherished, admired, and held in my thoughts with a care i cannot fully express.

    with sincerity that time nor distance can diminish,
    <em>lili.</em>`
];

const spotifyLink = "https://open.spotify.com/playlist/2bk42akwUDECIuYD6GCnH5?si=ZR_6XjpfQZ2KqMYmz0li5g&pt=6c86de22de06d70d5b8a7980b9508f82";

const messageElement = document.getElementById("message");
const button = document.getElementById("mainButton");
const letterContainer = document.getElementById("letterContainer");
const letterText = document.getElementById("letterText");
const nextButton = document.getElementById("nextButton");

let clickCount = 0;
let pageIndex = 0;

button.addEventListener("click", () => {
    if (clickCount < messages.length - 1) {
        messageElement.textContent = messages[clickCount];
        button.textContent = "do not click this again!";
        clickCount++;
    } else if (clickCount === messages.length - 1) {
        messageElement.textContent = messages[clickCount];
        button.textContent = "read the letter.";
        clickCount++;
    } else {
        messageElement.classList.add("hidden");
        button.classList.add("hidden");
        letterContainer.classList.remove("hidden");
        letterText.innerHTML = letterPages[pageIndex];
        nextButton.classList.remove("hidden");
        nextButton.textContent = "next";
        nextButton.removeEventListener("click", goToSpotify);
    }
});

nextButton.addEventListener("click", () => {
    pageIndex++;
    if (pageIndex < letterPages.length) {
        letterText.innerHTML = letterPages[pageIndex];
        if (pageIndex === letterPages.length - 1) {
            nextButton.textContent = "done";
            nextButton.removeEventListener("click", showNextPage);
            nextButton.addEventListener("click", goToSpotify);
        }
    }
});

function showNextPage() {
    pageIndex++;
    if (pageIndex < letterPages.length) {
        letterText.innerHTML = letterPages[pageIndex];
    }
}

function goToSpotify() {
    window.location.href = spotifyLink;
}