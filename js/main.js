function setup() {
    canvas = createCanvas(document.getElementById('canvas').clientWidth, document.getElementById('canvas').clientHeight);
    canvas.parent('canvas');
    slotWidth = width * 0.22;
    slotHeight = height * 0.42;
    frameRate(60);
    slotImages = [slotImage0, slotImage1, slotImage2, slotImage3, slotImage4, slotImage5, slotImage6, slotImage7];
    slotImageCounter = 0;
    slotImageCounter2 = 1;
    slot1X = width * 0.09;
    slot2X = width * 0.32;
    slot3X = width * 0.55;
    slot1Y = 0;
    slot2Y = 0;
    sign1Loop = true;
    sign2Loop = false;
    slot1Loop = false;
    slot2Loop = false;
    slot3Loop = false;
    speedY = 45;
    stop = false;
    setTimeout(function () {
        stop = true
    }, 2000);
    stopSlot1 = false;
    stopSlot2 = false;
    stopSlot3 = false;
    slotSavedY = height * 0.5;
    slotsCounter = 0;
    leverStatus = 1;
    leverX = width * 0.855;
    leverY = height * 0.37;
    leverWidth = width * 0.13;
    leverHeight = height * 0.6;
    spinSound = new Audio("../audio/spin.mp3");
    spinSound.volume = 0.1;
    spinSound.loop = true;
    leverSound = new Audio("../audio/lever.mp3");
    slotSound = new Audio("../audio/win.mp3");
    loseSound = new Audio("../audio/no-money.mp3");
    if (bet < 0) {
        bet = bet * (-1);
    }
    money = bet;
    moneyMinus = bet / 3;
    document.getElementById("name").innerHTML = "Name: " + name + "<br>";
    document.getElementById("bet").innerHTML = "Bet: " + bet + "<br>";
    document.getElementById("money").innerHTML = "Money left: " + money;
    firstStart = true;
    slot1SavedCounter = 0;
    slot2SavedCounter = 0;
    slot3SavedCounter = 0;
}

function update() {
    if (!slot1Loop && !slot2Loop && !slot3Loop && !firstStart) {

        if (slot1SavedCounter == slot2SavedCounter & slot2SavedCounter == slot3SavedCounter ) {
            setTimeout(function(){ window.location.replace("endWin.php");}, 3000);
            setTimeout(function(){ slotSound.play();}, 1000);
            noLoop();
        }
        slotsCounter += 3;
        spinSound.pause();
        if (slotsCounter < slots.length - 1) {
            leverStatus = 1;
            leverSound.play();
        }
        else {
            setTimeout(function(){ window.location.replace("endLose.php");}, 3000);
            setTimeout(function(){ loseSound.play();}, 1000);
            noLoop();
        }


    }
    if (stop == true) {
        if (speedY > 5) {
            speedY -= 0.1;
        }
    }
    if (sign1Loop) {
        slot1Y += speedY;
        if (slot1Y > height * 0.9) {
            slot1Y = 0;
            if (slotImageCounter2 = slotImageCounter + 1) {
                slotImageCounter += 2;
            }
            else {
                slotImageCounter++;
            }
            if (slotImageCounter >= slotImages.length) {
                slotImageCounter = 0;
            }
        }
        else if (slot1Y > height * 0.45 && !sign2Loop) {
            slot2Y = 0;
            slotImageCounter2 = slotImageCounter + 1;
            sign2Loop = true;
        }
    }
    if (sign2Loop) {
        slot2Y += speedY;
        if (slot2Y > height * 0.9 ) {
            sign2Loop = false;
        }
    }
    if (stopSlot1) {
        if (slots[slotsCounter] == slotImageCounter && slot1Y >= slotSavedY) {
            slot1Loop = false;
            stopSlot1 = false;
            slot1SavedCounter = slots[slotsCounter];
            slotSound.play();
        }
        else if (slots[slotsCounter] == slotImageCounter2 && slot2Y >= slotSavedY) {
            slot1Loop = false;
            stopSlot1 = false;
            slot1SavedCounter = slots[slotsCounter];
            slotSound.play();
        }
    }
    if (stopSlot2) {
        if (slots[slotsCounter + 1] == slotImageCounter && slot1Y >= slotSavedY) {
            slot2Loop = false;
            stopSlot2 = false;
            slot2SavedCounter = slots[slotsCounter + 1];
            slotSound.play();
        }
        else if (slots[slotsCounter + 1] == slotImageCounter2 && slot2Y >= slotSavedY) {
            slot2Loop = false;
            stopSlot2 = false;
            slot2SavedCounter = slots[slotsCounter + 1];
            slotSound.play();
        }
    }
    if (stopSlot3) {
        if (slots[slotsCounter + 2] == slotImageCounter && slot1Y >= slotSavedY) {
            slot3Loop = false;
            stopSlot3 = false;
            slot3SavedCounter = slots[slotsCounter + 2];
            slotSound.play();
        }
        else if (slots[slotsCounter + 2] == slotImageCounter2 && slot2Y >= slotSavedY) {
            slot3Loop = false;
            stopSlot3 = false;
            slot3SavedCounter = slots[slotsCounter + 2];
            slotSound.play();
        }
    }


}

function draw() {
    clear();
    background("#57585A");
    if (slot1Loop) {
        if (sign1Loop) {
            image(slotImages[slotImageCounter], slot1X, slot1Y, slotWidth, slotHeight);
        }
        if (sign2Loop) {
            image(slotImages[slotImageCounter2], slot1X, slot2Y, slotWidth, slotHeight);
        }
    }
    else {
        image(slotImages[slot1SavedCounter], slot1X, slotSavedY, slotWidth, slotHeight);
    }
    if (slot2Loop) {
        if (sign1Loop) {
            image(slotImages[slotImageCounter], slot2X, slot1Y, slotWidth, slotHeight);
        }
        if (sign2Loop) {
            image(slotImages[slotImageCounter2], slot2X, slot2Y, slotWidth, slotHeight);
        }
    }
    else {
        image(slotImages[slot2SavedCounter], slot2X, slotSavedY, slotWidth, slotHeight);
    }
    if (slot3Loop) {
        if (sign1Loop) {
            image(slotImages[slotImageCounter], slot3X, slot1Y, slotWidth, slotHeight);
        }
        if (sign2Loop) {
            image(slotImages[slotImageCounter2], slot3X, slot2Y, slotWidth, slotHeight);
        }
    }
    else {
        image(slotImages[slot3SavedCounter], slot3X, slotSavedY, slotWidth, slotHeight);
    }
    image(backgroundImage, 0, 0, width, height);
    if (leverStatus == 1) {
        image(leverUpImage, leverX, leverY, leverWidth, leverHeight);
        noLoop();
    }
    else {
        image(leverDownImage, leverX, leverY, leverWidth, leverHeight);
    }
    if(leverStatus != 1)
        update();
}

function makeSlot1Stop() {
    stopSlot1 = true;
}

function makeSlot2Stop() {
    stopSlot2 = true;
}

function makeSlot3Stop() {
    stopSlot3 = true;
}

function rollAgain() {
    money = Math.round(money - moneyMinus);
    if (money < 5) {
        money = 0;
    }
    firstStart = false;
    document.getElementById("money").innerHTML = "Money left: " + money;
    slot1Y = 0;
    slot2Y = 0;
    sign1Loop = true;
    sign2Loop = false;
    speedY = 45;
    slot1Loop = true;
    slot2Loop = true;
    slot3Loop = true;
    stop = false;
    stopSlot1 = false;
    stopSlot2 = false;
    stopSlot3 = false;
    setTimeout(function () {
        stop = true
    }, 3000);
    setTimeout(makeSlot1Stop, 4000);
    setTimeout(makeSlot2Stop, 7000);
    setTimeout(makeSlot3Stop, 12000);
    loop();
    spinSound.play();
}

function mousePressed() {
    if (mouseButton === LEFT && leverStatus == 1) {
        if (mouseX >= leverX && mouseX < leverX + leverWidth) {
            if (mouseY > leverY && mouseY < leverY + leverHeight) {
                leverStatus = leverStatus * (-1);
                leverSound.play();
                rollAgain();
            }
        }
    }
}
